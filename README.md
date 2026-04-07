# eMaktab — React prototype build

Прототип переведён на React 18.2 со структурой по файлам, чтобы команда могла встроить это в монолит без «одного огромного index.html».

## Что внутри

- React 18.2 + Vite build
- Компонентная структура (`src/components`)
- Вынос данных вопросов (`src/data`)
- Вынос логики постоянной ссылки результата (`src/lib/resultLink.js`)
- Кнопка **«Назад в eMaktab»** ведёт на `https://emaktab.uz`
- Статическая ссылка результата через `?result=...` (можно хранить в ЛК)
- Убраны упоминания про МДШО

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```
