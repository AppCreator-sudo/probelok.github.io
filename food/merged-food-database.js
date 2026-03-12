// ОБЪЕДИНЁННАЯ БАЗА ПРОДУКТОВ ProБелок
// Все значения указаны на 100 грамм продукта
// protein, carbs, fats - в граммах, calories - в ккал
// Приоритет для дубликатов: данные из новой расширенной базы

const foodDatabase = {
    // === ОРИГИНАЛЬНЫЕ КАТЕГОРИИ (обновлённые) ===
    
    'Готовые блюда': [
        { name: 'Шашлык из свинины', protein: 20, carbs: 2, fats: 18, calories: 260 },
        { name: 'Шашлык из курицы', protein: 28, carbs: 1, fats: 8, calories: 185 },
        { name: 'Шашлык из баранины', protein: 23, carbs: 1, fats: 20, calories: 285 },
        { name: 'Люля-кебаб', protein: 18, carbs: 5, fats: 15, calories: 235 },
        { name: 'Куриный кебаб', protein: 25, carbs: 4, fats: 10, calories: 205 },
        { name: 'Бургер (котлета говяжья)', protein: 15, carbs: 25, fats: 12, calories: 280 },
        { name: 'Бургер двойной (2 котлеты)', protein: 28, carbs: 28, fats: 22, calories: 430 },
        { name: 'Чикен-бургер', protein: 22, carbs: 30, fats: 14, calories: 340 },
        { name: 'Шаурма куриная', protein: 18, carbs: 35, fats: 12, calories: 320 },
        { name: 'Шаурма с говядиной', protein: 20, carbs: 33, fats: 15, calories: 350 },
        { name: 'Стейк рибай', protein: 25, carbs: 0, fats: 28, calories: 360 },
        { name: 'Стейк из индейки', protein: 27, carbs: 0, fats: 4, calories: 150 },
        { name: 'Куриные крылья', protein: 27, carbs: 0, fats: 19, calories: 290 },
        { name: 'Котлета рубленая', protein: 16, carbs: 8, fats: 14, calories: 230 },
        { name: 'Пельмени', protein: 12, carbs: 23, fats: 8, calories: 220 },
        { name: 'Вареники с творогом', protein: 10, carbs: 32, fats: 4, calories: 208 },
        { name: 'Вареники с картофелем', protein: 4, carbs: 23, fats: 3, calories: 135 },
        { name: 'Голубцы', protein: 8, carbs: 10, fats: 6, calories: 130 },
        { name: 'Плов с курицей', protein: 9, carbs: 28, fats: 7, calories: 220 },
        { name: 'Плов с бараниной', protein: 10, carbs: 27, fats: 12, calories: 260 },
        { name: 'Пицца Маргарита', protein: 11, carbs: 33, fats: 10, calories: 266 },
        { name: 'Пицца Пепперони', protein: 12, carbs: 30, fats: 11, calories: 270 },
        { name: 'Хачапури по-аджарски', protein: 12, carbs: 25, fats: 18, calories: 310 },
        { name: 'Сэндвич с курицей', protein: 12, carbs: 28, fats: 8, calories: 240 }
    ],
    
    'Мясо': [
        { name: 'Говядина', protein: 26, carbs: 0, fats: 15, calories: 250 },
        { name: 'Говяжий фарш постный', protein: 24, carbs: 0, fats: 10, calories: 198 },
        { name: 'Телятина', protein: 24, carbs: 0, fats: 8, calories: 172 },
        { name: 'Баранина', protein: 25, carbs: 0, fats: 16, calories: 258 },
        { name: 'Свинина нежирная', protein: 22, carbs: 0, fats: 7, calories: 157 },
        { name: 'Свиная вырезка', protein: 20, carbs: 0, fats: 3, calories: 115 },
        { name: 'Оленина', protein: 30, carbs: 0, fats: 3, calories: 158 },
        { name: 'Кролик', protein: 21, carbs: 0, fats: 8, calories: 156 },
        { name: 'Конина', protein: 28, carbs: 0, fats: 9, calories: 187 }
    ],
    
    'Птица': [
        { name: 'Куриная грудка', protein: 31, carbs: 0, fats: 3.6, calories: 165 },
        { name: 'Куриное бедро без кожи', protein: 26, carbs: 0, fats: 5, calories: 155 },
        { name: 'Куриный фарш', protein: 17, carbs: 0, fats: 8, calories: 143 },
        { name: 'Индейка филе', protein: 29, carbs: 0, fats: 2, calories: 144 },
        { name: 'Индейка фарш', protein: 20, carbs: 0, fats: 8, calories: 150 },
        { name: 'Утка без кожи', protein: 23, carbs: 0, fats: 5, calories: 140 },
        { name: 'Гусь', protein: 22, carbs: 0, fats: 12, calories: 200 },
        { name: 'Перепелка', protein: 25, carbs: 0, fats: 4, calories: 134 }
    ],
    
    'Рыба белая': [
        { name: 'Треска', protein: 18, carbs: 0, fats: 0.7, calories: 82 },
        { name: 'Хек', protein: 17, carbs: 0, fats: 2, calories: 86 },
        { name: 'Минтай', protein: 16, carbs: 0, fats: 1, calories: 72 },
        { name: 'Судак', protein: 19, carbs: 0, fats: 1, calories: 84 },
        { name: 'Пикша', protein: 17, carbs: 0, fats: 0.5, calories: 71 },
        { name: 'Палтус', protein: 19, carbs: 0, fats: 3, calories: 103 },
        { name: 'Дорадо', protein: 18, carbs: 0, fats: 1.5, calories: 96 },
        { name: 'Сибас', protein: 18, carbs: 0, fats: 2, calories: 99 }
    ],
    
    'Рыба жирная': [
        { name: 'Лосось', protein: 20, carbs: 0, fats: 13, calories: 208 },
        { name: 'Форель', protein: 20, carbs: 0, fats: 5, calories: 119 },
        { name: 'Семга', protein: 21, carbs: 0, fats: 15, calories: 220 },
        { name: 'Скумбрия', protein: 18, carbs: 0, fats: 13, calories: 205 },
        { name: 'Сельдь', protein: 18, carbs: 0, fats: 9, calories: 158 },
        { name: 'Сардины', protein: 25, carbs: 0, fats: 11, calories: 208 },
        { name: 'Угорь', protein: 18, carbs: 0, fats: 30, calories: 333 }
    ],
    
    'Тунец': [
        { name: 'Тунец свежий', protein: 30, carbs: 0, fats: 1, calories: 130 },
        { name: 'Тунец консервы в собств. соку', protein: 25, carbs: 0, fats: 1, calories: 116 },
        { name: 'Тунец консервы в масле', protein: 27, carbs: 0, fats: 8, calories: 198 }
    ],
    
    'Морепродукты свежие': [
        { name: 'Креветки', protein: 24, carbs: 0, fats: 1, calories: 106 },
        { name: 'Кальмары', protein: 18, carbs: 3, fats: 1.5, calories: 92 },
        { name: 'Мидии', protein: 12, carbs: 3.7, fats: 2, calories: 77 },
        { name: 'Осьминог', protein: 15, carbs: 2, fats: 1, calories: 82 },
        { name: 'Гребешки', protein: 17, carbs: 3, fats: 1, calories: 88 },
        { name: 'Устрицы', protein: 9, carbs: 5, fats: 2, calories: 68 },
        { name: 'Краб', protein: 18, carbs: 0, fats: 1, calories: 83 },
        { name: 'Раки', protein: 16, carbs: 1, fats: 1, calories: 77 }
    ],
    
    'Морепродукты сушеные': [
        { name: 'Креветки сушеные', protein: 65, carbs: 5, fats: 3, calories: 295 },
        { name: 'Кальмары сушеные', protein: 62, carbs: 5, fats: 2, calories: 286 },
        { name: 'Мидии сушеные', protein: 59, carbs: 7, fats: 4, calories: 290 }
    ],
    
    'Икра и вяленая рыба': [
        { name: 'Икра красная', protein: 32, carbs: 4, fats: 15, calories: 264 },
        { name: 'Икра черная', protein: 28, carbs: 4, fats: 18, calories: 280 },
        { name: 'Вобла вяленая', protein: 46, carbs: 0, fats: 5, calories: 235 },
        { name: 'Таранка', protein: 48, carbs: 0, fats: 4, calories: 234 },
        { name: 'Янтарная рыба', protein: 50, carbs: 0, fats: 3, calories: 230 }
    ],
    
    'Яйца': [
        { name: 'Яйцо куриное', protein: 13, carbs: 0.7, fats: 11, calories: 157 },
        { name: 'Яйцо перепелиное (5 шт)', protein: 13, carbs: 0.6, fats: 11, calories: 168 },
        { name: 'Яичный белок', protein: 11, carbs: 0.7, fats: 0, calories: 52 },
        { name: 'Яйцо утиное', protein: 13, carbs: 1.5, fats: 14, calories: 185 },
        { name: 'Омлет из 2 яиц', protein: 14, carbs: 2, fats: 15, calories: 198 }
    ],
    
    'Молочное': [
        { name: 'Творог 0%', protein: 18, carbs: 3.3, fats: 0.6, calories: 88 },
        { name: 'Творог 2%', protein: 18, carbs: 3, fats: 2, calories: 101 },
        { name: 'Творог 5%', protein: 18, carbs: 1.8, fats: 5, calories: 121 },
        { name: 'Творог 9%', protein: 17, carbs: 2, fats: 9, calories: 159 },
        { name: 'Греческий йогурт', protein: 10, carbs: 5, fats: 5, calories: 115 },
        { name: 'Йогурт натуральный', protein: 5, carbs: 6, fats: 3.2, calories: 68 },
        { name: 'Кефир 1%', protein: 3, carbs: 4, fats: 1, calories: 40 },
        { name: 'Кефир 2.5%', protein: 2.8, carbs: 4, fats: 2.5, calories: 51 },
        { name: 'Молоко 1.5%', protein: 2.8, carbs: 4.7, fats: 1.5, calories: 44 },
        { name: 'Молоко 2.5%', protein: 2.8, carbs: 4.7, fats: 2.5, calories: 52 },
        { name: 'Молоко 3.2%', protein: 2.8, carbs: 4.7, fats: 3.2, calories: 58 },
        { name: 'Ряженка 2.5%', protein: 2.8, carbs: 4.2, fats: 2.5, calories: 54 },
        { name: 'Сметана 10%', protein: 3, carbs: 2.9, fats: 10, calories: 115 },
        { name: 'Сметана 20%', protein: 2.8, carbs: 3.2, fats: 20, calories: 206 },
        { name: 'Сливки 10%', protein: 3, carbs: 4, fats: 10, calories: 118 },
        { name: 'Сливки 20%', protein: 2.8, carbs: 3.7, fats: 20, calories: 205 }
    ],
    
    'Сыры': [
        { name: 'Моцарелла', protein: 28, carbs: 3, fats: 16, calories: 280 },
        { name: 'Фета', protein: 14, carbs: 4, fats: 21, calories: 264 },
        { name: 'Пармезан', protein: 38, carbs: 3, fats: 28, calories: 431 },
        { name: 'Чеддер', protein: 25, carbs: 1, fats: 33, calories: 402 },
        { name: 'Адыгейский', protein: 19, carbs: 1.5, fats: 14, calories: 240 },
        { name: 'Сыр Российский', protein: 24, carbs: 0, fats: 30, calories: 364 },
        { name: 'Сыр Голландский', protein: 26, carbs: 0, fats: 27, calories: 352 },
        { name: 'Сыр Гауда', protein: 25, carbs: 2, fats: 27, calories: 356 },
        { name: 'Чечил', protein: 19, carbs: 0, fats: 12, calories: 313 },
        { name: 'Сулугуни', protein: 20, carbs: 0, fats: 24, calories: 290 },
        { name: 'Тильзитер', protein: 25, carbs: 0, fats: 26, calories: 334 },
        { name: 'Рикотта', protein: 11, carbs: 3, fats: 13, calories: 174 },
        { name: 'Плавленый сыр', protein: 16, carbs: 8, fats: 20, calories: 280 }
    ],
    
    'Субпродукты': [
        { name: 'Печень говяжья', protein: 20, carbs: 4, fats: 3, calories: 127 },
        { name: 'Печень куриная', protein: 21, carbs: 1, fats: 6, calories: 137 },
        { name: 'Сердце говяжье', protein: 16, carbs: 0, fats: 3, calories: 96 },
        { name: 'Сердце куриное', protein: 16, carbs: 0.8, fats: 10, calories: 159 },
        { name: 'Язык говяжий', protein: 16, carbs: 0, fats: 12, calories: 173 },
        { name: 'Желудки куриные', protein: 18, carbs: 0.6, fats: 4, calories: 114 },
        { name: 'Почки говяжьи', protein: 15, carbs: 2, fats: 3, calories: 86 }
    ],
    
    'Колбасные изделия': [
        { name: 'Ветчина из индейки', protein: 17, carbs: 1, fats: 2, calories: 84 },
        { name: 'Ветчина куриная', protein: 18, carbs: 0, fats: 5, calories: 120 },
        { name: 'Бастурма', protein: 24, carbs: 0, fats: 10, calories: 194 },
        { name: 'Сосиски молочные', protein: 11, carbs: 2, fats: 23, calories: 266 },
        { name: 'Сардельки', protein: 10, carbs: 2, fats: 32, calories: 332 },
        { name: 'Колбаса вареная докторская', protein: 13, carbs: 1.5, fats: 22, calories: 257 },
        { name: 'Колбаса варено-копченая', protein: 17, carbs: 2, fats: 39, calories: 427 },
        { name: 'Салями', protein: 21, carbs: 2, fats: 53, calories: 568 }
    ],
    
    'Бобовые и соя': [
        { name: 'Чечевица вареная', protein: 9, carbs: 20, fats: 0.4, calories: 116 },
        { name: 'Чечевица сухая', protein: 24, carbs: 60, fats: 1.5, calories: 353 },
        { name: 'Нут вареный', protein: 9, carbs: 27, fats: 3, calories: 164 },
        { name: 'Нут сухой', protein: 19, carbs: 61, fats: 6, calories: 364 },
        { name: 'Фасоль красная вареная', protein: 8, carbs: 21, fats: 0.5, calories: 127 },
        { name: 'Фасоль белая вареная', protein: 7, carbs: 25, fats: 0.6, calories: 140 },
        { name: 'Фасоль стручковая', protein: 2, carbs: 7, fats: 0.1, calories: 31 },
        { name: 'Горох желтый вареный', protein: 8, carbs: 20, fats: 0.8, calories: 118 },
        { name: 'Горох зеленый свежий', protein: 5, carbs: 13, fats: 0.2, calories: 81 },
        { name: 'Тофу', protein: 8, carbs: 2, fats: 4, calories: 76 },
        { name: 'Темпе', protein: 19, carbs: 9, fats: 11, calories: 193 },
        { name: 'Эдамаме', protein: 11, carbs: 10, fats: 5, calories: 122 },
        { name: 'Соевое мясо', protein: 50, carbs: 20, fats: 1, calories: 296 }
    ],
    
    'Орехи и семена': [
        { name: 'Миндаль', protein: 21, carbs: 22, fats: 49, calories: 579 },
        { name: 'Грецкий орех', protein: 15, carbs: 14, fats: 65, calories: 654 },
        { name: 'Кешью', protein: 18, carbs: 30, fats: 44, calories: 553 },
        { name: 'Фундук', protein: 15, carbs: 17, fats: 61, calories: 628 },
        { name: 'Фисташки', protein: 20, carbs: 28, fats: 45, calories: 560 },
        { name: 'Арахис', protein: 26, carbs: 16, fats: 49, calories: 567 },
        { name: 'Семена тыквы', protein: 30, carbs: 11, fats: 49, calories: 559 },
        { name: 'Семена подсолнечника', protein: 21, carbs: 20, fats: 52, calories: 584 },
        { name: 'Семена чиа', protein: 17, carbs: 42, fats: 31, calories: 486 },
        { name: 'Кедровый орех', protein: 14, carbs: 13, fats: 68, calories: 673 },
        { name: 'Семена льна', protein: 18, carbs: 29, fats: 42, calories: 534 },
        { name: 'Семена кунжута', protein: 19, carbs: 12, fats: 49, calories: 565 }
    ],
    
    'Протеин и спортпит': [
        { name: 'Сывороточный протеин', protein: 80, carbs: 5, fats: 2, calories: 370 },
        { name: 'Казеин', protein: 75, carbs: 8, fats: 1, calories: 345 },
        { name: 'Протеиновый батончик', protein: 20, carbs: 25, fats: 8, calories: 250 },
        { name: 'BCAA', protein: 85, carbs: 0, fats: 0, calories: 340 },
        { name: 'Гейнер', protein: 20, carbs: 65, fats: 5, calories: 385 }
    ],

    // === НОВЫЕ КАТЕГОРИИ ИЗ food-database-complete.js ===
    
    'Крупы и каши': [
        { name: 'Гречка вареная', protein: 4.5, carbs: 20, fats: 1.3, calories: 110 },
        { name: 'Гречка сухая', protein: 13, carbs: 72, fats: 3.3, calories: 343 },
        { name: 'Рис белый вареный', protein: 2.7, carbs: 28, fats: 0.3, calories: 116 },
        { name: 'Рис бурый вареный', protein: 2.6, carbs: 23, fats: 0.9, calories: 111 },
        { name: 'Рис басмати вареный', protein: 3, carbs: 25, fats: 0.4, calories: 121 },
        { name: 'Овсянка вареная', protein: 2.5, carbs: 12, fats: 1.4, calories: 68 },
        { name: 'Овсянка сухая', protein: 13, carbs: 65, fats: 6, calories: 389 },
        { name: 'Перловка вареная', protein: 3, carbs: 28, fats: 0.4, calories: 123 },
        { name: 'Пшено вареное', protein: 3, carbs: 23, fats: 1, calories: 119 },
        { name: 'Манка вареная', protein: 3, carbs: 17, fats: 0.2, calories: 80 },
        { name: 'Киноа вареная', protein: 4.4, carbs: 21, fats: 1.9, calories: 120 },
        { name: 'Булгур вареный', protein: 3.1, carbs: 19, fats: 0.2, calories: 83 },
        { name: 'Кускус вареный', protein: 3.8, carbs: 23, fats: 0.2, calories: 112 },
        { name: 'Кукурузная каша', protein: 2.3, carbs: 17, fats: 0.4, calories: 78 },
        { name: 'Ячневая каша', protein: 2.3, carbs: 15, fats: 0.3, calories: 76 }
    ],
    
    'Макароны': [
        { name: 'Макароны вареные', protein: 5, carbs: 31, fats: 0.5, calories: 158 },
        { name: 'Макароны из твердых сортов', protein: 5.5, carbs: 30, fats: 0.5, calories: 151 },
        { name: 'Спагетти вареные', protein: 5, carbs: 31, fats: 0.6, calories: 158 },
        { name: 'Лапша яичная вареная', protein: 5.2, carbs: 26, fats: 1.1, calories: 138 },
        { name: 'Лапша гречневая (соба)', protein: 5, carbs: 21, fats: 0.1, calories: 99 },
        { name: 'Лапша рисовая вареная', protein: 1.8, carbs: 24, fats: 0.2, calories: 109 },
        { name: 'Лапша удон', protein: 2.6, carbs: 21, fats: 0.3, calories: 99 }
    ],
    
    'Хлеб и выпечка': [
        { name: 'Хлеб белый', protein: 8, carbs: 49, fats: 3, calories: 266 },
        { name: 'Хлеб черный', protein: 6.6, carbs: 40, fats: 1.2, calories: 201 },
        { name: 'Хлеб ржаной', protein: 6.6, carbs: 34, fats: 1.2, calories: 174 },
        { name: 'Хлеб бородинский', protein: 6.9, carbs: 40, fats: 1.3, calories: 208 },
        { name: 'Хлеб цельнозерновой', protein: 10, carbs: 43, fats: 2.2, calories: 228 },
        { name: 'Батон нарезной', protein: 7.5, carbs: 50, fats: 2.9, calories: 264 },
        { name: 'Багет', protein: 7.5, carbs: 51, fats: 3.3, calories: 278 },
        { name: 'Лаваш армянский', protein: 8.1, carbs: 56, fats: 1, calories: 274 },
        { name: 'Лаваш тонкий', protein: 7.9, carbs: 53, fats: 1, calories: 236 },
        { name: 'Хлебцы ржаные', protein: 11, carbs: 46, fats: 2.3, calories: 242 },
        { name: 'Круассан', protein: 8, carbs: 42, fats: 21, calories: 406 },
        { name: 'Булочка для бургера', protein: 8, carbs: 43, fats: 7, calories: 272 },
        { name: 'Тортилья пшеничная', protein: 8, carbs: 51, fats: 6, calories: 304 },
        { name: 'Пита', protein: 9, carbs: 55, fats: 1.2, calories: 275 }
    ],
    
    'Овощи свежие': [
        { name: 'Помидор', protein: 0.6, carbs: 4.2, fats: 0.2, calories: 20 },
        { name: 'Огурец', protein: 0.8, carbs: 2.8, fats: 0.1, calories: 15 },
        { name: 'Перец болгарский', protein: 1.3, carbs: 5.3, fats: 0, calories: 27 },
        { name: 'Капуста белокочанная', protein: 1.8, carbs: 4.7, fats: 0.1, calories: 27 },
        { name: 'Капуста пекинская', protein: 1.2, carbs: 2.2, fats: 0.2, calories: 16 },
        { name: 'Капуста цветная', protein: 2.5, carbs: 5.4, fats: 0.3, calories: 30 },
        { name: 'Брокколи', protein: 3, carbs: 5.2, fats: 0.4, calories: 34 },
        { name: 'Морковь', protein: 1.3, carbs: 6.9, fats: 0.1, calories: 35 },
        { name: 'Свекла', protein: 1.5, carbs: 8.8, fats: 0.1, calories: 40 },
        { name: 'Картофель', protein: 2, carbs: 16.3, fats: 0.4, calories: 77 },
        { name: 'Лук репчатый', protein: 1.4, carbs: 10.4, fats: 0, calories: 41 },
        { name: 'Чеснок', protein: 6.5, carbs: 29.9, fats: 0.5, calories: 149 },
        { name: 'Кабачок', protein: 0.6, carbs: 4.6, fats: 0.3, calories: 24 },
        { name: 'Баклажан', protein: 1.2, carbs: 4.5, fats: 0.1, calories: 24 },
        { name: 'Тыква', protein: 1, carbs: 4.4, fats: 0.1, calories: 22 },
        { name: 'Салат листовой', protein: 1.5, carbs: 2, fats: 0.2, calories: 14 },
        { name: 'Шпинат', protein: 2.9, carbs: 2, fats: 0.3, calories: 22 },
        { name: 'Руккола', protein: 2.6, carbs: 2.1, fats: 0.7, calories: 25 },
        { name: 'Редис', protein: 1.2, carbs: 3.4, fats: 0.1, calories: 19 },
        { name: 'Авокадо', protein: 2, carbs: 1.8, fats: 14.7, calories: 160 },
        { name: 'Помидоры черри', protein: 0.8, carbs: 3.9, fats: 0.2, calories: 18 },
        { name: 'Кукуруза вареная', protein: 3.4, carbs: 19, fats: 1.5, calories: 96 }
    ],
    
    'Овощи замороженные': [
        { name: 'Брокколи замороженная', protein: 3, carbs: 4, fats: 0.4, calories: 28 },
        { name: 'Цветная капуста замороженная', protein: 2, carbs: 4, fats: 0.3, calories: 23 },
        { name: 'Овощная смесь', protein: 2, carbs: 6, fats: 0.2, calories: 40 },
        { name: 'Горошек зеленый замороженный', protein: 5, carbs: 13, fats: 0.4, calories: 73 }
    ],
    
    'Фрукты': [
        { name: 'Яблоко', protein: 0.4, carbs: 9.8, fats: 0.4, calories: 47 },
        { name: 'Банан', protein: 1.5, carbs: 21, fats: 0.2, calories: 96 },
        { name: 'Апельсин', protein: 0.9, carbs: 8.1, fats: 0.2, calories: 36 },
        { name: 'Мандарин', protein: 0.8, carbs: 7.5, fats: 0.2, calories: 33 },
        { name: 'Грейпфрут', protein: 0.7, carbs: 6.5, fats: 0.2, calories: 29 },
        { name: 'Лимон', protein: 0.9, carbs: 3, fats: 0.1, calories: 16 },
        { name: 'Груша', protein: 0.4, carbs: 10.3, fats: 0.3, calories: 42 },
        { name: 'Киви', protein: 1, carbs: 10.3, fats: 0.5, calories: 48 },
        { name: 'Ананас', protein: 0.4, carbs: 11.5, fats: 0.1, calories: 49 },
        { name: 'Манго', protein: 0.8, carbs: 11.5, fats: 0.4, calories: 60 },
        { name: 'Персик', protein: 0.9, carbs: 9.5, fats: 0.1, calories: 39 },
        { name: 'Нектарин', protein: 0.9, carbs: 11.8, fats: 0.2, calories: 48 },
        { name: 'Абрикос', protein: 0.9, carbs: 9, fats: 0.1, calories: 41 },
        { name: 'Слива', protein: 0.8, carbs: 9.6, fats: 0.3, calories: 42 },
        { name: 'Хурма', protein: 0.5, carbs: 15.3, fats: 0.4, calories: 67 },
        { name: 'Гранат', protein: 0.7, carbs: 14.5, fats: 0.6, calories: 72 },
        { name: 'Виноград', protein: 0.6, carbs: 16.8, fats: 0.2, calories: 69 }
    ],
    
    'Ягоды': [
        { name: 'Клубника', protein: 0.8, carbs: 7.5, fats: 0.4, calories: 32 },
        { name: 'Малина', protein: 0.8, carbs: 8.3, fats: 0.5, calories: 46 },
        { name: 'Черника', protein: 1.1, carbs: 7.6, fats: 0.6, calories: 44 },
        { name: 'Голубика', protein: 1, carbs: 6.6, fats: 0.5, calories: 39 },
        { name: 'Ежевика', protein: 1.5, carbs: 4.4, fats: 0.5, calories: 34 },
        { name: 'Смородина черная', protein: 1, carbs: 7.3, fats: 0.4, calories: 38 },
        { name: 'Смородина красная', protein: 0.6, carbs: 7.7, fats: 0.2, calories: 39 },
        { name: 'Вишня', protein: 0.8, carbs: 11.3, fats: 0.5, calories: 50 },
        { name: 'Черешня', protein: 1.1, carbs: 11.5, fats: 0.4, calories: 52 },
        { name: 'Арбуз', protein: 0.6, carbs: 5.8, fats: 0.1, calories: 27 },
        { name: 'Дыня', protein: 0.6, carbs: 7.4, fats: 0.3, calories: 33 }
    ],
    
    'Сухофрукты': [
        { name: 'Изюм', protein: 2.9, carbs: 66, fats: 0.6, calories: 264 },
        { name: 'Курага', protein: 3.4, carbs: 51, fats: 0.3, calories: 215 },
        { name: 'Чернослив', protein: 2.3, carbs: 57.5, fats: 0.7, calories: 256 },
        { name: 'Финики', protein: 2.5, carbs: 69.2, fats: 0.5, calories: 292 },
        { name: 'Инжир сушеный', protein: 3.1, carbs: 57.9, fats: 0.8, calories: 257 }
    ],
    
    'Масла и жиры': [
        { name: 'Масло подсолнечное', protein: 0, carbs: 0, fats: 99.9, calories: 899 },
        { name: 'Масло оливковое', protein: 0, carbs: 0, fats: 99.8, calories: 898 },
        { name: 'Масло сливочное 82%', protein: 0.5, carbs: 0.8, fats: 82.5, calories: 748 },
        { name: 'Масло кокосовое', protein: 0, carbs: 0, fats: 99.9, calories: 899 },
        { name: 'Масло льняное', protein: 0, carbs: 0, fats: 99.8, calories: 898 },
        { name: 'Масло кунжутное', protein: 0, carbs: 0, fats: 99.9, calories: 899 }
    ],
    
    'Соусы': [
        { name: 'Майонез 67%', protein: 2.8, carbs: 2.6, fats: 67, calories: 627 },
        { name: 'Майонез легкий', protein: 1, carbs: 7, fats: 28, calories: 283 },
        { name: 'Кетчуп', protein: 1.8, carbs: 22.2, fats: 0.3, calories: 93 },
        { name: 'Горчица', protein: 5.7, carbs: 11, fats: 6.4, calories: 139 },
        { name: 'Соевый соус', protein: 6, carbs: 8, fats: 0, calories: 51 },
        { name: 'Сметанный соус', protein: 3, carbs: 5, fats: 15, calories: 165 },
        { name: 'Песто', protein: 5, carbs: 3, fats: 45, calories: 420 },
        { name: 'Томатная паста', protein: 4.8, carbs: 18, fats: 0, calories: 102 }
    ],
    
    'Сладости': [
        { name: 'Шоколад молочный', protein: 6.9, carbs: 54.4, fats: 35.7, calories: 550 },
        { name: 'Шоколад темный 70%', protein: 6.2, carbs: 48, fats: 35, calories: 539 },
        { name: 'Шоколад темный 90%', protein: 7.8, carbs: 28, fats: 50, calories: 598 },
        { name: 'Мороженое пломбир', protein: 3.2, carbs: 20.4, fats: 15, calories: 227 },
        { name: 'Мороженое сливочное', protein: 3.3, carbs: 22, fats: 10, calories: 184 },
        { name: 'Печенье овсяное', protein: 6.5, carbs: 74, fats: 14, calories: 437 },
        { name: 'Печенье песочное', protein: 7.5, carbs: 64, fats: 22, calories: 458 },
        { name: 'Вафли', protein: 8.2, carbs: 64.7, fats: 14.6, calories: 425 },
        { name: 'Пряники', protein: 5.8, carbs: 77.7, fats: 6.5, calories: 364 },
        { name: 'Зефир', protein: 0.8, carbs: 79.8, fats: 0, calories: 326 },
        { name: 'Мармелад', protein: 0, carbs: 77.7, fats: 0.1, calories: 321 },
        { name: 'Пастила', protein: 0.5, carbs: 80.4, fats: 0, calories: 310 },
        { name: 'Халва подсолнечная', protein: 11.6, carbs: 54, fats: 29.7, calories: 523 },
        { name: 'Мед', protein: 0.8, carbs: 81.5, fats: 0, calories: 329 },
        { name: 'Варенье', protein: 0.4, carbs: 62.1, fats: 0.2, calories: 263 },
        { name: 'Джем', protein: 0.4, carbs: 56, fats: 0.1, calories: 245 }
    ],
    
    'Напитки': [
        { name: 'Кофе черный без сахара', protein: 0.2, carbs: 0.1, fats: 0, calories: 2 },
        { name: 'Кофе с молоком', protein: 1, carbs: 1.5, fats: 1, calories: 21 },
        { name: 'Капучино', protein: 2.4, carbs: 3.8, fats: 2.4, calories: 45 },
        { name: 'Латте', protein: 2.2, carbs: 4.8, fats: 1.8, calories: 43 },
        { name: 'Чай черный без сахара', protein: 0, carbs: 0, fats: 0, calories: 1 },
        { name: 'Чай зеленый без сахара', protein: 0, carbs: 0, fats: 0, calories: 0 },
        { name: 'Какао на молоке', protein: 3.2, carbs: 10.2, fats: 3.8, calories: 84 },
        { name: 'Сок апельсиновый', protein: 0.7, carbs: 12.8, fats: 0.1, calories: 45 },
        { name: 'Сок яблочный', protein: 0.4, carbs: 10.1, fats: 0.1, calories: 42 },
        { name: 'Сок томатный', protein: 1, carbs: 3.8, fats: 0.1, calories: 18 },
        { name: 'Морс клюквенный', protein: 0.3, carbs: 10.7, fats: 0, calories: 41 },
        { name: 'Компот', protein: 0.5, carbs: 14, fats: 0, calories: 60 },
        { name: 'Кола', protein: 0, carbs: 10.6, fats: 0, calories: 42 },
        { name: 'Квас', protein: 0.2, carbs: 5.2, fats: 0, calories: 27 }
    ],

    // === КАТЕГОРИИ ИЗ mega-food-extension.js ===
    
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
    ],

    // === КАТЕГОРИИ ИЗ ready-meals-extension.js ===
    
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
        { name: 'Гамбургер', protein: 12, carbs: 27, fats: 10, calories: 245 },
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

// Экспорт для использования в других файлах
export default foodDatabase;
