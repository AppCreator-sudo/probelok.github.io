// ДОПОЛНЕНИЕ: Готовые блюда из общепита
// Добавьте эти категории к основной базе foodDatabaseComplete

const readyMealsExtension = {
    'Столовая - Супы': [
        { name: 'Борщ', protein: 3, carbs: 6, fats: 3, calories: 60 },
        { name: 'Щи', protein: 2.5, carbs: 5, fats: 2.5, calories: 50 },
        { name: 'Солянка мясная', protein: 4, carbs: 5, fats: 6, calories: 90 },
        { name: 'Суп гороховый', protein: 5, carbs: 10, fats: 2, calories: 80 },
        { name: 'Суп куриный с лапшой', protein: 3, carbs: 7, fats: 2, calories: 60 },
        { name: 'Суп харчо', protein: 4, carbs: 7, fats: 4, calories: 80 },
        { name: 'Уха', protein: 5, carbs: 3, fats: 2, calories: 50 },
        { name: 'Рассольник', protein: 3, carbs: 6, fats: 3, calories: 65 },
        { name: 'Грибной суп', protein: 2, carbs: 5, fats: 3, calories: 55 },
        { name: 'Суп-пюре из брокколи', protein: 3, carbs: 8, fats: 4, calories: 75 },
        { name: 'Том ям', protein: 5, carbs: 6, fats: 3, calories: 70 },
        { name: 'Минестроне', protein: 3, carbs: 9, fats: 2, calories: 65 }
    ],
    'Столовая - Вторые блюда': [
        { name: 'Гуляш из говядины', protein: 12, carbs: 5, fats: 8, calories: 145 },
        { name: 'Котлета по-киевски', protein: 15, carbs: 12, fats: 18, calories: 270 },
        { name: 'Котлета домашняя', protein: 14, carbs: 10, fats: 12, calories: 210 },
        { name: 'Тефтели в томатном соусе', protein: 12, carbs: 8, fats: 10, calories: 175 },
        { name: 'Биточки куриные', protein: 16, carbs: 8, fats: 7, calories: 165 },
        { name: 'Отбивная свиная', protein: 18, carbs: 5, fats: 15, calories: 235 },
        { name: 'Печень тушеная в сметане', protein: 16, carbs: 5, fats: 8, calories: 160 },
        { name: 'Бефстроганов', protein: 14, carbs: 6, fats: 12, calories: 195 },
        { name: 'Курица в сметанном соусе', protein: 18, carbs: 4, fats: 10, calories: 180 },
        { name: 'Рыба в кляре', protein: 12, carbs: 15, fats: 8, calories: 185 },
        { name: 'Рыба запеченная', protein: 16, carbs: 2, fats: 5, calories: 115 },
        { name: 'Тушеная капуста с мясом', protein: 8, carbs: 9, fats: 6, calories: 125 },
        { name: 'Азу', protein: 13, carbs: 8, fats: 9, calories: 170 },
        { name: 'Чахохбили', protein: 15, carbs: 6, fats: 8, calories: 160 }
    ],
    'Столовая - Гарниры': [
        { name: 'Картофельное пюре', protein: 2, carbs: 14, fats: 4, calories: 95 },
        { name: 'Картофель отварной', protein: 2, carbs: 16, fats: 0.5, calories: 80 },
        { name: 'Картофель жареный', protein: 2.5, carbs: 23, fats: 9, calories: 190 },
        { name: 'Гречка отварная', protein: 4.5, carbs: 20, fats: 1.3, calories: 110 },
        { name: 'Рис отварной', protein: 2.7, carbs: 28, fats: 0.3, calories: 116 },
        { name: 'Макароны отварные', protein: 5, carbs: 31, fats: 0.5, calories: 158 },
        { name: 'Перловка отварная', protein: 3, carbs: 28, fats: 0.4, calories: 123 },
        { name: 'Овощное рагу', protein: 1.5, carbs: 8, fats: 3, calories: 65 },
        { name: 'Капуста тушеная', protein: 1.8, carbs: 6, fats: 2, calories: 50 },
        { name: 'Винегрет', protein: 1.6, carbs: 8, fats: 5, calories: 80 },
        { name: 'Салат Оливье', protein: 5, carbs: 12, fats: 15, calories: 200 },
        { name: 'Салат Цезарь', protein: 8, carbs: 6, fats: 12, calories: 160 }
    ],
    'McDonald\'s': [
        { name: 'Биг Мак', protein: 25, carbs: 46, fats: 25, calories: 510 },
        { name: 'Чизбургер', protein: 15, carbs: 33, fats: 12, calories: 300 },
        { name: 'Гамбургер', protein: 13, carbs: 31, fats: 9, calories: 255 },
        { name: 'Роял Чизбургер', protein: 28, carbs: 42, fats: 26, calories: 510 },
        { name: 'Двойной Чизбургер', protein: 25, carbs: 35, fats: 24, calories: 450 },
        { name: 'Фреш МакМаффин', protein: 18, carbs: 30, fats: 13, calories: 300 },
        { name: 'Чикен Макнаггетс 6 шт', protein: 16, carbs: 15, fats: 16, calories: 270 },
        { name: 'Чикен Макнаггетс 9 шт', protein: 24, carbs: 23, fats: 24, calories: 405 },
        { name: 'Филе-О-Фиш', protein: 15, carbs: 40, fats: 17, calories: 380 },
        { name: 'Картофель фри маленький', protein: 3, carbs: 29, fats: 11, calories: 230 },
        { name: 'Картофель фри средний', protein: 4, carbs: 44, fats: 16, calories: 340 },
        { name: 'Картофель фри большой', protein: 6, carbs: 66, fats: 25, calories: 510 }
    ],
    'KFC': [
        { name: 'Твистер', protein: 18, carbs: 39, fats: 16, calories: 370 },
        { name: 'Шефбургер', protein: 22, carbs: 42, fats: 20, calories: 430 },
        { name: 'Байтс 3 шт', protein: 12, carbs: 18, fats: 8, calories: 195 },
        { name: 'Байтс 5 шт', protein: 20, carbs: 30, fats: 13, calories: 325 },
        { name: 'Острые крылышки 3 шт', protein: 18, carbs: 12, fats: 15, calories: 255 },
        { name: 'Острые крылышки 5 шт', protein: 30, carbs: 20, fats: 25, calories: 425 },
        { name: 'Баскет S (3 стрипса)', protein: 24, carbs: 30, fats: 18, calories: 385 },
        { name: 'Баскет M (5 стрипсов)', protein: 40, carbs: 50, fats: 30, calories: 640 },
        { name: 'Картофель по-деревенски маленький', protein: 4, carbs: 35, fats: 12, calories: 260 },
        { name: 'Картофель по-деревенски большой', protein: 6, carbs: 52, fats: 18, calories: 390 }
    ],
    'Burger King': [
        { name: 'Воппер', protein: 28, carbs: 51, fats: 27, calories: 550 },
        { name: 'Воппер Джуниор', protein: 17, carbs: 31, fats: 15, calories: 330 },
        { name: 'Чизбургер', protein: 14, carbs: 28, fats: 13, calories: 280 },
        { name: 'Гамбургер', protein: 12, carbs: 27, fats: 10, carbs: 245 },
        { name: 'Кинг Наггетс 6 шт', protein: 15, carbs: 14, fats: 14, calories: 245 },
        { name: 'Кинг Наггетс 9 шт', protein: 22, carbs: 21, fats: 21, calories: 367 },
        { name: 'Кинг Фри маленький', protein: 3, carbs: 30, fats: 13, calories: 240 },
        { name: 'Кинг Фри средний', protein: 4, carbs: 45, fats: 19, calories: 360 },
        { name: 'Кинг Фри большой', protein: 6, carbs: 67, fats: 29, calories: 540 },
        { name: 'Луковые кольца маленькие', protein: 3, carbs: 28, fats: 11, calories: 220 }
    ],
    'Subway': [
        { name: 'Сэндвич Итальянский БМТ 15см', protein: 18, carbs: 40, fats: 16, calories: 380 },
        { name: 'Сэндвич Курица терияки 15см', protein: 20, carbs: 50, fats: 6, calories: 340 },
        { name: 'Сэндвич Ветчина 15см', protein: 17, carbs: 42, fats: 5, calories: 280 },
        { name: 'Сэндвич Индейка 15см', protein: 19, carbs: 43, fats: 4, calories: 290 },
        { name: 'Сэндвич Тунец 15см', protein: 21, carbs: 40, fats: 14, calories: 370 },
        { name: 'Сэндвич Стейк и сыр 15см', protein: 22, carbs: 42, fats: 12, calories: 360 },
        { name: 'Салат Цезарь с курицей', protein: 22, carbs: 8, fats: 14, calories: 240 }
    ],
    'Додо Пицца': [
        { name: 'Пепперони средняя 1 кусок', protein: 12, carbs: 28, fats: 11, calories: 265 },
        { name: 'Маргарита средняя 1 кусок', protein: 10, carbs: 30, fats: 9, calories: 245 },
        { name: 'Мясная средняя 1 кусок', protein: 13, carbs: 26, fats: 13, calories: 280 },
        { name: 'Четыре сыра средняя 1 кусок', protein: 12, carbs: 27, fats: 12, calories: 270 },
        { name: 'Гавайская средняя 1 кусок', protein: 11, carbs: 29, fats: 9, calories: 250 },
        { name: 'Цезарь средняя 1 кусок', protein: 11, carbs: 26, fats: 10, calories: 245 }
    ],
    'Сушия и роллы': [
        { name: 'Ролл Филадельфия', protein: 9, carbs: 17, fats: 7, calories: 170 },
        { name: 'Ролл Калифорния', protein: 7, carbs: 16, fats: 5, calories: 140 },
        { name: 'Ролл с лососем', protein: 8, carbs: 15, fats: 4, calories: 130 },
        { name: 'Ролл с тунцом', protein: 9, carbs: 15, fats: 3, calories: 125 },
        { name: 'Ролл с огурцом', protein: 2, carbs: 18, fats: 1, calories: 90 },
        { name: 'Ролл с креветкой', protein: 8, carbs: 16, fats: 2, calories: 115 },
        { name: 'Нигири с лососем (1 шт)', protein: 4, carbs: 8, fats: 2, calories: 65 },
        { name: 'Нигири с тунцом (1 шт)', protein: 5, carbs: 8, fats: 1, calories: 60 },
        { name: 'Сашими лосось (1 кусок)', protein: 6, carbs: 0, fats: 4, calories: 60 },
        { name: 'Сашими тунец (1 кусок)', protein: 7, carbs: 0, fats: 1, calories: 35 },
        { name: 'Запеченный ролл', protein: 10, carbs: 18, fats: 9, calories: 195 }
    ],
    'Азиатская кухня': [
        { name: 'Рамен куриный', protein: 15, carbs: 45, fats: 12, calories: 350 },
        { name: 'Рамен со свининой', protein: 18, carbs: 45, fats: 16, calories: 400 },
        { name: 'Удон с курицей', protein: 14, carbs: 40, fats: 8, calories: 290 },
        { name: 'Удон с морепродуктами', protein: 16, carbs: 42, fats: 6, calories: 285 },
        { name: 'Фо Бо (вьетнамский суп)', protein: 12, carbs: 35, fats: 5, calories: 240 },
        { name: 'Пад Тай с курицей', protein: 18, carbs: 50, fats: 14, calories: 405 },
        { name: 'Пад Тай с креветками', protein: 20, carbs: 48, fats: 12, calories: 385 },
        { name: 'Курица в кисло-сладком соусе', protein: 16, carbs: 35, fats: 8, calories: 285 },
        { name: 'Курица Кунг Пао', protein: 22, carbs: 18, fats: 15, calories: 305 },
        { name: 'Говядина терияки', protein: 20, carbs: 25, fats: 12, calories: 300 },
        { name: 'Рис жареный с овощами', protein: 5, carbs: 40, fats: 7, calories: 245 },
        { name: 'Рис жареный с курицей', protein: 12, carbs: 42, fats: 10, calories: 310 },
        { name: 'Димсамы с мясом (4 шт)', protein: 14, carbs: 24, fats: 8, calories: 230 },
        { name: 'Димсамы с креветкой (4 шт)', protein: 12, carbs: 22, fats: 6, calories: 195 },
        { name: 'Вок с курицей', protein: 16, carbs: 35, fats: 12, calories: 320 },
        { name: 'Вок с говядиной', protein: 18, carbs: 32, fats: 14, calories: 340 },
        { name: 'Вок с морепродуктами', protein: 17, carbs: 34, fats: 10, calories: 300 }
    ],
    'Грузинская кухня': [
        { name: 'Хинкали с мясом (1 шт)', protein: 6, carbs: 12, fats: 5, calories: 115 },
        { name: 'Хинкали с сыром (1 шт)', protein: 5, carbs: 13, fats: 4, calories: 105 },
        { name: 'Хачапури по-аджарски', protein: 12, carbs: 25, fats: 18, calories: 310 },
        { name: 'Хачапури по-имеретински', protein: 15, carbs: 30, fats: 20, calories: 360 },
        { name: 'Харчо', protein: 8, carbs: 10, fats: 7, calories: 140 },
        { name: 'Чахохбили', protein: 15, carbs: 6, fats: 8, calories: 160 },
        { name: 'Сациви', protein: 12, carbs: 8, fats: 12, calories: 185 },
        { name: 'Лобио', protein: 7, carbs: 18, fats: 4, calories: 135 },
        { name: 'Пхали (1 порция)', protein: 3, carbs: 8, fats: 6, calories: 95 },
        { name: 'Оджахури', protein: 14, carbs: 20, fats: 15, calories: 280 }
    ],
    'Итальянская кухня': [
        { name: 'Паста Карбонара', protein: 15, carbs: 45, fats: 18, calories: 405 },
        { name: 'Паста Болоньезе', protein: 14, carbs: 48, fats: 12, calories: 360 },
        { name: 'Паста с морепродуктами', protein: 18, carbs: 45, fats: 10, calories: 350 },
        { name: 'Ризотто с грибами', protein: 8, carbs: 40, fats: 12, calories: 300 },
        { name: 'Ризотто с морепродуктами', protein: 15, carbs: 42, fats: 10, calories: 320 },
        { name: 'Лазанья мясная', protein: 16, carbs: 25, fats: 15, calories: 310 },
        { name: 'Капрезе (салат)', protein: 12, carbs: 4, fats: 18, calories: 220 },
        { name: 'Минестроне', protein: 3, carbs: 9, fats: 2, calories: 65 },
        { name: 'Тирамису (1 порция)', protein: 6, carbs: 35, fats: 18, calories: 330 }
    ],
    'Салаты и закуски': [
        { name: 'Греческий салат', protein: 4, carbs: 5, fats: 12, calories: 145 },
        { name: 'Цезарь с курицей', protein: 20, carbs: 10, fats: 15, calories: 265 },
        { name: 'Цезарь с креветками', protein: 18, carbs: 12, fats: 12, calories: 235 },
        { name: 'Салат Нисуаз', protein: 15, carbs: 8, fats: 14, calories: 220 },
        { name: 'Салат с тунцом', protein: 16, carbs: 6, fats: 10, calories: 180 },
        { name: 'Овощной салат', protein: 2, carbs: 8, fats: 5, calories: 85 },
        { name: 'Салат Оливье', protein: 5, carbs: 12, fats: 15, calories: 200 },
        { name: 'Салат Столичный', protein: 6, carbs: 10, fats: 14, calories: 190 },
        { name: 'Винегрет', protein: 1.6, carbs: 8, fats: 5, calories: 80 },
        { name: 'Сельдь под шубой', protein: 7, carbs: 10, fats: 12, calories: 180 },
        { name: 'Крабовый салат', protein: 4, carbs: 9, fats: 8, calories: 125 },
        { name: 'Брускетта с томатами (1 шт)', protein: 3, carbs: 12, fats: 4, calories: 95 }
    ],
    'Завтраки': [
        { name: 'Омлет из 2 яиц', protein: 14, carbs: 2, fats: 15, calories: 198 },
        { name: 'Яичница из 2 яиц', protein: 13, carbs: 1, fats: 16, calories: 196 },
        { name: 'Каша овсяная на молоке', protein: 4, carbs: 15, fats: 3, calories: 105 },
        { name: 'Каша гречневая на молоке', protein: 6, carbs: 22, fats: 3, calories: 140 },
        { name: 'Сырники (2 шт)', protein: 12, carbs: 24, fats: 10, calories: 240 },
        { name: 'Блины (3 шт)', protein: 8, carbs: 35, fats: 7, calories: 245 },
        { name: 'Блины с творогом (3 шт)', protein: 12, carbs: 38, fats: 9, calories: 285 },
        { name: 'Круассан', protein: 8, carbs: 42, fats: 21, calories: 406 },
        { name: 'Панкейки (3 шт)', protein: 9, carbs: 45, fats: 8, calories: 295 },
        { name: 'Гранола с йогуртом', protein: 8, carbs: 35, fats: 10, calories: 260 }
    ],
    'Напитки кафе': [
        { name: 'Капучино (300 мл)', protein: 5, carbs: 8, fats: 5, calories: 95 },
        { name: 'Латте (300 мл)', protein: 6, carbs: 12, fats: 5, calories: 115 },
        { name: 'Раф кофе (300 мл)', protein: 4, carbs: 18, fats: 8, calories: 160 },
        { name: 'Американо (300 мл)', protein: 0.5, carbs: 0, fats: 0, calories: 5 },
        { name: 'Флэт уайт (200 мл)', protein: 6, carbs: 8, fats: 7, calories: 120 },
        { name: 'Матча латте (300 мл)', protein: 5, carbs: 15, fats: 6, calories: 135 },
        { name: 'Какао (300 мл)', protein: 8, carbs: 25, fats: 9, calories: 210 },
        { name: 'Смузи ягодный (300 мл)', protein: 4, carbs: 28, fats: 2, calories: 145 },
        { name: 'Смузи банан-клубника (300 мл)', protein: 5, carbs: 32, fats: 1, calories: 155 },
        { name: 'Протеиновый коктейль (300 мл)', protein: 25, carbs: 15, fats: 3, calories: 195 }
    ]
};

// Инструкция по объединению:
// 1. Скопируйте весь объект readyMealsExtension
// 2. Добавьте его категории в основной объект foodDatabaseComplete
// Например:
// const fullDatabase = { ...foodDatabaseComplete, ...readyMealsExtension };

// Глобальная переменная для использования в браузере
window.readyMealsExtension = readyMealsExtension;
