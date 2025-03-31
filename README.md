# Vite React Shadcn TypeScript Проект

## Требования

- Node.js (версия 18 или выше)
- npm или yarn или bun (рекомендуется последняя версия)

## Установка

1. Клонируйте репозиторий:
```bash
git clone [URL вашего репозитория]
cd [название-проекта]
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
# или
bun install
```

## Разработка

Для запуска проекта в режиме разработки:
```bash
npm run dev
# или
yarn dev
# или
bun run dev
```

## Сборка для продакшена

1. Создайте продакшен сборку:
```bash
npm run build
# или
yarn build
# или
bun run build
```

2. Для предварительного просмотра собранного проекта:
```bash
npm run preview
# или
yarn preview
# или
bun run preview
```

## Деплой

### Вариант 1: Деплой на Vercel

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Войдите в свой аккаунт Vercel:
```bash
vercel login
```

3. Деплой проекта:
```bash
vercel
```

### Вариант 2: Деплой на Netlify

1. Установите Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Войдите в свой аккаунт Netlify:
```bash
netlify login
```

3. Деплой проекта:
```bash
netlify deploy
```

### Вариант 3: Деплой на GitHub Pages

1. Добавьте в `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/[название-репозитория]/',
  // ... остальные настройки
})
```

2. Создайте файл `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

### Вариант 4: Деплой на Linux сервер

1. Подготовка сервера:
```bash
# Установка Node.js и npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка nginx
sudo apt-get update
sudo apt-get install -y nginx

# Установка PM2 для управления процессами
sudo npm install -g pm2
```

2. Настройка Nginx:
```bash
# Создайте конфигурационный файл для вашего сайта
sudo nano /etc/nginx/sites-available/your-site
```

Добавьте следующую конфигурацию:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/your-site/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кэширование статических файлов
    location /assets {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

3. Активация конфигурации:
```bash
sudo ln -s /etc/nginx/sites-available/your-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

4. Деплой приложения:
```bash
# Создайте директорию для приложения
sudo mkdir -p /var/www/your-site
sudo chown -R $USER:$USER /var/www/your-site

# Клонируйте репозиторий
cd /var/www/your-site
git clone [URL вашего репозитория] .

# Установите зависимости и соберите проект
npm install
npm run build

# Запустите приложение через PM2 (если есть серверная часть)
pm2 start npm --name "your-app" -- start
pm2 save
pm2 startup
```

5. Настройка SSL с Let's Encrypt:
```bash
# Установка Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Получение SSL сертификата
sudo certbot --nginx -d your-domain.com
```

6. Автоматизация деплоя:
Создайте скрипт `deploy.sh`:
```bash
#!/bin/bash
cd /var/www/your-site
git pull
npm install
npm run build
pm2 restart your-app
```

Сделайте скрипт исполняемым:
```bash
chmod +x deploy.sh
```

## Структура проекта

```
├── src/                # Исходный код
├── public/            # Статические файлы
├── components.json    # Конфигурация shadcn/ui
├── vite.config.ts     # Конфигурация Vite
├── tailwind.config.ts # Конфигурация Tailwind CSS
└── package.json       # Зависимости и скрипты
```

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- React Query
- Zod
- React Hook Form

## Лицензия

MIT
