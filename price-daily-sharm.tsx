export interface PriceList {
	position: string;
	price: string;
}

export const dailyDivingPrice: PriceList[] = [
    {
        position: 'День дайвинга',
        price: '60€'
    },
    {
        position: 'Пакет 3 дня дайвинга',
        price: '160€'
    },
    {
    	position: 'Пакет 5 дней дайвинга',
        price: '220€'
    },
    {
    	position: 'Третий дайв в день',
        price: '20€'
    },
    {
    	position: 'Береговой дайв на домашнем рифе',
        price: '30€'
	},
	
    {
    	position: 'Обед и напитки на корабле',
        price: '7€'
    },
    {
    	position: 'Ночной дайв с корабля',
        price: '50€'
	},
	
    {
    	position: 'Ночной дайв с берега',
        price: '40€'
    },
    {
    	position: 'Индивидуальный гид',
        price: '50€'
	},
	{
    	position: 'Пассажир на корабле',
        price: '35€'
    },
    {
    	position: 'Пробное погружение',
        price: '50€'
	},
	{
    	position: 'Билет в Рас Мухаммед',
        price: '6€'
	},
	{
    	position: 'Индивидуальный корабль',
        price: 'от 500€'
    }
]

export const dailyExtrasPrise: PriceList [] = [
	{
    	position: 'Поездка на дайвинг в Дахаб',
        price: '60€'
	},
	{
    	position: 'Снорклинг тур в Дахаб',
        price: '40€'
	},
	{
    	position: 'SS Thistlegorm (wreck второй мировой)',
        price: '60€'
	},
	{
    	position: 'Dunraven (wreck 1876 г.)',
        price: '25€'
	},
	{
    	position: 'Millon Hope (самый крупный wreck)',
        price: '25€'
	}
]

export const dailyRentPrice: PriceList [] = [
	{
    	position: 'Комплект снаряжения',
        price: '20€'
	},
	{
    	position: 'Мокрый костюм',
        price: '8€'
	},
	{
    	position: 'Регулятор',
        price: '8€'
	},
	{
    	position: 'Подводный компьютер',
        price: '10€'
	},
	{
    	position: 'BCD',
        price: '8€'
	},
	{
    	position: 'Ласты',
        price: '4€'
	},
	{
    	position: 'Маска',
        price: '4€'
	},
	{
    	position: 'Фонарик',
        price: '8€'
	}	
]