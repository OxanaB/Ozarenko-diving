import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';

export class UniversalDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Вторая ступень обучения дайвингу курс Universal diver NDL</h1>
            <Slider images={sliderUniversal} width={512} height={400}/>
            <p>Курс Universal Diver - это следующая ступень в обучении дайвингу. Данный курс позволяет аквалангисту наиболее полно почувствовать всё разнообразие дайвинга - его приключенческую сторону.</p>
            <p>К занятиям по программе курса может приступить каждый, кто уже получил сертификат Diver NDL или эквивалент.</p>
            <p>В состав курса Universal Diver входят практические занятия в открытом водоёме с получением обязательных навыков:</p>
            <ul><li>Подводного плавания с аквалангом в тёмное время суток с использованием фонарей.</li>
                <li>Погружения на глубины от 18-30 метров.</li>
                <li>Подводного ориентирования по природным ориентирам и с использованием компаса.</li></ul>
            <p>По окончании курса выдается сертификат, позволяющий безопасно погружаться на глубины 18-30 метров с напарником.</p>
            <p>Курс длится 2 дня, за которые вы совершите 5 учебных погружений в море.</p>
            <p>В стоимость включены учебные материалы, снаряжение для дайвинга. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>260$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>
            <p>Для наиболее полного понимания специализированных погружений Вы можете продолжить обучение на курсе ADVANCED UNIVERSAL DIVER NDL или отдельно на одном из курсов специализаций, который Вас заинтересует.</p>
            <div className="ndl-navigation">
                <div className="diver-card">
                    <a href="/kurs-diver-ndl.html">
                        <img src="" title="Начальный курс обучения дайвингу Diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="arrow-back"></div>
                <div className="arrow-forward"></div>
                <div className="diver-card">
                    <a href="/kurs-advanced-universal-diver-ndl.html">
                        <img src="" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
            </div>
            <h3>Специализированные курсы NDL</h3>
            <div className="specialties">
                <div className="diver-card">
                    <a href="/kurs-nitrox-night-deep-dry-suit.html#Nitrox">
                        <img src="" title="Курс Nitrox diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="diver-card">
                    <a href="/kurs-nitrox-night-deep-dry-suit.html#Deep">
                        <img src="" title="Курс Deep diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="diver-card">
                    <a href="/kurs-nitrox-night-deep-dry-suit.html#PPB">
                        <img src="" title="Курс Professional bouyancy diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="diver-card">
                    <a href="/kurs-nitrox-night-deep-dry-suit.html#Night">
                        <img src="" title="Курс Night diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="diver-card">
                    <a href="/kurs-nitrox-night-deep-dry-suit.html#DrySuit">
                        <img src="" title="Курс Dry suit diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
            </ div>
            <a href="/diving-courses-ndl.html" className="ndl-courses-list-button">Вернуться назад к структуре курсов</a>
        </div>
    }
}
const sliderUniversal: string[] = [
    '/images/courses/universal-diver-ndl-1.jpg',
    '/images/courses/universal-diver-ndl-2.jpg',
    '/images/courses/universal-diver-ndl-3.jpg',
    '/images/courses/universal-diver-ndl-4.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(UniversalDiverNdl);
}