import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';
import { SpecialtyNdlLinks } from './specialty-links-ndl';

export class UniversalDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Вторая ступень обучения дайвингу курс Universal diver NDL</h1>
            <div className="ndl-course-page-description">
                <Slider images={sliderUniversal} className={'special'} />
                <div>

                    <p>Курс Universal Diver - это следующая ступень в обучении дайвингу. Данный курс позволяет аквалангисту наиболее полно почувствовать всё разнообразие дайвинга - его приключенческую сторону.</p>
                    <p>К занятиям по программе курса может приступить каждый, кто уже получил сертификат Diver NDL или эквивалент. Курс длится 2 дня, за 5 учебных погружений.</p>
                    <p>В состав курса Universal Diver входят практические занятия в открытом водоёме с получением обязательных навыков:</p>
                    <ul><li>Подводного плавания с аквалангом в тёмное время суток с использованием фонарей.</li>
                        <li>Погружения на глубины от 18-30 метров.</li>
                        <li>Подводного ориентирования по природным ориентирам и с использованием компаса.</li></ul>
                    <p>По окончании курса выдается сертификат, позволяющий безопасно погружаться на глубины 18-30 метров с напарником.</p>
                    </div>
            </div>
                <p>Для наиболее полного понимания специализированных погружений Вы можете продолжить обучение на курсе ADVANCED UNIVERSAL DIVER NDL или отдельно на одном из курсов специализаций, который Вас заинтересует.</p>

            <div className="center-align">
                <a href="/contact-us.html" className="button center">ЗАБРОНИРОВАТЬ</a>
                <h2>Навигация по курсам</h2>
                <div className="ndl-navigation">
                    <a href="/kurs-diver-ndl.html">
                        <img src="/images/courses/card-diver-ndl.jpg" title="Начальный курс обучения дайвингу Diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>

                    <a href="/kurs-diver-ndl.html">
                        <div className="arrow back"></div></a>
                    <a href="/kurs-advanced-universal-diver-ndl.html">
                        <div className="arrow forward"></div></a>

                    <a href="/kurs-advanced-universal-diver-ndl.html">
                        <img src="/images/courses/card-advanced-universal-diver-ndl.png" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <h2>Специализированные курсы NDL</h2>
                <SpecialtyNdlLinks />
                <a href="/diving-courses-ndl.html" className="button center">Вернуться назад к структуре курсов</a>

            </div>
        </div>;
    }
}
const sliderUniversal: string[] = [
    '/images/courses/universal-diver-ndl-1.jpg',
    '/images/courses/universal-diver-ndl-2.jpg',
    '/images/courses/universal-diver-ndl-3.jpg',
    '/images/courses/universal-diver-ndl-4.jpg',
];

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(UniversalDiverNdl);
}
