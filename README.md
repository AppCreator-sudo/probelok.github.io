# ProБелок — Telegram Mini App

Трекер питания с фокусом на белок для Telegram.

## 🚀 Быстрый старт

### 1. Размещение приложения (HTTPS обязательно)

Telegram требует HTTPS для Web App. Варианты:

#### GitHub Pages (бесплатно)
```bash
# Создайте репозиторий на GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/probelok.git
git push -u origin main
```
Затем включите GitHub Pages в настройках репозитория.

#### Vercel (бесплатно)
```bash
npm i -g vercel
vercel
```

#### Netlify (бесплатно)
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### 2. Настройка бота в Telegram

1. Откройте [@BotFather](https://t.me/BotFather)
2. Создайте нового бота: `/newbot`
3. Создайте Web App: `/newapp`
4. BotFather попросит:
   - Название приложения
   - Краткое описание
   - Фото 640x360 (опционально)
   - URL приложения (ваш HTTPS URL из шага 1)
   - Короткое имя для кнопки

### 3. Добавление кнопки в бота

После создания Web App, BotFather даст ссылку вида:
```
t.me/yourbot/appname
```

Эту ссылку можно:
- Добавить в меню бота через `/mybots` → Ваш бот → Bot Settings → Menu Button
- Отправлять в сообщениях
- Добавить в inline-кнопки

### 4. Прямая ссылка на Web App

Также можно использовать прямую ссылку:
```
https://t.me/yourbot/webapp?startapp=probelok
```

## 📱 Возможности

- ✅ Интеграция с Telegram Web Apps SDK
- ✅ Автоматическая тема (светлая/тёмная) из Telegram
- ✅ Использование имени пользователя Telegram
- ✅ MainButton для добавления продуктов
- ✅ Тактильная отдача (Haptic Feedback)
- ✅ Адаптация под размеры экрана
- ✅ PWA-функционал (офлайн-режим)

## 🎨 Темизация

Приложение автоматически использует цвета темы Telegram:
- `bg_color` — фон
- `text_color` — текст
- `button_color` — кнопки
- `secondary_bg_color` — вторичный фон

## 🔧 Настройка

### Изменение цветов MainButton

В `index.html` найдите `setupMainButton()` и измените:
```javascript
tg.MainButton.setColor('#FF6B9D'); // Ваш цвет
```

### Изменение текста приветствия

В функции `showMainScreen()` можно изменить формат приветствия.

## 📊 Структура проекта

```
app/
├── index.html          # Основной файл приложения
├── manifest.json       # PWA манифест
├── service-worker.js   # Service worker для офлайн-режима
├── icon-192.png        # Иконка 192x192
├── icon-512.png        # Иконка 512x512
└── README.md           # Этот файл
```

## 🛠 Разработка

### Локальный запуск
```bash
# Используем любой локальный сервер
npx http-server -p 3000
# или
python -m http.server 3000
```

### Тестирование в Telegram

1. Задеплойте на HTTPS хостинг
2. В BotFather обновите URL Web App
3. Откройте бота в Telegram

## 📝 API Telegram WebApp

Используемые методы:
- `tg.expand()` — разворачивает на весь экран
- `tg.ready()` — сообщает о готовности
- `tg.MainButton` — главная кнопка внизу
- `tg.HapticFeedback` — тактильная отдача
- `tg.themeParams` — цвета темы
- `tg.initDataUnsafe.user` — данные пользователя

## 🔗 Полезные ссылки

- [Telegram Web Apps Docs](https://core.telegram.org/bots/webapps)
- [BotFather Commands](https://core.telegram.org/bots#botfather)
- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

## 📄 Лицензия

MIT
