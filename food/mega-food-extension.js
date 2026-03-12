// МЕГА-РАСШИРЕНИЕ базы продуктов
// Дополнительные базы: детское питание, спортпит, диетическое, мировые кухни, снеки и многое другое

const megaFoodExtension = {
    'Детское питание': [
        { name: 'Пюре яблочное', protein: 0.4, carbs: 11, fats: 0.1, calories: 46 },
        { name: 'Пюре грушевое', protein: 0.4, carbs: 9.5, fats: 0.1, calories: 42 },
        { name: 'Пюре банановое', protein: 1.2, carbs: 21, fats: 0.3, calories: 89 },
        { name: 'Пюре овощное (кабачок)', protein: 0.6, carbs: 4.6, fats: 0.3, calories: 24 },
        { name: 'Пюре мясное (индейка)', protein: 10, carbs: 2, fats: 3, calories: 78 },
        { name: 'Пюре мясное (говядина)', protein: 9, carbs: 3, fats: 4, calories: 85 },
        { name: 'Каша молочная рисовая', protein: 1.3, carbs: 8, fats: 1.4, calories: 50 },
        { name: 'Каша молочная овсяная', protein: 1.5, carbs: 7.5, fats: 1.6, calories: 52 },
        { name: 'Каша молочная гречневая', protein: 1.8, carbs: 7, fats: 1.5, calories: 51 },
        { name: 'Творожок детский', protein: 4.2, carbs: 9, fats: 3.5, calories: 85 },
        { name: 'Йогурт детский', protein: 2.8, carbs: 10, fats: 2.5, calories: 75 }
    ],
    'Спортивное питание расширенное': [
        { name: 'Изолят протеина', protein: 90, carbs: 1, fats: 0.5, calories: 370 },
        { name: 'Гидролизат протеина', protein: 85, carbs: 2, fats: 1, calories: 360 },
        { name: 'Соевый протеин', protein: 80, carbs: 6, fats: 3, calories: 380 },
        { name: 'Растительный протеин', protein: 70, carbs: 8, fats: 5, calories: 370 },
        { name: 'Гейнер массовый', protein: 15, carbs: 75, fats: 3, calories: 385 },
        { name: 'Креатин моногидрат', protein: 0, carbs: 0, fats: 0, calories: 0 },
        { name: 'BCAA 2:1:1', protein: 85, carbs: 0, fats: 0, calories: 340 },
        { name: 'Протеиновый блинчик', protein: 15, carbs: 20, fats: 5, calories: 190 },
        { name: 'Протеиновое печенье', protein: 12, carbs: 25, fats: 6, calories: 210 },
        { name: 'Протеиновая паста', protein: 30, carbs: 5, fats: 15, calories: 280 },
        { name: 'Арахисовая паста протеиновая', protein: 28, carbs: 12, fats: 35, calories: 490 },
        { name: 'Протеиновый шейк готовый', protein: 20, carbs: 8, fats: 3, calories: 140 },
        { name: 'Энергетический гель', protein: 0, carbs: 22, fats: 0, calories: 88 },
        { name: 'Изотоник порошок', protein: 0, carbs: 6, fats: 0, calories: 24 }
    ],
    'Диетические и ПП продукты': [
        { name: 'Хлебцы цельнозерновые', protein: 10, carbs: 45, fats: 2.5, calories: 240 },
        { name: 'Хлебцы гречневые', protein: 12.6, carbs: 57, fats: 3.3, calories: 308 },
        { name: 'Хлебцы рисовые', protein: 7, carbs: 73, fats: 2.6, calories: 340 },
        { name: 'Диетические хлебцы', protein: 11, carbs: 46, fats: 2.3, calories: 242 },
        { name: 'Клетчатка пшеничная', protein: 16, carbs: 16, fats: 3.5, calories: 165 },
        { name: 'Отруби овсяные', protein: 17, carbs: 50, fats: 7, calories: 320 },
        { name: 'Отруби пшеничные', protein: 16, carbs: 17, fats: 4, calories: 165 },
        { name: 'Батончик мюсли', protein: 4, carbs: 55, fats: 8, calories: 310 },
        { name: 'Батончик злаковый', protein: 5, carbs: 60, fats: 7, calories: 325 },
        { name: 'Диетическая паста ширатаки', protein: 0, carbs: 3, fats: 0, calories: 12 },
        { name: 'Кокосовая стружка', protein: 13, carbs: 14, fats: 47, calories: 592 },
        { name: 'Урбеч из семян льна', protein: 18, carbs: 12, fats: 42, calories: 534 },
        { name: 'Урбеч из кунжута', protein: 19, carbs: 12, fats: 49, calories: 565 },
        { name: 'Паста из фундука', protein: 13, carbs: 18, fats: 58, calories: 628 }
    ],
    'Кондитерские изделия': [
        { name: 'Торт бисквитный с кремом', protein: 4.7, carbs: 42, fats: 23, calories: 400 },
        { name: 'Торт Наполеон', protein: 6, carbs: 38, fats: 26, calories: 420 },
        { name: 'Торт Прага', protein: 5.2, carbs: 46, fats: 28, calories: 450 },
        { name: 'Эклер', protein: 6, carbs: 28, fats: 18, calories: 296 },
        { name: 'Профитроли', protein: 5.5, carbs: 26, fats: 16, calories: 275 },
        { name: 'Макарон (1 шт)', protein: 2, carbs: 12, fats: 5, calories: 95 },
        { name: 'Пирожное Картошка', protein: 4, carbs: 45, fats: 22, calories: 390 },
        { name: 'Чизкейк', protein: 6, carbs: 24, fats: 28, calories: 380 },
        { name: 'Брауни', protein: 5, carbs: 50, fats: 18, calories: 380 },
        { name: 'Панна котта', protein: 3, carbs: 18, fats: 12, calories: 195 },
        { name: 'Крем-брюле', protein: 4, carbs: 20, fats: 15, calories: 235 },
        { name: 'Эстерхази', protein: 6.5, carbs: 40, fats: 24, calories: 395 }
    ],
    'Снеки и чипсы': [
        { name: 'Чипсы картофельные', protein: 6.5, carbs: 53, fats: 30, calories: 510 },
        { name: 'Чипсы из лаваша', protein: 8, carbs: 58, fats: 25, calories: 480 },
        { name: 'Попкорн соленый', protein: 7.3, carbs: 62, fats: 13, calories: 407 },
        { name: 'Попкорн карамельный', protein: 5.3, carbs: 76, fats: 8, calories: 401 },
        { name: 'Сухарики ржаные', protein: 16, carbs: 58, fats: 5, calories: 336 },
        { name: 'Крекеры соленые', protein: 9, carbs: 71, fats: 10, calories: 420 },
        { name: 'Луковые кольца снек', protein: 6, carbs: 64, fats: 21, calories: 468 },
        { name: 'Начос', protein: 8, carbs: 63, fats: 24, calories: 498 },
        { name: 'Вяленое мясо', protein: 40, carbs: 6, fats: 8, calories: 260 },
        { name: 'Сушеные бананы', protein: 3.9, carbs: 80, fats: 1.8, calories: 346 },
        { name: 'Сушеное манго', protein: 1.5, carbs: 73, fats: 0.8, calories: 314 }
    ],
    'Мексиканская кухня': [
        { name: 'Тако с говядиной', protein: 13, carbs: 18, fats: 12, calories: 235 },
        { name: 'Тако с курицей', protein: 15, carbs: 17, fats: 8, calories: 205 },
        { name: 'Буррито с курицей', protein: 18, carbs: 40, fats: 15, calories: 370 },
        { name: 'Буррито с говядиной', protein: 20, carbs: 38, fats: 18, calories: 400 },
        { name: 'Кесадилья с сыром', protein: 14, carbs: 28, fats: 16, calories: 310 },
        { name: 'Кесадилья с курицей', protein: 18, carbs: 30, fats: 14, calories: 325 },
        { name: 'Начос с сыром', protein: 9, carbs: 40, fats: 20, calories: 370 },
        { name: 'Гуакамоле', protein: 2, carbs: 8, fats: 15, calories: 160 },
        { name: 'Чили кон карне', protein: 12, carbs: 15, fats: 10, calories: 195 },
        { name: 'Фахитас с курицей', protein: 20, carbs: 25, fats: 12, calories: 295 }
    ],
    'Индийская кухня': [
        { name: 'Карри с курицей', protein: 16, carbs: 12, fats: 14, calories: 240 },
        { name: 'Тикка масала', protein: 18, carbs: 10, fats: 16, calories: 260 },
        { name: 'Палак панир', protein: 12, carbs: 8, fats: 18, calories: 235 },
        { name: 'Дал (чечевичный суп)', protein: 9, carbs: 20, fats: 4, calories: 150 },
        { name: 'Наан (хлеб)', protein: 8, carbs: 45, fats: 5, calories: 260 },
        { name: 'Бириани с курицей', protein: 14, carbs: 45, fats: 10, calories: 330 },
        { name: 'Самоса (1 шт)', protein: 4, carbs: 18, fats: 8, calories: 160 },
        { name: 'Тандури чикен', protein: 28, carbs: 3, fats: 11, calories: 220 }
    ],
    'Ближневосточная кухня': [
        { name: 'Фалафель (1 шт)', protein: 2.3, carbs: 5, fats: 3, calories: 57 },
        { name: 'Хумус', protein: 8, carbs: 14, fats: 10, calories: 166 },
        { name: 'Баба гануш', protein: 2, carbs: 8, fats: 14, calories: 160 },
        { name: 'Табуле', protein: 3, carbs: 16, fats: 4, calories: 108 },
        { name: 'Шаверма', protein: 18, carbs: 35, fats: 12, calories: 320 },
        { name: 'Кебаб', protein: 25, carbs: 5, fats: 15, calories: 260 },
        { name: 'Долма', protein: 8, carbs: 12, fats: 10, calories: 170 },
        { name: 'Лаваш с сыром', protein: 12, carbs: 35, fats: 8, calories: 270 },
        { name: 'Пахлава (1 кусок)', protein: 4, carbs: 40, fats: 20, calories: 350 }
    ],
    'Американская кухня': [
        { name: 'Хот-дог', protein: 10, carbs: 25, fats: 15, calories: 280 },
        { name: 'Корн-дог', protein: 9, carbs: 28, fats: 18, calories: 310 },
        { name: 'Макароны с сыром', protein: 12, carbs: 45, fats: 18, calories: 390 },
        { name: 'BBQ ребрышки (100г)', protein: 22, carbs: 8, fats: 28, calories: 360 },
        { name: 'Крылышки Баффало (100г)', protein: 24, carbs: 5, fats: 20, calories: 290 },
        { name: 'Кукурузный хлеб', protein: 7, carbs: 48, fats: 6, calories: 276 },
        { name: 'Клэм чаудер (суп)', protein: 5, carbs: 12, fats: 8, calories: 140 },
        { name: 'Чизкейк Нью-Йорк', protein: 7, carbs: 26, fats: 32, calories: 420 },
        { name: 'Донат глазированный', protein: 4, carbs: 50, fats: 18, calories: 380 },
        { name: 'Донат с начинкой', protein: 5, carbs: 45, fats: 20, calories: 390 }
    ],
    'Французская кухня': [
        { name: 'Киш Лорен', protein: 10, carbs: 18, fats: 22, calories: 315 },
        { name: 'Рататуй', protein: 2, carbs: 10, fats: 5, calories: 90 },
        { name: 'Кок-о-вен', protein: 24, carbs: 8, fats: 12, calories: 240 },
        { name: 'Буйабес', protein: 18, carbs: 6, fats: 8, calories: 170 },
        { name: 'Круассан с шоколадом', protein: 7, carbs: 48, fats: 24, calories: 450 },
        { name: 'Эклер с кремом', protein: 6, carbs: 28, fats: 18, calories: 296 },
        { name: 'Французский луковый суп', protein: 6, carbs: 12, fats: 8, calories: 140 },
        { name: 'Крем-суп из шампиньонов', protein: 3, carbs: 8, fats: 6, calories: 95 }
    ],
    'Тайская кухня': [
        { name: 'Том ям с креветками', protein: 8, carbs: 7, fats: 4, calories: 95 },
        { name: 'Том кха гай', protein: 12, carbs: 8, fats: 8, calories: 150 },
        { name: 'Пад тай с креветками', protein: 20, carbs: 48, fats: 12, calories: 385 },
        { name: 'Пад тай с курицей', protein: 18, carbs: 50, fats: 14, calories: 405 },
        { name: 'Зеленый карри', protein: 14, carbs: 10, fats: 16, calories: 240 },
        { name: 'Красный карри', protein: 15, carbs: 12, fats: 18, calories: 270 },
        { name: 'Массаман карри', protein: 16, carbs: 15, fats: 20, calories: 310 },
        { name: 'Сом там (салат)', protein: 3, carbs: 12, fats: 5, calories: 105 }
    ],
    'Корейская кухня': [
        { name: 'Кимчи', protein: 2, carbs: 4, fats: 0.5, calories: 32 },
        { name: 'Бибимбап', protein: 12, carbs: 48, fats: 10, calories: 330 },
        { name: 'Кимчи тиге (суп)', protein: 8, carbs: 6, fats: 5, calories: 100 },
        { name: 'Пулькоги', protein: 20, carbs: 12, fats: 14, calories: 260 },
        { name: 'Корейская морковь', protein: 1.3, carbs: 8, fats: 6, calories: 95 },
        { name: 'Кимпаб (1 ролл)', protein: 6, carbs: 35, fats: 4, calories: 200 },
        { name: 'Токпокки', protein: 5, carbs: 40, fats: 6, calories: 235 },
        { name: 'Чапче', protein: 6, carbs: 30, fats: 8, calories: 215 }
    ],
    'Вьетнамская кухня': [
        { name: 'Фо Га (суп с курицей)', protein: 12, carbs: 35, fats: 5, calories: 240 },
        { name: 'Фо Бо (суп с говядиной)', protein: 14, carbs: 35, fats: 7, calories: 265 },
        { name: 'Бун ча', protein: 16, carbs: 40, fats: 8, calories: 300 },
        { name: 'Спринг-роллы (2 шт)', protein: 4, carbs: 18, fats: 3, calories: 115 },
        { name: 'Бан ми', protein: 15, carbs: 38, fats: 10, calories: 310 },
        { name: 'Као лау', protein: 10, carbs: 42, fats: 6, calories: 270 }
    ],
    'Напитки алкогольные': [
        { name: 'Пиво светлое', protein: 0.5, carbs: 3.8, fats: 0, calories: 43 },
        { name: 'Пиво темное', protein: 0.3, carbs: 4.7, fats: 0, calories: 48 },
        { name: 'Вино красное сухое', protein: 0.2, carbs: 0.3, fats: 0, calories: 68 },
        { name: 'Вино белое сухое', protein: 0.1, carbs: 0.2, fats: 0, calories: 66 },
        { name: 'Вино полусладкое', protein: 0.2, carbs: 5, fats: 0, calories: 88 },
        { name: 'Шампанское брют', protein: 0.3, carbs: 1.5, fats: 0, calories: 55 },
        { name: 'Шампанское полусладкое', protein: 0.3, carbs: 8, fats: 0, calories: 88 },
        { name: 'Водка', protein: 0, carbs: 0.1, fats: 0, calories: 235 },
        { name: 'Виски', protein: 0, carbs: 0, fats: 0, calories: 220 },
        { name: 'Ром', protein: 0, carbs: 0, fats: 0, calories: 220 },
        { name: 'Джин', protein: 0, carbs: 0, fats: 0, calories: 220 },
        { name: 'Текила', protein: 0, carbs: 0, fats: 0, calories: 231 },
        { name: 'Коньяк', protein: 0, carbs: 1.5, fats: 0, calories: 239 },
        { name: 'Ликер Бейлис', protein: 3, carbs: 13, fats: 5, calories: 327 },
        { name: 'Самбука', protein: 0, carbs: 38, fats: 0, calories: 240 }
    ],
    'Напитки безалкогольные расширенные': [
        { name: 'Энергетик', protein: 0, carbs: 11, fats: 0, calories: 45 },
        { name: 'Изотоник', protein: 0, carbs: 6, fats: 0, calories: 25 },
        { name: 'Кокосовая вода', protein: 0.7, carbs: 3.7, fats: 0.2, calories: 19 },
        { name: 'Миндальное молоко', protein: 0.4, carbs: 0.3, fats: 1.1, calories: 13 },
        { name: 'Овсяное молоко', protein: 1, carbs: 6.6, fats: 1.5, calories: 42 },
        { name: 'Соевое молоко', protein: 3, carbs: 1.7, fats: 1.8, calories: 33 },
        { name: 'Питьевой йогурт', protein: 2.8, carbs: 11, fats: 1.5, calories: 68 },
        { name: 'Айран', protein: 1.1, carbs: 1.4, fats: 1.5, calories: 24 },
        { name: 'Тан', protein: 1.1, carbs: 1.4, fats: 1, calories: 20 },
        { name: 'Лимонад домашний', protein: 0, carbs: 10, fats: 0, calories: 40 },
        { name: 'Имбирный эль', protein: 0, carbs: 9, fats: 0, calories: 34 },
        { name: 'Холодный кофе', protein: 0.5, carbs: 2, fats: 0.5, calories: 15 }
    ],
    'Грибы': [
        { name: 'Шампиньоны свежие', protein: 4.3, carbs: 1, fats: 1, calories: 27 },
        { name: 'Шампиньоны жареные', protein: 4.6, carbs: 2, fats: 8, calories: 100 },
        { name: 'Вешенки', protein: 2.5, carbs: 6.5, fats: 0.3, calories: 38 },
        { name: 'Белые грибы свежие', protein: 3.7, carbs: 1.1, fats: 1.7, calories: 34 },
        { name: 'Белые грибы сушеные', protein: 30, carbs: 9, fats: 14, calories: 286 },
        { name: 'Опята маринованные', protein: 2.2, carbs: 0.5, fats: 1, calories: 18 },
        { name: 'Лисички', protein: 1.5, carbs: 2.4, fats: 1, calories: 20 },
        { name: 'Маслята', protein: 2.4, carbs: 0.5, fats: 0.7, calories: 19 },
        { name: 'Шиитаке', protein: 2.2, carbs: 6.8, fats: 0.5, calories: 34 }
    ],
    'Консервы': [
        { name: 'Горошек зеленый консервированный', protein: 3.6, carbs: 9.8, fats: 0.2, calories: 55 },
        { name: 'Кукуруза консервированная', protein: 2.2, carbs: 11.2, fats: 0.4, calories: 58 },
        { name: 'Фасоль консервированная', protein: 6.7, carbs: 17.4, fats: 0.3, calories: 99 },
        { name: 'Горбуша консервированная', protein: 20.9, carbs: 0, fats: 5.8, calories: 136 },
        { name: 'Сайра консервированная', protein: 18.3, carbs: 0, fats: 23.3, calories: 283 },
        { name: 'Шпроты в масле', protein: 17.4, carbs: 0.4, fats: 32.4, calories: 363 },
        { name: 'Оливки консервированные', protein: 1, carbs: 3.8, fats: 16.2, calories: 166 },
        { name: 'Маслины консервированные', protein: 0.8, carbs: 5.1, fats: 10.7, calories: 115 },
        { name: 'Томаты консервированные', protein: 1.1, carbs: 4, fats: 0.2, calories: 23 },
        { name: 'Огурцы маринованные', protein: 0.8, carbs: 1.7, fats: 0.1, calories: 11 }
    ],
    'Замороженные полуфабрикаты': [
        { name: 'Котлеты куриные замороженные', protein: 15, carbs: 10, fats: 8, calories: 180 },
        { name: 'Котлеты говяжьи замороженные', protein: 14, carbs: 12, fats: 10, calories: 195 },
        { name: 'Наггетсы куриные замороженные', protein: 14, carbs: 16, fats: 12, calories: 235 },
        { name: 'Рыбные палочки замороженные', protein: 12, carbs: 18, fats: 8, calories: 195 },
        { name: 'Блинчики с мясом замороженные', protein: 8, carbs: 28, fats: 7, calories: 210 },
        { name: 'Блинчики с творогом замороженные', protein: 7, carbs: 30, fats: 5, calories: 195 },
        { name: 'Вареники с вишней замороженные', protein: 4, carbs: 32, fats: 1, calories: 152 },
        { name: 'Хинкали замороженные', protein: 10, carbs: 20, fats: 8, calories: 200 },
        { name: 'Манты замороженные', protein: 12, carbs: 25, fats: 10, calories: 245 },
        { name: 'Чебуреки замороженные', protein: 10, carbs: 30, fats: 15, calories: 300 }
    ]
};

// Экспорт
window.megaFoodExtension = megaFoodExtension;
