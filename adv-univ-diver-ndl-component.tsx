import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';
import { SpecialtyNdlLinks } from './specialty-links-ndl';

export class AdvUniDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Курс Advanced Universal diver NDL</h1>
            <div className="ndl-course-page-description">
                <Slider images={sliderAdvUni} className={"vertical"} />
                <div>
                    <p>На курсе ADVANCED UNIVERSAL DIVER NDL вы полностью изучаете 3 специализации NDL (глубоководные погружения, ночные погружения и подводное ориентирование). </p>
                    <p>Курс состоит из 1 погружения по подводной навигации, 1 глубоководного погружения до 39 метров и 2 ночных погружения.</p>
                    <p>Квалификация ADVANCED UNIVERSAL DIVER NDL позволяет:</p>
                    <ul><li>Эффективно ориентироваться под водой при занятии дайвингом</li>
                        <li>Повысить безопасность и комфорт ночных погружений</li>
                        <li>Повысить безопасность и комфорт дайвера при занятии глубоководными погружениями</li>
                        <li>Максимальная рекомендуемая глубина погружения составляет 39 м.</li></ul>
                    <p>Курс проходит два дня. В стоимость включены учебные материалы, работа инструктора. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
                <a href="/contact-us.html" className="button">ЗАБРОНИРОВАТЬ</a>
                </div>
            </div>

            <div className="ndl-navigation">
                <a href="/kurs-universal-diver-ndl.html">
                    <img src="/images/courses/card-universal-diver-ndl.jpg" title="Курс Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                </a>
                <a href="/kurs-universal-diver-ndl.html">
                    <div className="arrow back"></div>
                </a>
                <a href="/kurs-rescue-diver-and-medic-first-aid.html">
                    <div className="arrow forward"></div>
                </a>
                <a href="/kurs-rescue-diver-and-medic-first-aid.html">
                    <img src="/images/courses/card-rescue-diver-ndl.jpg" title="Курсы дайвинга Спасатель и Оказание первой помощи NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                </a>
            </div>
            <div className="center-align">
                <h2>Специализированные курсы NDL</h2>
                <SpecialtyNdlLinks />
                <a href="/diving-courses-ndl.html" className="button center">Вернуться назад к структуре курсов</a>
            </div>

        </ div>
    }
}
const sliderAdvUni: string[] = [
    '/images/courses/advanced-universal-diver-ndl-1.jpg',
    '/images/courses/advanced-universal-diver-ndl-2.jpg',
    '/images/courses/advanced-universal-diver-ndl-3.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(AdvUniDiverNdl);
}