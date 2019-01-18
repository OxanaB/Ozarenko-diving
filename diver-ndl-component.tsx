import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';

export class DiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Начальный курс обучения дайвингу Diver NDL</h1>
            <Slider images={sliderDiver} width={512} height={400}/>
            <p>Курс Diver NDL это основной базовый курс для начинающих аквалангистов. В процессе прохождения теоретической части этого курса Вы получите необходимые знания по теории дайвинга, планированию погружений, оборудованию, физике и физиологии дайвинга.</p>
            <p>Во время прохождения практической части этого курса наши инструкторы научат Вас безопасному плаванию с аквалангом. Дайвинг это не экстремальное занятие, и тем не менее и здесь есть ряд правил, которые позволят Вам максимально комфортно чувствовать себя под водой и при  этом оставлять после себя окружующий подводный мир нетронутым.</p>
            <p>Курс длится 3-4 дня и включает в себя 4 погружения в бассейне или на мелководье, и 4 погружения в море до глубины 18 метров.</p>
            <p>По окончании курса выдается сертификат, позволяющий безопасно погружаться на глубины до 18 метров с напарником.</p>
            <p>В стоимость включены учебные материалы, снаряжение для дайвинга. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <p>В стоимость курса включены оборудование для дайвинга, трансфер из отеля, учебные материалы и работа инструктора. Дополнительно оплачивается сертификационный взнос 35$,.</p>
            <p>Предложение действует при завершении всех требований курса за три дня. В случае если вы не успеваете сдать все навыки за три дня и вам требуется дополнительный четвертый день, курс оплачивается по полной стоимости 315$.</p>
            <h2>Смотрите видео о том как проходит курс Diver NDL</h2>
            <iframe className="video" src="https://www.youtube.com/embed/CpO1yeCZULg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            
            <div className="ndl-course-page-price"><p>335$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>
            <p>Что дальше?</p>
            <div className="diver-card">
                <a href="/kurs-universal-diver-ndl.html">
                    <img src="" title="Вторая ступень обучения дайвингу курс Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                </a>
            </div>
            <a href="/diving-courses-ndl.html" className="ndl-courses-list-button">Вернуться назад к структуре курсов</a>

        </ div>
    }

}
const sliderDiver: string[] = [
    '/images/courses/diver-ndl-1.jpg',
    '/images/courses/diver-ndl-2.jpg',
    '/images/courses/diver-ndl-3.jpg',
    '/images/courses/diver-ndl-4.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(DiverNdl);
}