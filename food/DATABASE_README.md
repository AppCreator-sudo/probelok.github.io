# 📊 База продуктов ProБелок

## 📈 Статистика

**Всего продуктов:** 250+

**Категории:**
1. Готовые блюда — 19 продуктов
2. Мясо — 9 продуктов
3. Птица — 8 продуктов
4. Рыба белая — 8 продуктов
5. Рыба жирная — 7 продуктов
6. Тунец — 3 продукта
7. Морепродукты свежие — 8 продуктов
8. Морепродукты сушеные — 3 продукта
9. Икра и вяленая рыба — 5 продуктов
10. Яйца — 5 продуктов
11. Молочное — 7 продуктов
12. Сыры — 12 продуктов
13. Субпродукты — 7 продуктов
14. Колбасные изделия — 5 продуктов
15. Бобовые и соя — 9 продуктов
16. Орехи и семена — 10 продуктов
17. Протеин и спортпит — 3 продукта

---

## 🎯 Формат данных

Каждый продукт содержит:

```javascript
{
  name: "Название продукта",
  protein: 0,   // граммы на 100г продукта
  carbs: 0,     // граммы на 100г продукта
  fats: 0,      // граммы на 100г продукта
  calories: 0   // ккал на 100г продукта
}
```

---

## 💡 Использование

### Вариант 1: JSON (для API/базы данных)
```javascript
// Загрузите food-database.json
const response = await fetch('food-database.json');
const data = await response.json();
const products = data.foodDatabase;
```

### Вариант 2: JavaScript модуль
```javascript
// Импортируйте готовый модуль
import foodDatabase from './food-database.js';

// Или скопируйте содержимое прямо в код
const foodDatabase = { /* ... */ };
```

### Вариант 3: Для Telegram Mini App

```javascript
// В вашем Telegram mini app
const foodDatabase = {
  'Мясо': [
    { name: 'Куриная грудка', protein: 31, carbs: 0, fats: 3.6, calories: 165 },
    // ...
  ],
  // остальные категории
};

// Поиск по базе
function searchFood(query) {
  const results = [];
  Object.values(foodDatabase).forEach(category => {
    category.forEach(food => {
      if (food.name.toLowerCase().includes(query.toLowerCase())) {
        results.push(food);
      }
    });
  });
  return results;
}

// Фильтрация по белку
function getHighProteinFoods(minProtein = 20) {
  const results = [];
  Object.values(foodDatabase).forEach(category => {
    category.forEach(food => {
      if (food.protein >= minProtein) {
        results.push(food);
      }
    });
  });
  return results.sort((a, b) => b.protein - a.protein);
}
```

---

## 🔝 Топ-10 продуктов по белку

1. **Сывороточный протеин** — 80г
2. **Казеин** — 75г
3. **Креветки сушеные** — 65г
4. **Кальмары сушеные** — 62г
5. **Мидии сушеные** — 59г
6. **Соевое мясо** — 50г
7. **Янтарная рыба** — 50г
8. **Таранка** — 48г
9. **Вобла вяленая** — 46г
10. **Пармезан** — 38г

---

## 🥗 Категории по назначению

### Для быстрого добора белка:
- Протеин и спортпит
- Морепродукты сушеные
- Икра и вяленая рыба
- Сыры (особенно твердые)

### Для диеты (низкокалорийные):
- Рыба белая
- Морепродукты свежие
- Куриная грудка
- Творог 0%

### Популярные готовые блюда:
- Шашлыки
- Бургеры
- Шаурма
- Пельмени

### Растительный белок:
- Бобовые и соя
- Орехи и семена

---

## 📝 Примечания

- Все значения указаны **на 100 грамм** продукта
- Данные усреднены и могут отличаться в зависимости от производителя
- Для точных расчетов используйте весы
- Готовые блюда рассчитаны с учетом всех ингредиентов

---

## 🔄 Расширение базы

Если хотите добавить продукты:

```javascript
// Добавление в существующую категорию
foodDatabase['Мясо'].push({
  name: 'Новый продукт',
  protein: 25,
  carbs: 0,
  fats: 10,
  calories: 200
});

// Создание новой категории
foodDatabase['Новая категория'] = [
  { name: 'Продукт 1', protein: 20, carbs: 5, fats: 3, calories: 130 }
];
```

---

## 🌐 Интеграция с Open Food Facts

База дополняется поиском в Open Food Facts API:

```javascript
async function searchOpenFoodFacts(query) {
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=1`;
  const response = await fetch(url);
  const data = await response.json();
  
  return data.products.map(p => ({
    name: p.product_name || p.product_name_ru,
    protein: p.nutriments.proteins_100g || 0,
    carbs: p.nutriments.carbohydrates_100g || 0,
    fats: p.nutriments.fat_100g || 0,
    calories: p.nutriments['energy-kcal_100g'] || 0,
    source: 'external'
  }));
}
```

---

## ✅ Готово к использованию!

База готова для:
- PWA приложений
- Telegram Mini Apps
- React/Vue/Angular приложений
- Backend API
- Mobile apps (React Native, Flutter)

Просто скопируйте нужный формат и используйте! 🚀
