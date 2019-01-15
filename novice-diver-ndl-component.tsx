import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';

export class NoviceDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Начальный курс обучения дайвингу Novice diver NDL</h1>
            <Slider images={sliderNovice} width={400} height={512}/>
            <p>На начальном курсе обучения студенты осваивают основы дайвинга. Квалификация Novice Diver NDL позволяет совершать погружение под наблюдением профессионала (дайвмастера или инструктора) на глубину не более 12 метров.</p>
            <p>В курс Novice Diver NDL входят:</p>
            <ul><li>Теория, практические занятий в закрытом водоеме (бассейне или какой-либо акватории имеющую мелководную часть, защищенную от течений и дном, на которое аквалангист может встать).</li>
                <li>Два погружения в открытой воде (в море).</li>
                <li>Экзамен. </li></ul>
            <p>Курс NDL NOVICE Diver является частью курса DIVER NDL, и создан для тех людей, которые по различным причинам не успевают выполнить все упражнения курса Diver NDL. Курс длится 2 дня.</p>
            <p>В стоимость включены учебные материалы, снаряжение для дайвинга. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>235$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>
            <p>Что дальше?</p>
            <div className="diver-card">
                <a href="/kurs-diver-ndl.html">
                    <img src="" title="Начальный курс обучения дайвингу Diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                </a>
            </div>
            <a href="/diving-courses-ndl.html" className="ndl-courses-list-button">Вернуться назад к структуре курсов</a>

        </ div>
    }
}
const sliderNovice: string[] = [
    'images/courses/novice-diver-ndl-1.jpg',
    'images/courses/novice-diver-ndl-2.jpg',
    'images/courses/novice-diver-ndl-3.jpg',
    'images/courses/novice-diver-ndl-4.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(NoviceDiverNdl);
}