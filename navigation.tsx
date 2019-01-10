export interface MainMenu {
    name: string;
    subMenus: SubMenu[];
}

export interface SubMenu {
    name: string;
    url: string;
    subMenu?: SubMenu[]
}

export const about: SubMenu[] = [
    {
        name: 'О нас',
        url: '/about-us.html',
    },
    {
        name: 'Виктор Озаренко',
        url: '/about-viktor-ozarenko.html',
    },
    {
        name: 'Отзывы',
        url: '/about-us/feedback.html',
    },
    {
        name: 'Новости',
        url: '/about-us/news.html',
    },
    {
        name: 'Контакты',
        url: '/about-us/contact-us.html',
   },
];

export const padiCourses: SubMenu[] = [
    {
        name: '',
        url: '',
    },
    {
        name: '',
        url: '',
    },
    {
        name: '',
        url: '',
    },
    {
        name: '',
        url: '',
    },
    {
        name: '',
        url: '',
    }
]

export const ndlCourses: SubMenu[] = [
    {
        name: 'Novice diver NDL',
        url: '/diving-courses/ndl/kurs-novice-diver-ndl.html',
    },
    {
        name: 'Diver NDL',
        url: '/diving-courses/ndl/kurs-diver-ndl.html',
    },
    {
        name: 'Universal diver NDL',
        url: '/diving-courses/ndl/kurs-universal-diver-ndl.html',
    },
    {
        name: 'Advanced Universal diver NDL',
        url: '/diving-courses/ndl/kurs-advanced-universal-diver-ndl.html',
    },
    {
        name: 'Rescue diver NDL',
        url: '/diving-courses/ndl/kurs-rescue-diver-and-medic-first-aid.html',
    },
    {
        name: 'Divemaster NDL',
        url: '/diving-courses/ndl/kurs-divemaster-ndl.html',
    },
    {
        name: 'Специализированные курсы NDL',
        url: '/diving-courses/ndl/kursy-nitrox-night-deep-dry-suit.html',
    }
]

export const courses: SubMenu[] = [
    {
        name: 'Курсы дайвинга PADI',
        url: '/diving-courses/padi.html',
        subMenu: padiCourses,
    },
    {
        name: 'Курсы дайвинга NDL',
        url: '/diving-courses/national-dive-leauge.html',
        subMenu: ndlCourses,
    },
    {
        name: 'Инструкторские курсы',
        url: '/diving-courses/instructor-development.html',
    },
    {
        name: 'Фридайвинг',
        url: '/diving-courses/freediving.html',
    }
];

export const technicalDiving: SubMenu[] = [
    {
        name: 'Технические погружения',
        url: 'technical-diving/technical-diving.html',
    },
    {
        name: 'Сайдмаунт',
        url: 'technical-diving/sidemount.html',
    },
    {
        name: 'Курсы технического дайвинга IANTD',
        url: 'technical-diving/techdiving-courses-iantd.html',
    },
    {
        name: 'Курсы технического дайвинга NDL',
        url: 'technical-diving/techdiving-courses-ndl.html',
    },
    {
        name: 'Дайвинг на ребрезире',
        url: 'technical-diving/rebreather-diving.html',
    }
];

export const divingInSharm: SubMenu[] = [
    {
        name: 'Цены на дайвинг в Шарме',
        url: '/diving-sharm-el-sheikh/ceny-diving-sharm.html',
    },
    {
        name: 'Новичкам: интро-дайв, снорклинг',
        url: '/diving-sharm-el-sheikh/diving-dlia-nachinayushih.html',
    },
    {
        name: 'Детский дайвинг',
        url: '/diving-sharm-el-sheikh/detskiy-diving.html',
    },
    {
        name: 'Страхование дайверов',
        url: '/diving-sharm-el-sheikh/diving-strahovka.html',
    },
    {
        name: 'Архив акций',
        url: '/diving-sharm-el-sheikh/arhiv-akciy.html',
    },
];

export const liveaboard: SubMenu[] = [
    {
        name: 'Прошедшие дайвинг сафари',
        url: '/liveaboard/last-safari-egypt.html',
    },
    {
        name: 'Южные маршруты Красного моря',
        url: '/liveaboard/redsea-south.html',
    },
    {
        name: 'Северные маршруты Красного моря',
        url: '/liveaboard/redsea-north.html',
    },
    {
        name: 'Сафарийный флот',
        url: '/liveaboard/redsea-fleet.html',
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

