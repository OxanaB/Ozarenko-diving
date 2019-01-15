import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';

export class RescueDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Курс дайвинга - Спасатель Rescue diver NDL</h1>
            <Slider images={sliderRescue} width={520} height={395}/>
            <p>Подводное плавание с аквалангом - это деятельность, в определенной степени, связанная с риском для жизни и здоровья. Именно поэтому и разработан курс Rescue Diver, который поможет Вам научиться оказывать помощь попавшим в беду аквалангистам. Это даст Вам возможность брать на себя ответственность за жизнь и здоровье своих друзей и близких. </p>
            <p>Обучение на курсе RESCUE DIVER NDL готовит дайверов к предупреждению возможных проблем, а, при необходимости, к управлению чрезвычайной ситуацией всеми доступными способами. </p>
            <p>Курс длится 2 дня и включает в себя теоретическую часть (информация о правилах оказания первой помощи при несчастных случаях в дайвинге, об особенностях возможных чрезвычайных ситуаций на воде и особенностях проведения неотложных мероприятий на воде), и практическую часть, содержащую комплекс упражнений в водоёме, необходимых для получения навыков оказания неотложной помощи на воде.</p>
            <p>В стоимость включены работа русского инструктора, учебные материалы. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>325$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2>Курс "Оказание первой медицинской помощи" Medic First Aid NDL</h2>
            <p>Жизнь и здоровье человека это самое главное, что есть на свете. При этом мы все  знаем,  как эта жизнь бывает хрупка. Всякое может случиться. Жизнь и здоровье человека попавшего в беду порой решают минуты.</p>
            <ul><li>Как оказать первую помощь потрадавшему человеку?</li>
                <li>Как поддержать его жизнь до приезда скорой помощи?</li>
                <li>Как обезопасить себя при оказании этой помощи?</li></ul>
            <p>Ответы на эти и многие другие вопросы Вы получите от Вашего инструктора.</p>
            <p>Курс теоретический, проводится за один день. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$. Наличие сертификатов Rescue diver и Medic First Aid является обязательным условием для зачисления на курс <a href="/kurs-divemaster-ndl.html">Divemaster NDL</a>. </p>
            <div className="ndl-course-page-price"><p>110$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <div className="ndl-navigation">
                <div className="diver-card">
                    <a href="/kurs-universal-diver-ndl.html">
                        <img src="" title="Курс Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <div className="arrow-back"></div>
                <div className="arrow-forward"></div>
                <div className="diver-card">
                    <a href="/kurs-divemaster-ndl.html">
                        <img src="" title="Первый профессиональный курс дайвинга Дайвмастер - Divemaster NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
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


        </ div>

    }
}
const sliderRescue: string[] = [
    '/images/courses/rescue-diver-ndl-1.jpg',
    '/images/courses/rescue-diver-ndl-2.jpg',
    '/images/courses/rescue-diver-ndl-3.jpg',
]
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(RescueDiverNdl);
}