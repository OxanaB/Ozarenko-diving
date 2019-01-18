import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';

export class Fleet extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Сафарийный флот</h1>
            <p>Для чудесного отдыха в море очень важно правильно выбрать яхту, на которой вы будете жить и нырять в течение недели во время дайвинг сафари на Красном море.</p>
                <h2>яхта South Moon</h2>
            <div className="wrapper-two-columns">
                <Slider images={sliderSouthMoon} width={600} height={400} />
                <div className="boat-description">
                    <p>Яхта рассчитана на 20 человек</p>
                    <p>Нижняя палуба:</p>
                    <li>6 двухместных кают single bed</li>
                    <p>Средняя палуба:</p>
                    <li>дайв-дек, кухня, салон и ресторан</li>
                    <p>Верхняя палуба:</p>
                    <li>4 двухместных каюты single bed, зона отдыха</li>
                    <p>Солнечная палуба</p>
                    <p>Длина 27 метров, ширина 6 метров, осадка 1,75 метра. Двигатели: 2 х 350 hp, MAN</p>
                    <p>2 зодиака, баллоны DIN, Nitrox, Wi-Fi</p>
                    <p>Порт баризования: Травко, Шарм-эль-Шейх</p>
                </div>
            </div>
                <h2>яхта Brina-1</h2>
            <div className="wrapper-two-columns">
                <Slider images={sliderBrina} width={600} height={400} />
                <div className="boat-description">
                    <p>Яхта рассчитана на 20 человек</p>
                    <p>Нижняя палуба:</p>
                    <li>7 двухместных кают single bed</li>
                    <li>1 каюта с kingsize bed (в носу яхты)</li>
                    <p>Средняя палуба:</p>
                    <li>дайв-дек, кухня, большая кают-компания с обеденной зоной</li>
                    <p>Верхняя палуба:</p>
                    <li>2 двухместных каюты siute (kingsize bed), зона отдыха</li>
                    <p>Солнечная палуба</p>
                    <li>Длина 31 метров, ширина 7 метров, осадка 1,75 метра. Двигатели: 2 х 450 hp, MAN</li>
                    <p>2 зодиака, баллоны DIN, Nitrox, Wi-Fi</p>
                    <p>Порт баризования: Травко, Шарм-эль-Шейх</p>
                </div>
            </div>

                <h2>яхта Carlton Queen</h2>
            <div className="wrapper-two-columns">
                <Slider images={sliderCarltonQueen} width={600} height={400} />
                <div className="boat-description">
                    <p>Рассчитана на 20 человек</p>
                    <p>Нижняя палуба:</p>
                    <li>6 двухместных кают single bed</li>
                    <p>Средняя палуба:</p>
                    <li>дайв-дек, кухня, салон и ресторан</li>
                    <p>Верхняя палуба:</p>
                    <li>4 двухместных каюты Twin bed, зона отдыха</li>
                    <p>Сан-дэк</p>
                    <p>Длина: 35 метров</p>
                    <p>Двигатели: twin mercedes 12 cylinders 600 hp</p>
                    <p>2 зодиака, баллоны DIN, Nitrox, Wi-Fi</p>
                    <p>Порт базирования: Хургада</p>
                    <p>Яхта имеет разрешение на дайвинг по всему Красному морю Египта от Дахаба до границы с Суданом</p>
                </div>
            </div>
                <h2>яхта Carlton</h2>
            <div className="wrapper-two-columns">
                <Slider images={sliderCarltonBoat} width={600} height={400} />
                <div className="boat-description">
                    <p>Рассчитана на 20 человек</p>
                    <p>Нижняя палуба:</p>
                    <li>5 двухместных кают single bed</li>
                    <li>1 двухместная каюта twin bed</li>
                    <p>Средняя палуба:</p>
                    <li>дайв-дек, кухня, салон и ресторан</li>
                    <p>Верхняя палуба:</p>
                    <li>3 двухместных кают single bed</li>
                    <li>1 двухместная каюта twin bed</li>
                    <p>зона отдыха</p>
                    <p>Сан-дэк</p>
                    <p>Длина: 33 метра</p>
                    <p>Двигатели: twin man 10 cylinders 480 hp</p>
                    <p>2 зодиака, баллоны DIN, Nitrox, Wi-Fi</p>
                    <p>Порт баризования: Шарм-эль-Шейх </p>
                    <p>Маршруты: Север, Северные рэки, Бразерс</p>
                </div>
            </div>
        </div>
    }
}
const sliderBrina: string[] = [
    '/images/liveaboard/boat-brina-1.jpg',
    '/images/liveaboard/boat-brina-1-upperdeck.jpg',
    '/images/liveaboard/boat-brina-1-upperdeck-2.jpg',
    '/images/liveaboard/boat-brina-1-divedeck.jpg',
    '/images/liveaboard/boat-brina-1-salon-1.jpg',
    '/images/liveaboard/boat-brina-1-salon-2.jpg',
    '/images/liveaboard/boat-brina-1-salon-3.jpg',
    '/images/liveaboard/boat-brina-1-double.jpg',
    '/images/liveaboard/boat-brina-1-twin.jpg',

]

const sliderCarltonQueen: string[] = [
    '/images/liveaboard/boat-carlton-queen.jpg',
    '/images/liveaboard/boat-carlton-queen-2.jpg',
    '/images/liveaboard/boat-carlton-queen-jumpdeck.jpg',
    '/images/liveaboard/boat-carlton-queen-upperdeck.jpg',
    '/images/liveaboard/boat-carlton-queen-upperdeck-2.jpg',
    '/images/liveaboard/boat-carlton-queen-salon.jpg',
    '/images/liveaboard/boat-carlton-queen-bunk.jpg',
    '/images/liveaboard/boat-carlton-queen-double.jpg',
    '/images/liveaboard/boat-carlton-queen-twin.jpg',
    '/images/liveaboard/boat-carlton-queen-steering-wheel.jpg',
    '/images/liveaboard/boat-carlton-queen-sundeck.jpg',
]

const sliderSouthMoon: string[] = [
    '/images/liveaboard/boat-south-moon.jpg',
    '/images/liveaboard/boat-south-moon-2.jpg',
    '/images/liveaboard/boat-south-moon-divedeck.jpg',
    '/images/liveaboard/boat-south-moon-divedeck-2.jpg',
    '/images/liveaboard/boat-south-moon-upperdeck.jpg',
    '/images/liveaboard/boat-south-moon-sundeck.jpg',
    '/images/liveaboard/boat-south-moon-salon.jpg',
    '/images/liveaboard/boat-south-moon-salon-2.jpg',
    '/images/liveaboard/boat-south-moon-twin.jpg',
    '/images/liveaboard/boat-south-moon-bunk.jpg',
]

const sliderCarltonBoat: string[] = [
    '/images/liveaboard/boat-carlton.jpg',
    '/images/liveaboard/boat-carlton-salon.jpg',
    '/images/liveaboard/boat-carlton-divedeck.jpg',
    '/images/liveaboard/boat-carlton-suite.jpg',
    '/images/liveaboard/boat-carlton-upperdeckbar.jpg',
    '/images/liveaboard/boat-carlton-kitchen.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(Fleet);
}
