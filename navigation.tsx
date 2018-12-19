export interface MainMenu {
    name: string;
    subMenus: SubMenu[];
}

export interface SubMenu {
    name: string;
    url: string;
}

export const about: SubMenu[] = [
    {
        name: 'О нас',
        url: 'about-us/diving-club',
    },
    {
        name: 'Виктор Озаренко',
        url: 'about-us/viktor-ozarenko',
    },
    {
        name: 'Отзывы',
        url: 'about-us/feedback',
    },
    {
        name: 'Новости',
        url: 'about-us/news',
    },
    {
        name: 'Контакты',
        url: 'about-us/contact-us',
   },
];

export const courses: SubMenu[] = [
    {
        name: 'Курсы дайвинга PADI',
        url: 'diving-courses/padi',
    },
    {
        name: 'Курсы дайвинга NDL',
        url: 'diving-courses/national-dive-leauge',
    },
    {
        name: 'Инструкторские курсы',
        url: 'diving-courses/instructor-development',
    },
    {
        name: 'Фридайвинг',
        url: 'diving-courses/freediving',
    }
];

export const technicalDiving: SubMenu[] = [
    {
        name: 'Технические погружения',
        url: 'technical-diving/techdiving-guided-by-viktor-ozarenko',
    },
    {
        name: 'Сайдмаунт',
        url: 'technical-diving/sidemount',
    },
    {
        name: 'Курсы технического дайвинга IANTD',
        url: 'technical-diving/techdiving-courses-iantd',
    },
    {
        name: 'Курсы технического дайвинга NDL',
        url: 'technical-diving/techdiving-courses-ndl',
    },
    {
        name: 'Дайвинг на ребрезире',
        url: 'technical-diving/rebreather-diving',
    }
];

export const divingInSharm: SubMenu[] = [
    {
        name: 'Цены на дайвинг в Шарме',
        url: 'diving-sharm-el-sheikh/ceny-diving-sharm',
    },
    {
        name: 'Новичкам: интро-дайв, снорклинг',
        url: 'diving-sharm-el-sheikh/diving-dlia-nachinayushih',
    },
    {
        name: 'Детский дайвинг',
        url: 'diving-sharm-el-sheikh/detskiy-diving',
    },
    {
        name: 'Страхование дайверов',
        url: 'diving-sharm-el-sheikh/diving-strahovka',
    },
    {
        name: 'Архив акций',
        url: 'diving-sharm-el-sheikh/arhiv-akciy',
    },
];

export const liveaboard: SubMenu[] = [
    {
        name: 'Дайвинг сафари в ноябре 2018',
        url: 'liveaboard/diving-safari-november-2018-sharm-egypt',
    },
    {
        name: 'Южные маршруты Красного моря',
        url: 'liveaboard/red-sea-safari-south-routes',
    },
    {
        name: 'Северные маршруты Красного моря',
        url: 'liveaboard/red-sea-safari-north-routes',
    },
    {
        name: 'Сафарийный флот',
        url: 'liveaboard/red-sea-safari-fleet',
    }
];

export const mainMenu: MainMenu[] = [
    {
        name: 'О клубе',
        subMenus: about,
    },
    {
        name: 'Обучение дайвингу',
        subMenus: courses,
    },
    { 
        name: 'Технический дайвинг', 
        subMenus: technicalDiving,
    },
    { 
        name: 'Дайвинг в Шарм эль Шейхе', 
        subMenus: divingInSharm, 
    },
    { 
        name: 'Дайвинг сафари',
        subMenus: liveaboard,
    }
];