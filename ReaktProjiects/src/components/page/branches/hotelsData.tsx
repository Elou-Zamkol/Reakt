const hotels = [
    {
        id: 1,
        name: "Atelier Deluxe",
        image: "../../../../../public/hotel-foto-1.jpg",
        stars: 5,
        price: 120,
        shortDescription: "Роскошный отель с авторским интерьером.",
        description:
            "Atelier Deluxe расположен в сердце города. Здесь вас ждут просторные номера, ресторан высокой кухни и персональный сервис 24/7.",
        location: "Центр города, ул. Шелкового пути 5",
        visitors: 1342,
        reviews: [
            { user: "Ирина", text: "Лучшее место, в котором я отдыхала. Персонал заботится о каждом госте!", rating: 5 },
            { user: "Алексей", text: "Все на высшем уровне. Чувствуется премиум-класс.", rating: 5 }
        ]
    },
    {
        id: 2,
        name: "Atelier Comfort",
        image: "../../../../../public/hotel-foto-2.jpg",
        stars: 4,
        price: 95,
        shortDescription: "Уютный отель для комфортного отдыха.",
        description:
            "Atelier Comfort — современный отель с просторными комнатами, идеален для семей и деловых поездок.",
        location: "Невский проспект, 22",
        visitors: 870,
        reviews: [
            { user: "Мария", text: "Чисто, уютно, завтрак вкусный.", rating: 4 },
            { user: "Павел", text: "Тихие номера и отличное расположение.", rating: 4 }
        ]
    },
    {
        id: 3,
        name: "Light City Hotel",
        image: "../../../../../public/hotel-foto-3.jpg",
        stars: 3,
        price: 60,
        shortDescription: "Недорогой отель в центре города.",
        description:
            "Light City Hotel — экономичный вариант для путешественников. Простые, но чистые номера и приветливый персонал.",
        location: "Площадь Свободы, 10",
        visitors: 270,
        reviews: [
            { user: "Елена", text: "Для трёх звёзд отель превосходный!", rating: 3 },
            { user: "Дмитрий", text: "Недорогой и чистый, но без изысков.", rating: 3 }
        ]
    },
    {
        id: 4,
        name: "Atelier Light Premium",
        image: "../../../../../public/hotel-foto-2.jpg",
        stars: 3,
        price: 65,
        shortDescription: "Современные номера и уютная атмосфера.",
        description:
            "Atelier Light Premium предлагает комфортные комнаты с современным дизайном и дружелюбным сервисом.",
        location: "Проспект Мира, 47",
        visitors: 305,
        reviews: [
            { user: "Наталья", text: "Отель понравился, всё чисто и аккуратно.", rating: 4 },
            { user: "Игорь", text: "Цена соответствует качеству, рекомендую.", rating: 3 }
        ]
    },
    {
        id: 5,
        name: "Golden Atelier",
        image: "../../../../../public/hotel-foto-1.jpg",
        stars: 4,
        price: 88,
        shortDescription: "Стильный отель с современным сервисом.",
        description:
            "Golden Atelier — место, где современный стиль сочетается с домашним уютом. Отличный вариант для туристов.",
        location: "Улица Солнечная, 14",
        visitors: 410,
        reviews: [
            { user: "Кристина", text: "Очень уютно, понравилось оформление.", rating: 4 },
            { user: "Олег", text: "Спокойная атмосфера и удобная локация.", rating: 3 }
        ]
    },
    {
        id: 6,
        name: "City Light",
        image: "../../../../../public/hotel-foto-3.jpg",
        stars: 3,
        price: 58,
        shortDescription: "Доступный отель для деловых поездок.",
        description:
            "City Light отлично подойдёт для коротких остановок в городе. Здесь есть всё необходимое для отдыха.",
        location: "Бульвар Ривьера, 3",
        visitors: 190,
        reviews: [
            { user: "Светлана", text: "Хороший сервис, персонал внимательный.", rating: 4 },
            { user: "Виктор", text: "Для командировки — идеальный выбор.", rating: 3 }
        ]
    },
    {
        id: 7,
        name: "Atelier Urban",
        image: "../../../../../public/hotel-foto-2.jpg",
        stars: 4,
        price: 92,
        shortDescription: "Современный отель для городского отдыха.",
        description:
            "Atelier Urban располагается недалеко от центра. Отличный дизайн, приятная атмосфера и хороший сервис.",
        location: "Центральный район, ул. Парковая 8",
        visitors: 330,
        reviews: [
            { user: "Михаил", text: "Современно и удобно, отличный интерьер.", rating: 4 },
            { user: "Тамара", text: "Чуть шумно, но в остальном супер.", rating: 3 }
        ]
    },
    {
        id: 8,
        name: "Atelier Classic",
        image: "../../../../../public/hotel-foto-1.jpg",
        stars: 4,
        price: 85,
        shortDescription: "Классический стиль и уют.",
        description:
            "Atelier Classic — уютные комнаты с атмосферой старого города и комфортом современности.",
        location: "Улица Лесная, 19",
        visitors: 280,
        reviews: [
            { user: "Галина", text: "Уютно, напоминает домашнюю атмосферу.", rating: 4 },
            { user: "Роман", text: "Отличный вариант на несколько дней.", rating: 4 }
        ]
    }
];

export default hotels;
