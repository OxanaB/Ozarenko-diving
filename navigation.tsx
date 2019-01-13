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
        url: '/feedback.html',
    },
    {
        name: 'Новости',
        url: '/news.html',
    },
    {
        name: 'Контакты',
        url: '/contact-us.html',
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
        url: '/kurs-novice-diver-ndl.html',
    },
    {
        name: 'Diver NDL',
        url: '/kurs-diver-ndl.html',
    },
    {
        name: 'Universal diver NDL',
        url: '/kurs-universal-diver-ndl.html',
    },
    {
        name: 'Advanced Universal diver NDL',
        url: '/kurs-advanced-universal-diver-ndl.html',
    },
    {
        name: 'Rescue diver NDL',
        url: '/kurs-rescue-diver-and-medic-first-aid.html',
    },
    {
        name: 'Divemaster NDL',
        url: '/kurs-divemaster-ndl.html',
    },
    {
        name: 'Специализированные курсы NDL',
        url: '/kursy-nitrox-night-deep-dry-suit.html',
    }
]

export const courses: SubMenu[] = [
    {
        name: 'Курсы дайвинга PADI',
        url: '/diving-courses-padi.html',
        subMenu: padiCourses,
    },
    {
        name: 'Курсы дайвинга NDL',
        url: '/diving-courses-ndl.html',
        subMenu: ndlCourses,
    },
    {
        name: 'Инструкторские курсы',
        url: '/instructor-development-course.html',
    },
    {
        name: 'Фридайвинг',
        url: '/freediving.html',
    }
];

export const technicalDiving: SubMenu[] = [
    {
        name: 'Технические погружения',
        url: '/technical-diving.html',
    },
    {
        name: 'Сайдмаунт',
        url: '/sidemount.html',
    },
    {
        name: 'Курсы технического дайвинга IANTD',
        url: '/techdiving-courses-iantd.html',
    },
    {
        name: 'Курсы технического дайвинга NDL',
        url: '/techdiving-courses-ndl.html',
    },
    {
        name: 'Дайвинг на ребрезире',
        url: '/rebreather-diving.html',
    }
];

export const divingInSharm: SubMenu[] = [
    {
        name: 'Цены на дайвинг в Шарме',
        url: '/ceny-diving-sharm.html',
    },
    {
        name: 'Новичкам: интро-дайв, снорклинг',
        url: '/sharm-try-diving.html',
    },
    {
        name: 'Детский дайвинг',
        url: '/kids-diving.html',
    },
    {
        name: 'Страхование дайверов',
        url: '/diving-strahovka.html',
    },
    {
        name: 'Архив акций',
        url: '/arhiv-akciy-sharm.html',
    },
];

export const liveaboard: SubMenu[] = [
    {
        name: 'Прошедшие дайвинг сафари',
        url: '/last-safari-egypt.html',
    },
    {
        name: 'Южные маршруты Красного моря',
        url: '/redsea-liveaboard-south.html',
    },
    {
        name: 'Северные маршруты Красного моря',
        url: '/redsea-liveaboard-north.html',
    },
    {
        name: 'Сафарийный флот',
        url: '/redsea-liveaboard-fleet.html',
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

