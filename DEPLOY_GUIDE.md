# Гайд по деплою сайта на Linux сервер

## Содержание
1. [Подготовка сервера](#1-подготовка-сервера)
2. [Настройка домена](#2-настройка-домена)
3. [Установка необходимого ПО](#3-установка-необходимого-по)
4. [Настройка Nginx](#4-настройка-nginx)
5. [SSL сертификат](#5-ssl-сертификат)
6. [Деплой сайта](#6-деплой-сайта)
7. [Настройка CI/CD](#7-настройка-cicd)
8. [Мониторинг](#8-мониторинг)
9. [Безопасность](#9-безопасность)
10. [Полезные команды](#10-полезные-команды)

## 1. Подготовка сервера

### 1.1. Подключение к серверу
```bash
ssh root@your_server_ip
```

### 1.2. Обновление системы
```bash
apt update && apt upgrade -y
```

### 1.3. Установка базовых утилит
```bash
apt install -y curl wget git htop
```

## 2. Настройка домена

### 2.1. DNS записи
В панели управления доменом добавьте следующие записи:

```
# Основная A-запись
Тип: A
Имя: @
Значение: [IP-адрес вашего сервера]
TTL: 3600

# WWW поддомен
Тип: CNAME
Имя: www
Значение: @
TTL: 3600
```

### 2.2. Проверка DNS
```bash
# Установка dig
apt install -y dnsutils

# Проверка A-записи
dig icert.space

# Проверка CNAME записи
dig www.icert.space
```

## 3. Установка необходимого ПО

### 3.1. Установка Node.js
```bash
# Добавление репозитория Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Установка Node.js
apt install -y nodejs

# Проверка версии
node --version
npm --version
```

### 3.2. Установка Nginx
```bash
# Установка Nginx
apt install -y nginx

# Запуск Nginx
systemctl start nginx
systemctl enable nginx
```

### 3.3. Установка Certbot
```bash
# Установка Certbot
apt install -y certbot python3-certbot-nginx
```

## 4. Настройка Nginx

### 4.1. Создание конфигурации
```bash
# Создание конфигурационного файла
nano /etc/nginx/sites-available/icert
```

### 4.2. Конфигурация Nginx
```nginx
server {
    listen 80;
    server_name icert.space www.icert.space;

    # Редирект с HTTP на HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name icert.space www.icert.space;

    # SSL сертификаты
    ssl_certificate /etc/letsencrypt/live/icert.space/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/icert.space/privkey.pem;

    # Улучшенные настройки SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;

    # HSTS
    add_header Strict-Transport-Security "max-age=63072000" always;

    root /var/www/icert/dist;
    index index.html;

    # Кэширование статических файлов
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Основной location
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;
}
```

### 4.3. Активация конфигурации
```bash
# Создание символической ссылки
ln -s /etc/nginx/sites-available/icert /etc/nginx/sites-enabled/

# Удаление дефолтной конфигурации
rm /etc/nginx/sites-enabled/default

# Проверка конфигурации
nginx -t

# Перезапуск Nginx
systemctl restart nginx
```

## 5. SSL сертификат

### 5.1. Получение сертификата
```bash
# Получение SSL сертификата
certbot --nginx -d icert.space -d www.icert.space

# Автоматическое обновление сертификата
certbot renew --dry-run
```

### 5.2. Настройка автообновления
```bash
# Добавление в crontab
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```

## 6. Деплой сайта

### 6.1. Подготовка директории
```bash
# Создание директории для сайта
mkdir -p /var/www/icert

# Установка прав
chown -R www-data:www-data /var/www/icert
chmod -R 755 /var/www/icert
```

### 6.2. Копирование файлов
```bash
# Копирование собранного проекта
cp -r dist/* /var/www/icert/

# Проверка прав
chown -R www-data:www-data /var/www/icert
```

## 7. Настройка CI/CD

### 7.1. Создание GitHub Actions
Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install Dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to VPS
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          source: "dist/*"
          target: "/var/www/icert"
```

## 8. Мониторинг

### 8.1. Установка Prometheus и Grafana
```bash
# Создание docker-compose.yml
nano docker-compose.yml
```

```yaml
version: '3'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
```

### 8.2. Настройка мониторинга
```bash
# Запуск мониторинга
docker-compose up -d
```

## 9. Безопасность

### 9.1. Настройка файрвола
```bash
# Установка UFW
apt install -y ufw

# Настройка правил
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 9.2. Настройка fail2ban
```bash
# Установка fail2ban
apt install -y fail2ban

# Создание конфигурации
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Редактирование конфигурации
nano /etc/fail2ban/jail.local
```

```ini
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```

```bash
# Перезапуск fail2ban
systemctl restart fail2ban
```

## 10. Полезные команды

### 10.1. Мониторинг
```bash
# Просмотр логов Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# Просмотр использования ресурсов
htop
```

### 10.2. Обслуживание
```bash
# Перезапуск Nginx
systemctl restart nginx

# Проверка статуса Nginx
systemctl status nginx

# Проверка SSL сертификата
certbot certificates
```

### 10.3. Бэкапы
```bash
# Создание бэкапа
tar -czf /var/backups/icert_$(date +%Y%m%d).tar.gz /var/www/icert

# Восстановление из бэкапа
tar -xzf /var/backups/icert_20240101.tar.gz -C /
```

## Полезные ссылки
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions) 