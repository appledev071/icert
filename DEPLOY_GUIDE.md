# Гайд по деплою сайта на Linux сервер

## Содержание
1. [Подготовка сервера](#1-подготовка-сервера)
2. [Настройка домена](#2-настройка-домена)
3. [Настройка Cloudflare](#3-настройка-cloudflare)
4. [Установка необходимого ПО](#4-установка-необходимого-по)
5. [Настройка Nginx](#5-настройка-nginx)
6. [SSL сертификат](#6-ssl-сертификат)
7. [Настройка сайта](#7-настройка-сайта)
8. [Настройка CI/CD](#8-настройка-cicd)
9. [Мониторинг](#9-мониторинг)
10. [Безопасность](#10-безопасность)
11. [Полезные команды](#11-полезные-команды)

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
Значение: [IP-адрес вашего сервера] # Этот IP будет заменен на IP Cloudflare
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

## 3. Настройка Cloudflare

### 3.1. Добавление домена в Cloudflare
1. Войдите в панель управления Cloudflare
2. Добавьте ваш домен
3. Измените nameservers на те, что предоставляет Cloudflare
4. Дождитесь активации DNS (может занять до 24 часов)

### 3.2. Настройка DNS записей в Cloudflare
```
# Основная A-запись
Тип: A
Имя: @
Значение: [IP-адрес вашего сервера]
Прокси: Включено (оранжевое облако)

# WWW поддомен
Тип: CNAME
Имя: www
Значение: @
Прокси: Включено (оранжевое облако)
```

### 3.3. Настройка SSL/TLS
1. Перейдите в раздел SSL/TLS
2. Установите режим "Full (strict)"
3. Включите "Always Use HTTPS"
4. Включите "Automatic HTTPS Rewrites"

### 3.4. Настройка правил файрвола
1. Перейдите в раздел Security → WAF
2. Создайте правило для защиты от DDoS
3. Настройте правила для блокировки подозрительного трафика
4. Включите "Under Attack Mode" при необходимости

### 3.5. Оптимизация
1. Включите "Auto Minify" для JavaScript, CSS и HTML
2. Включите "Brotli" для сжатия
3. Настройте кэширование в разделе Cache
4. Включите "Rocket Loader" для оптимизации загрузки JavaScript

### 3.6. Настройка IP-адресов
1. В разделе Network → IP Access Rules добавьте IP вашего сервера в белый список
2. Включите "IP Geolocation" для определения страны посетителей
3. Настройте "HTTP/3" для улучшения производительности

## 4. Установка необходимого ПО

### 4.1. Установка Node.js
```bash
# Добавление репозитория Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Установка Node.js
apt install -y nodejs

# Проверка версии
node --version
npm --version
```

### 4.2. Установка Nginx
```bash
# Установка Nginx
apt install -y nginx

# Запуск Nginx
systemctl start nginx
systemctl enable nginx
```

### 4.3. Установка Certbot
```bash
# Установка Certbot
apt install -y certbot python3-certbot-nginx
```

## 5. Настройка Nginx

### 5.1. Создание конфигурации
```bash
# Создание конфигурационного файла
nano /etc/nginx/sites-available/icert
```

### 5.2. Конфигурация Nginx

1. Основной конфиг Nginx (`/etc/nginx/nginx.conf`):
```nginx
user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 768;
    multi_accept on;
}

http {
    # Основные настройки
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    charset utf-8;

    # Настройки логирования
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Настройки оптимизации
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Настройки сжатия
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

    # Подключение конфигураций сайтов
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

2. Конфигурация сайта (`/etc/nginx/sites-available/icert`):
```nginx
server {
    listen 80;
    server_name icert.space www.icert.space;

    # Редирект на HTTPS (Cloudflare)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name icert.space www.icert.space;

    # Настройки для работы с Cloudflare
    set_real_ip_from 103.21.244.0/22;
    set_real_ip_from 103.22.200.0/22;
    set_real_ip_from 103.31.4.0/22;
    set_real_ip_from 104.16.0.0/13;
    set_real_ip_from 104.17.0.0/15;
    set_real_ip_from 104.18.0.0/15;
    set_real_ip_from 104.19.0.0/15;
    set_real_ip_from 104.20.0.0/15;
    set_real_ip_from 104.21.0.0/15;
    set_real_ip_from 104.22.0.0/15;
    set_real_ip_from 104.23.0.0/15;
    set_real_ip_from 104.24.0.0/15;
    set_real_ip_from 104.25.0.0/15;
    set_real_ip_from 104.26.0.0/15;
    set_real_ip_from 104.27.0.0/15;
    set_real_ip_from 104.28.0.0/15;
    set_real_ip_from 131.0.72.0/22;
    set_real_ip_from 141.101.0.0/16;
    set_real_ip_from 162.158.0.0/15;
    set_real_ip_from 172.64.0.0/13;
    set_real_ip_from 172.65.0.0/13;
    set_real_ip_from 172.66.0.0/13;
    set_real_ip_from 172.67.0.0/13;
    set_real_ip_from 173.245.48.0/20;
    set_real_ip_from 188.114.96.0/20;
    set_real_ip_from 188.114.97.0/20;
    set_real_ip_from 188.114.98.0/20;
    set_real_ip_from 188.114.99.0/20;
    set_real_ip_from 190.93.240.0/20;
    set_real_ip_from 190.93.241.0/20;
    set_real_ip_from 190.93.242.0/20;
    set_real_ip_from 190.93.243.0/20;
    set_real_ip_from 197.234.240.0/22;
    set_real_ip_from 197.234.242.0/23;
    set_real_ip_from 198.41.128.0/17;
    set_real_ip_from 2400:cb00::/32;
    set_real_ip_from 2606:4700::/32;
    set_real_ip_from 2803:f800::/32;
    set_real_ip_from 2405:b500::/32;
    set_real_ip_from 2405:8100::/32;
    set_real_ip_from 2c0f:f248::/32;
    set_real_ip_from 2a06:98c0::/29;
    real_ip_header CF-Connecting-IP;

    # SSL настройки для Cloudflare
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
}
```

### 5.3. Активация конфигурации
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

## 6. SSL сертификат

### 6.1. Настройка SSL в Cloudflare
1. Перейдите в раздел SSL/TLS в панели управления Cloudflare
2. Установите режим "Full (strict)"
3. Включите "Always Use HTTPS"
4. Включите "Automatic HTTPS Rewrites"
5. Включите "Minimum TLS Version" и установите значение 1.2
6. Включите "Opportunistic Encryption"
7. Включите "TLS 1.3"
8. Включите "Automatic HTTPS Rewrites"

### 6.2. Дополнительные настройки безопасности
1. Включите "Browser Integrity Check"
2. Включите "Security Level" и установите значение "High"
3. Включите "Bot Fight Mode"
4. Настройте "WAF" (Web Application Firewall)

### 6.3. Получение сертификата
```bash
# Получение SSL сертификата
certbot --nginx -d icert.space -d www.icert.space

# Автоматическое обновление сертификата
certbot renew --dry-run
```

### 6.4. Настройка автообновления
```bash
# Добавление в crontab
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```

## 7. Настройка сайта

### 7.1. Клонирование репозитория
```bash
# Создаем директорию для сайта
mkdir -p /var/www/icert

# Клонируем репозиторий
cd /var/www/icert
git clone https://github.com/your-username/icert.git .

# Устанавливаем зависимости
npm install

# Собираем проект
npm run build
```

### 7.2. Настройка прав доступа
```bash
# Устанавливаем владельца директории
chown -R www-data:www-data /var/www/icert

# Устанавливаем права доступа
chmod -R 755 /var/www/icert
chmod -R 775 /var/www/icert/node_modules
```

### 7.3. Настройка автоматического обновления
```bash
# Создаем скрипт для обновления
cat > /var/www/icert/update.sh << 'EOL'
#!/bin/bash
cd /var/www/icert
git pull
npm install
npm run build
chown -R www-data:www-data .
chmod -R 755 .
chmod -R 775 node_modules
EOL

# Делаем скрипт исполняемым
chmod +x /var/www/icert/update.sh

# Добавляем в crontab (обновление каждый день в 3 утра)
(crontab -l 2>/dev/null; echo "0 3 * * * /var/www/icert/update.sh") | crontab -
```

### 7.4. Настройка переменных окружения
```bash
# Создаем файл с переменными окружения
cat > /var/www/icert/.env << 'EOL'
VITE_API_URL=https://api.icert.space
VITE_APP_ENV=production
EOL

# Устанавливаем права доступа
chown www-data:www-data /var/www/icert/.env
chmod 644 /var/www/icert/.env
```

### 7.5. Настройка PM2 для управления процессами
```bash
# Устанавливаем PM2 глобально
npm install -g pm2

# Создаем конфигурацию PM2
cat > /var/www/icert/ecosystem.config.js << 'EOL'
module.exports = {
  apps: [{
    name: 'icert',
    script: 'npm',
    args: 'run preview',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOL

# Запускаем приложение через PM2
cd /var/www/icert
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 7.6. Настройка автоматического перезапуска при сбоях
```bash
# Настраиваем автоматический перезапуск PM2
pm2 startup
pm2 save

# Проверяем статус
pm2 status
```

## 8. Настройка CI/CD

### 8.1. Создание GitHub Actions
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

## 9. Мониторинг

### 9.1. Установка Prometheus и Grafana
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

### 9.2. Настройка мониторинга
```bash
# Запуск мониторинга
docker-compose up -d
```

## 10. Безопасность

### 10.1. Настройка файрвола
```bash
# Установка UFW
apt install -y ufw

# Настройка правил
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 10.2. Настройка fail2ban
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

## 11. Полезные команды

### 11.1. Мониторинг
```bash
# Просмотр логов Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# Просмотр использования ресурсов
htop
```

### 11.2. Обслуживание
```bash
# Перезапуск Nginx
systemctl restart nginx

# Проверка статуса Nginx
systemctl status nginx

# Проверка SSL сертификата
certbot certificates
```

### 11.3. Бэкапы
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