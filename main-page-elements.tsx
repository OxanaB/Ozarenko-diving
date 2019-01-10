export interface MainPageElements {
    title: string;
    subtitle: string;
    price: string;
    description: string;
    image: string;
    imageAlt: string;
    buttonText: string;
    buttonLink: string;
}

export const mainPageLinkElements: MainPageElements[] = [
    {
        title: 'Курс Sidemount diver PADI',
        subtitle: 'боковое расположение баллонов',
        price: '365$',
        description: 'Конфигурация сайдмаунт позволяет разгрузить спину, дает большую маневренность и дополнительный запас дыхательного газа под водой. Занятия проходят 2 дня за 4 погружения на компенсаторах типа сайдмаунт X-Deep Stealth',
        image: '/images/main-page/sidemount.jpg',
        imageAlt: 'sidemount diver padi, курсы сайдмаунта, обучение сайдмаунту, зачем нужен сайдмаунт',
        buttonText: 'Подробнее о курсе',
        buttonLink: '/technical-diving/sidemount.html'
    },
    {
        title: 'Курс Open water diver PADI',
        subtitle: 'начальное обучение дайвингу',
        price: '435 $',
        description: 'Путь в мир дайвинга начинается с базового курса Open water diver PADI, который проходит 4 дня и включает в себя тренировку в закрытой воде и 4 погружений в открытой воде на глубину до 18 метров. В стоимость курса включены оборудование для дайвинга, учебные материалы и сертификат',
        image: '/images/main-page/kurs-diver-ndl.jpg',
        imageAlt: 'обучение дайвингу, курс open water diver padi, начальный курс дайвинга, обучение дайвингу в одессе',
        buttonText: 'Подробнее о курсе',
        buttonLink: '/diving-courses/padi/open-water-diver-padi.html'
    },
    {
        title: 'Технический дайвинг',
        subtitle: 'глубокий воздух, тримикс',
        price: 'от 150$',
        description: 'Глубокие погружения на воздухе или тримиксе в Черном море. Выезды на технический дайвинг на Красное и Средиземные моря',
        image: '/images/main-page/technical-diving.jpg',
        imageAlt: 'технический дайвинг, технодайвинг',
        buttonText: 'Узнать все цены',
        buttonLink: '/technical-diving/technical-diving.html'
    },
    {
        title: 'Стань профессионалом',
        subtitle: 'Обучение инструкторов IANTD и NDL',
        price: 'от 570 $ до 1500 $',
        description: 'Вы можете стать професионалом всего за неделю интенсивного тренинга.  Доступны курсы от Open water Instructor (любительский дайвинг) до Trimix Instructor (технический дайвинг). Обучение проводит инструтор-теренер IANTD и NDL Виктор Озаренко',
        image: '/images/main-page/idc.jpg',
        imageAlt: 'инструкторские курсы, расписание IDC, как стать инструктором по дайвингу',
        buttonText: 'Стать инструктором',
        buttonLink: '/diving-courses/instructor-development.html'
    },
    // {
    //     title: 'Кэмпинг в Рас Мухаммеде',
    //     subtitle: 'доплата к пакету погружений',
    //     price: '85 $',
    //     description: '​Ищите что-то новое в любимом Шарм эль Шейхе? Поживите день в палатке в пустыне на берегу моря и сделайте несколько погружений в девственных местах заповедника Рас Мухаммед! Шикарные впечателния от ночных и утренних дайвов гарантированы!',
    //     ima: '/images/main-page/camping-ras-mohammed.jpg',
    //     imageAlt: 'дайвинг в шарме, дайвинг в шарм эль шейхе, заповедник рас мухаммед',
    //     buttonText: 'Узнать подробности',
    //     buttonLink: '/diving-sharm-el-sheikh/ceny-diving-sharm.html'        
    // },
    // {
    //     title: 'Дайвинг в Шарм-эль-Шейхе',
    //     subtitle: 'Для сертифицированных дайверов',
    //     price: '60$ день дайвинга',
    //     description: '​​Включены: два погружения в день с гидом, два 12-литровых воздушных баллона, грузы и пояса, трансфер из отеля, обед и  напитки на корабле. Дополнительно оплачивается аренда снаряжения, найтрокс, 15-шки, дальние выезды.',
    //     ima: '/images/main-page/diving-sharm-el-sheikh.jpg',
    //     imageAlt: 'дайвинг в шарм эль шейхе, дайвинг в шарме, украинский дайвинг центр',
    //     buttonText: 'Подробнее',
    //     buttonLink: '/diving-sharm-el-sheikh/ceny-diving-sharm.html'        
    // }
]
