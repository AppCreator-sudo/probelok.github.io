// ЭКСТРЕМАЛЬНОЕ РАСШИРЕНИЕ базы продуктов
// Экзотика, суперфуды, региональные кухни, уличная еда и многое другое

const extremeFoodExtension = {
    'Экзотические фрукты': [
        { name: 'Питайя (драконий фрукт)', protein: 0.4, carbs: 13, fats: 0.4, calories: 50 },
        { name: 'Рамбутан', protein: 0.7, carbs: 20.8, fats: 0.2, calories: 82 },
        { name: 'Лонган', protein: 1.3, carbs: 15, fats: 0.1, calories: 60 },
        { name: 'Личи', protein: 0.8, carbs: 15.2, fats: 0.4, calories: 66 },
        { name: 'Маракуйя', protein: 2.2, carbs: 23, fats: 0.7, calories: 97 },
        { name: 'Карамбола', protein: 1, carbs: 6.7, fats: 0.3, calories: 31 },
        { name: 'Дуриан', protein: 1.5, carbs: 27.1, fats: 5.3, calories: 147 },
        { name: 'Мангостин', protein: 0.4, carbs: 17.9, fats: 0.6, calories: 73 },
        { name: 'Папайя', protein: 0.5, carbs: 10.8, fats: 0.3, calories: 43 },
        { name: 'Гуава', protein: 2.6, carbs: 14.3, fats: 0.9, calories: 68 },
        { name: 'Физалис', protein: 1.9, carbs: 11.2, fats: 0.7, calories: 53 },
        { name: 'Кумкват', protein: 1.9, carbs: 15.9, fats: 0.9, calories: 71 },
        { name: 'Фейхоа', protein: 1, carbs: 10.6, fats: 0.4, calories: 49 },
        { name: 'Помело', protein: 0.8, carbs: 8.6, fats: 0, calories: 38 }
    ],
    'Суперфуды': [
        { name: 'Ягоды годжи сушеные', protein: 14, carbs: 64, fats: 0.4, calories: 309 },
        { name: 'Ягоды асаи порошок', protein: 8, carbs: 44, fats: 32, calories: 535 },
        { name: 'Спирулина порошок', protein: 57, carbs: 24, fats: 8, calories: 290 },
        { name: 'Хлорелла порошок', protein: 58, carbs: 23, fats: 9, calories: 387 },
        { name: 'Семена конопли', protein: 31, carbs: 8, fats: 49, calories: 553 },
        { name: 'Киноа белая сухая', protein: 14, carbs: 64, fats: 6, calories: 368 },
        { name: 'Амарант', protein: 14, carbs: 65, fats: 7, calories: 371 },
        { name: 'Каша теф', protein: 13, carbs: 65, fats: 2.4, calories: 367 },
        { name: 'Ягоды черноплодной рябины', protein: 1.5, carbs: 10.9, fats: 0.2, calories: 52 },
        { name: 'Облепиха', protein: 1.2, carbs: 5.7, fats: 5.4, calories: 82 },
        { name: 'Матча порошок', protein: 30, carbs: 38, fats: 5, calories: 324 },
        { name: 'Какао сырое', protein: 20, carbs: 12, fats: 50, calories: 585 },
        { name: 'Маковые семена', protein: 18, carbs: 28, fats: 42, calories: 525 },
        { name: 'Семена чиа черные', protein: 17, carbs: 42, fats: 31, calories: 486 }
    ],
    'Редкие виды мяса и дичь': [
        { name: 'Мясо страуса', protein: 22, carbs: 0, fats: 2.8, calories: 115 },
        { name: 'Мясо бизона', protein: 20, carbs: 0, fats: 2.4, calories: 109 },
        { name: 'Мясо ягненка', protein: 16.5, carbs: 0, fats: 15, calories: 209 },
        { name: 'Лосятина', protein: 22, carbs: 0, fats: 3.3, calories: 112 },
        { name: 'Медвежатина', protein: 20, carbs: 0, fats: 8.3, calories: 155 },
        { name: 'Кабан', protein: 21, carbs: 0, fats: 3.6, calories: 122 },
        { name: 'Фазан', protein: 24, carbs: 0, fats: 3.6, calories: 133 },
        { name: 'Куропатка', protein: 25, carbs: 0, fats: 2.3, calories: 114 },
        { name: 'Цесарка', protein: 21, carbs: 0, fats: 6, calories: 110 },
        { name: 'Лягушачьи лапки', protein: 16, carbs: 0, fats: 0.3, calories: 73 }
    ],
    'Уличная еда Азии': [
        { name: 'Баози (паровые булочки)', protein: 6, carbs: 30, fats: 3, calories: 175 },
        { name: 'Гуа бао', protein: 12, carbs: 35, fats: 8, calories: 270 },
        { name: 'Такояки (6 шт)', protein: 8, carbs: 25, fats: 12, calories: 245 },
        { name: 'Окономияки', protein: 12, carbs: 28, fats: 15, calories: 295 },
        { name: 'Якитори (1 шт)', protein: 7, carbs: 2, fats: 3, calories: 60 },
        { name: 'Сатай (3 шт)', protein: 15, carbs: 5, fats: 10, calories: 175 },
        { name: 'Банх ми сэндвич', protein: 15, carbs: 38, fats: 10, calories: 310 },
        { name: 'Момо (4 шт)', protein: 10, carbs: 22, fats: 6, calories: 185 },
        { name: 'Момо с овощами (4 шт)', protein: 6, carbs: 24, fats: 4, calories: 155 },
        { name: 'Бао бургер', protein: 16, carbs: 32, fats: 12, calories: 305 }
    ],
    'Латиноамериканская кухня': [
        { name: 'Эмпанада (1 шт)', protein: 7, carbs: 20, fats: 12, calories: 220 },
        { name: 'Арепа с сыром', protein: 10, carbs: 28, fats: 8, calories: 230 },
        { name: 'Тамале (1 шт)', protein: 6, carbs: 22, fats: 8, calories: 185 },
        { name: 'Севиче', protein: 18, carbs: 8, fats: 4, calories: 140 },
        { name: 'Мохито де арроз', protein: 3, carbs: 45, fats: 2, calories: 210 },
        { name: 'Чурроc (3 шт)', protein: 4, carbs: 42, fats: 18, calories: 350 },
        { name: 'Альфахорес (1 шт)', protein: 3, carbs: 28, fats: 12, calories: 230 },
        { name: 'Паэлья с морепродуктами', protein: 16, carbs: 35, fats: 8, calories: 285 }
    ],
    'Средиземноморская кухня': [
        { name: 'Мусака', protein: 12, carbs: 18, fats: 15, calories: 260 },
        { name: 'Греческий гирос', protein: 18, carbs: 32, fats: 12, calories: 310 },
        { name: 'Спанакопита (1 кусок)', protein: 8, carbs: 22, fats: 18, calories: 285 },
        { name: 'Цацики', protein: 4, carbs: 5, fats: 8, calories: 105 },
        { name: 'Фета запеченная', protein: 15, carbs: 3, fats: 22, calories: 275 },
        { name: 'Дзадзики с лавашом', protein: 6, carbs: 18, fats: 10, calories: 185 },
        { name: 'Паста путтанеска', protein: 10, carbs: 52, fats: 12, calories: 355 },
        { name: 'Фокачча', protein: 8, carbs: 50, fats: 9, calories: 310 }
    ],
    'Еврейская кухня': [
        { name: 'Хумус с фалафелем', protein: 12, carbs: 25, fats: 15, calories: 285 },
        { name: 'Латкес (картофельные оладьи)', protein: 3, carbs: 18, fats: 8, calories: 155 },
        { name: 'Маца', protein: 10, carbs: 84, fats: 1.4, calories: 400 },
        { name: 'Чолнт', protein: 15, carbs: 22, fats: 10, calories: 245 },
        { name: 'Форшмак', protein: 16, carbs: 3, fats: 18, calories: 235 },
        { name: 'Гефилте фиш', protein: 12, carbs: 8, fats: 5, calories: 125 },
        { name: 'Цимес', protein: 2, carbs: 28, fats: 4, calories: 155 }
    ],
    'Скандинавская кухня': [
        { name: 'Гравлакс (маринованный лосось)', protein: 20, carbs: 1, fats: 12, calories: 190 },
        { name: 'Смёрребрёд с селедкой', protein: 12, carbs: 25, fats: 8, calories: 230 },
        { name: 'Кёттбуллар (фрикадельки)', protein: 16, carbs: 8, fats: 12, calories: 205 },
        { name: 'Лютефиск', protein: 14, carbs: 0, fats: 0.4, calories: 60 },
        { name: 'Ракфиск', protein: 18, carbs: 0, fats: 10, calories: 165 },
        { name: 'Крепкакор (блины)', protein: 6, carbs: 35, fats: 8, calories: 240 }
    ],
    'Африканская кухня': [
        { name: 'Инжера (эфиопский хлеб)', protein: 3.4, carbs: 42, fats: 0.8, calories: 172 },
        { name: 'Доро вот', protein: 18, carbs: 12, fats: 15, calories: 260 },
        { name: 'Фуфу', protein: 1.4, carbs: 38, fats: 0.2, calories: 160 },
        { name: 'Жоллоф райс', protein: 5, carbs: 42, fats: 8, calories: 265 },
        { name: 'Боботи', protein: 14, carbs: 15, fats: 18, calories: 285 },
        { name: 'Пири-пири чикен', protein: 25, carbs: 3, fats: 12, calories: 220 },
        { name: 'Бунни чау', protein: 12, carbs: 45, fats: 10, calories: 325 }
    ],
    'Карибская кухня': [
        { name: 'Джерк чикен', protein: 26, carbs: 8, fats: 15, calories: 275 },
        { name: 'Акки с соленой рыбой', protein: 16, carbs: 18, fats: 12, calories: 250 },
        { name: 'Калалу (суп)', protein: 5, carbs: 8, fats: 6, calories: 105 },
        { name: 'Пеас энд райс', protein: 7, carbs: 38, fats: 4, calories: 220 },
        { name: 'Патти (пирожок)', protein: 8, carbs: 28, fats: 18, calories: 310 },
        { name: 'Плантейн жареный', protein: 1.2, carbs: 31, fats: 8, calories: 195 }
    ],
    'Русская региональная кухня': [
        { name: 'Сибирские пельмени', protein: 12, carbs: 25, fats: 9, calories: 235 },
        { name: 'Уральские позы', protein: 13, carbs: 24, fats: 10, calories: 245 },
        { name: 'Поморская уха', protein: 12, carbs: 4, fats: 3, calories: 85 },
        { name: 'Расстегай с рыбой', protein: 10, carbs: 32, fats: 12, calories: 280 },
        { name: 'Калитки карельские', protein: 5, carbs: 28, fats: 6, calories: 185 },
        { name: 'Шанежки', protein: 6, carbs: 35, fats: 8, calories: 240 },
        { name: 'Кулебяка', protein: 12, carbs: 30, fats: 15, calories: 305 },
        { name: 'Курник', protein: 14, carbs: 28, fats: 18, calories: 330 },
        { name: 'Окрошка на квасе', protein: 4, carbs: 8, fats: 5, calories: 90 },
        { name: 'Окрошка на кефире', protein: 5, carbs: 7, fats: 6, calories: 95 }
    ],
    'Узбекская кухня': [
        { name: 'Лагман', protein: 10, carbs: 35, fats: 12, calories: 285 },
        { name: 'Манты с тыквой', protein: 8, carbs: 28, fats: 6, calories: 200 },
        { name: 'Самса с мясом', protein: 12, carbs: 25, fats: 15, calories: 285 },
        { name: 'Шурпа', protein: 9, carbs: 8, fats: 7, calories: 130 },
        { name: 'Нарын', protein: 14, carbs: 32, fats: 10, calories: 275 },
        { name: 'Димляма', protein: 11, carbs: 15, fats: 12, calories: 215 },
        { name: 'Чучвара (20 шт)', protein: 15, carbs: 30, fats: 12, calories: 295 }
    ],
    'Армянская кухня': [
        { name: 'Хоровац (шашлык)', protein: 24, carbs: 1, fats: 18, calories: 270 },
        { name: 'Кюфта', protein: 16, carbs: 8, fats: 12, calories: 205 },
        { name: 'Долма в виноградных листьях', protein: 8, carbs: 12, fats: 10, calories: 170 },
        { name: 'Хаш', protein: 15, carbs: 0, fats: 12, calories: 175 },
        { name: 'Ламаджо (армянская пицца)', protein: 14, carbs: 32, fats: 10, calories: 280 },
        { name: 'Бастурма армянская', protein: 25, carbs: 0, fats: 11, calories: 200 }
    ],
    'Казахская кухня': [
        { name: 'Бешбармак', protein: 16, carbs: 25, fats: 18, calories: 330 },
        { name: 'Куырдак', protein: 14, carbs: 5, fats: 20, calories: 255 },
        { name: 'Баурсаки (5 шт)', protein: 6, carbs: 45, fats: 15, calories: 345 },
        { name: 'Казы (конская колбаса)', protein: 16, carbs: 0, fats: 50, calories: 520 },
        { name: 'Иримшик', protein: 25, carbs: 2, fats: 18, calories: 285 },
        { name: 'Сорпа', protein: 8, carbs: 6, fats: 9, calories: 135 }
    ],
    'Веганские и растительные альтернативы': [
        { name: 'Темпе бургер', protein: 18, carbs: 15, fats: 12, calories: 245 },
        { name: 'Сейтан', protein: 75, carbs: 14, fats: 2, calories: 370 },
        { name: 'Веганский сыр из кешью', protein: 4, carbs: 8, fats: 25, calories: 270 },
        { name: 'Джекфрут (тянучка)', protein: 1.4, carbs: 23, fats: 0.3, calories: 95 },
        { name: 'Нутовый омлет', protein: 9, carbs: 18, fats: 6, calories: 165 },
        { name: 'Чечевичный бургер', protein: 12, carbs: 20, fats: 8, calories: 200 },
        { name: 'Кокосовый йогурт', protein: 1, carbs: 6, fats: 5, calories: 75 },
        { name: 'Овсяное мороженое', protein: 2, carbs: 25, fats: 8, calories: 180 },
        { name: 'Веганский майонез', protein: 0.5, carbs: 2, fats: 75, calories: 680 },
        { name: 'Ореховое молоко кешью', protein: 1, carbs: 2, fats: 3, calories: 40 }
    ],
    'Ферментированные продукты': [
        { name: 'Квашеная капуста', protein: 1.8, carbs: 4.3, fats: 0.1, calories: 19 },
        { name: 'Кимчи острое', protein: 2, carbs: 4, fats: 0.5, calories: 32 },
        { name: 'Комбуча (чайный гриб)', protein: 0, carbs: 3, fats: 0, calories: 12 },
        { name: 'Мисо паста', protein: 12, carbs: 26, fats: 6, calories: 199 },
        { name: 'Темпе натуральный', protein: 19, carbs: 9, fats: 11, calories: 193 },
        { name: 'Натто', protein: 18, carbs: 12, fats: 11, calories: 212 },
        { name: 'Квас свекольный', protein: 0.3, carbs: 5, fats: 0, calories: 21 },
        { name: 'Моченые яблоки', protein: 0.4, carbs: 9, fats: 0.1, calories: 40 }
    ],
    'Крафтовые и премиум продукты': [
        { name: 'Хамон иберико', protein: 30, carbs: 0.1, fats: 20, calories: 295 },
        { name: 'Прошутто', protein: 26, carbs: 0, fats: 12, calories: 215 },
        { name: 'Пармская ветчина', protein: 27, carbs: 0, fats: 10, calories: 205 },
        { name: 'Сыр Камамбер', protein: 20, carbs: 0.5, fats: 24, calories: 300 },
        { name: 'Сыр Бри', protein: 21, carbs: 0.5, fats: 28, calories: 334 },
        { name: 'Сыр Рокфор', protein: 21, carbs: 2, fats: 31, calories: 369 },
        { name: 'Сыр Горгонзола', protein: 21, carbs: 2, fats: 29, calories: 353 },
        { name: 'Трюфель черный', protein: 9, carbs: 13, fats: 0.5, calories: 92 },
        { name: 'Фуа-гра', protein: 11, carbs: 4, fats: 44, calories: 462 },
        { name: 'Устрицы Белон', protein: 9, carbs: 5, fats: 2, calories: 68 },
        { name: 'Черная икра белуги', protein: 27, carbs: 4, fats: 18, calories: 280 }
    ],
    'Специи и приправы': [
        { name: 'Куркума молотая', protein: 8, carbs: 65, fats: 10, calories: 354 },
        { name: 'Имбирь молотый', protein: 9, carbs: 72, fats: 5, calories: 335 },
        { name: 'Корица молотая', protein: 4, carbs: 81, fats: 1.2, calories: 247 },
        { name: 'Карри порошок', protein: 13, carbs: 56, fats: 14, calories: 325 },
        { name: 'Паприка молотая', protein: 14, carbs: 54, fats: 13, calories: 282 },
        { name: 'Зира (кумин)', protein: 18, carbs: 44, fats: 22, calories: 375 },
        { name: 'Кориандр молотый', protein: 12, carbs: 55, fats: 18, calories: 298 },
        { name: 'Мускатный орех', protein: 6, carbs: 49, fats: 36, calories: 525 }
    ]
};

// Экспорт
export default extremeFoodExtension;
