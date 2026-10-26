# React landing page

Минимальный лендинг на React + Vite. Содержимое страницы находится в `src/main.jsx`, стили — в `src/styles.css`.

## Локальный запуск

Нужен Node.js 20.19 или новее.

```bash
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
npm run preview
```

## Публикация на GitHub Pages

В проект добавлен workflow `.github/workflows/deploy-pages.yml`. После первого push в ветку `main`:

1. Создайте репозиторий на GitHub и добавьте его как `origin`.
2. Закоммитьте файлы и отправьте ветку `main`.
3. В настройках репозитория откройте **Settings → Pages** и в разделе **Build and deployment** выберите **GitHub Actions**.

Каждый последующий push в `main` соберёт React-приложение и опубликует папку `dist`. В `vite.config.js` задан относительный путь к ассетам, поэтому сайт работает как на `username.github.io`, так и на `username.github.io/repository-name/`.
