export interface RebreatherCourses {
    title: string;
    duration: string;
    description: string;
    price: string    
}

export const rebreatherPricelistCourses: RebreatherCourses[] = [
    {
        title: 'Discover Rebreather',
        duration: 'один день, два погружения, максимальная глубина 15 метров',
        description: 'Попробовать погрузиться на ребризере может любой дайвер уровня не ниже Open water diver начиная с 15 лет. За время программы Discover Rebreather вы изучите основную концепцию погружений на аппаратах с замкнутым циклом дыхания, отработаете базовые упражнения в закрытой воде и совершите погружение-экскурсию на ребризере на глубину до 15 метров.',
        price: '160 €'
    },
    {
        title: 'Megalodon full rebreather diver',
        duration: '5-6 дней, 10 погружений, максимальная глубина 42 м + 15 минут deco',
        description: 'На курс принимаются студенты, имеющие уровень Advanced nitrox diver и минимум 50 погружений (с 18 лет). Это начальный полный курс обучения на ребрезире, на котором вы получаете базовые навыки и знания погружений на аппарате с замкнутым циклом дыхания модели Megalоdon, для совершения технических погружений на глубины до 42 метров с максимальной декомпрессией 15 минут. ',
        price: '1200 €'
    },
    {
        title: 'Megalodon advanced Nitrox diver',
        duration: '6-7 дней, 12 погружений, максимальная глубина 42 м + 15 минут deco',
        description: 'Этот курс предназначен для тех дайверов, которые решили начать свой путь в мир технического дайвинга с погружений на ребризере. Курс сочетает в себе базовый курс технического дайвинга Advanced nitrox diver, а также навыки и теорию по дайвингу на ребризере модели Megalоdon. Минимальные требования по зачислению на курс: уровень Advanced open water diver и Nitrox diver, минимальное количество погружений в лог-буке 50, возраст 18 лет. ',
        price: '1650 €'
    },
    {
        title: 'CCR normoxic trimix diver',
        duration: '5 дней, 5 погружений, максимальная глубина 60 м',
        description: 'После того как вы стали ребризер-дайвером и наныряли 25 часов на аппарате с замкнутым циклом дыхания, вы можете перейти на следующий уровнь - погружения до 60 метров. Этот курс - аналог Normoxic trimix diver на открытом цикле, но с использованием ребризера. Если вы уже являетесь Normoxic trimix дайвером, вам будет намного проще адаптироваться под глубокие погружения на нормокстических смесях при погружении на ребризере.',
        price: '1050 €'
    },
    {
        title: 'CCR hypoxic trimix diver',
        duration: '5 дней, 5 погружений, максимальная глубина 100 м',
        description: 'Третий уровень в обучении дайвингу на ребризере. Минимальные требования к студенту: наличие сертификата CCR normoxic trimix diver, опыт 50 часов дайвинга на ребризере, возраст 18 лет.',
        price: '1300 €'
    },
    {
        title: 'Кроссовер на модель Megalodon',
        duration: '3 дня, 4 погружения',
        description: 'Если вы уже являетесь ребризер дайвером, но на другой модели ребризера, и хотите изучить особенности погружений на ребризере типа Megaladon, тогда этот курс для вас.',
        price: '550 €'
    }
]

export interface RebreatherDaily {
    days: string;
    price: string
}

export const rebreatherPricelistAir: RebreatherDaily[] = [
    {
        days: 'один день',
        price: '80 €'
    },
    {
        days: 'два дня',
        price: '160 €'
    },
    {
        days: 'три дня',
        price: '235 €'
    },
    {
        days: 'четыре дня',
        price: '310 €'
    },
    {
        days: 'пять дней',
        price: '380€'
    }
]
export const rebreatherPricelistDecoPro: RebreatherDaily[] = [
    {
        days: 'один день',
        price: '90 €'
    },
    {
        days: 'два дня',
        price: '180 €'
    },
    {
        days: 'три дня',
        price: '260 €'
    },
    {
        days: 'четыре дня',
        price: '345 €'
    },
    {
        days: 'пять дней',
        price: '425€'
    }
]
export const rebreatherPricelistNormoxic: RebreatherDaily[] = [
    {
        days: 'один день',
        price: '100 €'
    },
    {
        days: 'два дня',
        price: '200 €'
    },
    {
        days: 'три дня',
        price: '295 €'
    },
    {
        days: 'четыре дня',
        price: '390 €'
    },
    {
        days: 'пять дней',
        price: '485€'
    }
]
export const rebreatherPricelistHypoxic: RebreatherDaily[] = [
    {
        days: 'один день',
        price: '120 €'
    },
    {
        days: 'два дня',
        price: '240 €'
    },
    {
        days: 'три дня',
        price: '350 €'
    },
    {
        days: 'четыре дня',
        price: '470 €'
    },
    {
        days: 'пять дней',
        price: '580€'
    }
]