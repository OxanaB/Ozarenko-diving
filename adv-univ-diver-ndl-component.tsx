import * as React from 'react'
import { enableClient } from './client';

export class AdvUniDiverNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Продолжение обучению дайвингу курс Advanced Universal diver NDL</h1>
            <img src="" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса advanced universal diver ndl" />
            <img src="" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса advanced universal diver ndl" />
            <img src="" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса advanced universal diver ndl" />
            <img src="" title="Курс Advanced Universal diver NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса advanced universal diver ndl" />

            <p>На курсе ADVANCED UNIVERSAL DIVER NDL вы полностью изучаете 3 специализации NDL (глубоководные погружения, ночные погружения и подводное ориентирование). </p>
            <p>Курс состоит из 1 погружения по подводной навигации, 1 глубоководного погружения до 39 метров и 2 ночных погружения.</p>
            <p>Квалификация ADVANCED UNIVERSAL DIVER NDL позволяет:</p>
            <ul><li>Эффективно ориентироваться под водой при занятии дайвингом</li>
                <li>Повысить безопасность и комфорт ночных погружений</li>
                <li>Повысить безопасность и комфорт дайвера при занятии глубоководными погружениями</li>
                <li>Максимальная рекомендуемая глубина погружения составляет 39 м.</li></ul>
            <p>Курс проходит два дня. В стоимость включены учебные материалы, работа инструктора. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>235$</p></div>
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
                    <a href="/kurs-rescue-diver-and-medic-first-aid.html">
                        <img src="" title="Курсы дайвинга Спасатель и Оказание первой помощи NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
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
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(AdvUniDiverNdl);
}