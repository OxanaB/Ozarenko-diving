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
        url: 'about-us/diving-club.html',
    },
    {
        name: 'Виктор Озаренко',
        url: 'about-us/viktor-ozarenko.html',
    },
    {
        name: 'Отзывы',
        url: 'about-us/feedback.html',
    },
    {
        name: 'Новости',
        url: 'about-us/news.html',
    },
    {
        name: 'Контакты',
        url: 'about-us/contact-us.html',
   },
];

export const courses: SubMenu[] = [
    {
        name: 'Курсы дайвинга PADI',
        url: 'diving-courses/padi.html',
    },
    {
        name: 'Курсы дайвинга NDL',
        url: 'diving-courses/national-dive-leauge.html',
    },
    {
        name: 'Инструкторские курсы',
        url: 'diving-courses/instructor-development.html',
    },
    {
        name: 'Фридайвинг',
        url: 'diving-courses/freediving.html',
    }
];

export const technicalDiving: SubMenu[] = [
    {
        name: 'Технические погружения',
        url: 'technical-diving.html',
    },
    {
        name: 'Сайдмаунт',
        url: 'sidemount.html',
    },
    {
        name: 'Курсы технического дайвинга IANTD',
        url: 'techdiving-courses-iantd.html',
    },
    {
        name: 'Курсы технического дайвинга NDL',
        url: 'techdiving-courses-ndl.html',
    },
    {
        name: 'Дайвинг на ребрезире',
        url: 'rebreather-diving.html',
    }
];

export const divingInSharm: SubMenu[] = [
    {
        name: 'Цены на дайвинг в Шарме',
        url: 'diving-sharm-el-sheikh/ceny-diving-sharm.html',
    },
    {
        name: 'Новичкам: интро-дайв, снорклинг',
        url: 'diving-sharm-el-sheikh/diving-dlia-nachinayushih.html',
    },
    {
        name: 'Детский дайвинг',
        url: 'diving-sharm-el-sheikh/detskiy-diving.html',
    },
    {
        name: 'Страхование дайверов',
        url: 'diving-sharm-el-sheikh/diving-strahovka.html',
    },
    {
        name: 'Архив акций',
        url: 'diving-sharm-el-sheikh/arhiv-akciy.html',
    },
];

export const liveaboard: SubMenu[] = [
    {
        name: 'Прошедшие дайвинг сафари',
        url: 'liveaboard/last-diving-safari-sharm-egypt.html',
    },
    {
        name: 'Южные маршруты Красного моря',
        url: 'liveaboard/red-sea-safari-south-routes.html',
    },
    {
        name: 'Северные маршруты Красного моря',
        url: 'liveaboard/red-sea-safari-north-routes.html',
    },
    {
        name: 'Сафарийный флот',
        url: 'liveaboard/red-sea-safari-fleet.html',
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