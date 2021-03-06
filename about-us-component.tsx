import * as React from 'react';
import { enableClient } from './client';

export class Team extends React.Component {
    render() {
        return <div className="page-container">

            <h1>Школа дайвинга Виктора Озаренко </h1>

            <p>Дайвинг клуб "Искатели морских сокровищ" был основан легендарным водолазным специалистом
                военно-морского флота, одесситом Виктором Озаренко. В 2002 году Виктор приехал работать инструктором по
                дайвингу в Шарм-эль-Шейх, так началась история клуба. За 17 лет более 1000 человек прошли обучение на
                различных курсах дайвинга, в том числе на таких серьезных технических курсах как "Тримикс дайвер"
                (погружения до 100 метров). Стены клуба выпустили много настоящих профессионалов - инструкторов по дайвингу в
    системах IANTD и NDL разного уровня, в том числе для глубоких погружений.</p>

            <p>Мы оказываем услуги по организации:</p>

            <ul>
                <li>дайвинга в Одессе и Египте с выходом в море на яхте и береговыми погружениями для опытных аквалангистов,</li>
                <li>дайв-поездки на затонувший корабль Сулина,</li>
                <li>пробных погружений и морских прогулок для новичков в дайвинге,</li>
                <li>дайвиг-сафари по северным и южным маршрутам Красного моря с проживанием на яхте,</li>
                <li>начального обучения дайвингу на курсах Open water diver PADI или Diver NDL,</li>
                <li>последующего обучения дайвингу на различных курсах PADI, NDL и IANTD,</li>
                <li>технических погружений на открытом цикле любого уровня сложности (в спарке или сайдмаунте),</li>
                <li>технических погружений на закрытом цикле (ребризер) на глубины до 100 метров,</li>
                <li>пещерного дайвингу и обучению ему,</li>
                <li>обучения дайвингу на ребризерах Megalodon и Inspiration,</li>
                <li>обучения техническому дайвингу для глубоких погружений,</li>
                <li>обучения рекреационных и технических инструкторов по системам NDL и IANTD.</li>
            </ul>

            <h2 className="center">Команда клуба "Искатели морских сокровищ"</h2>
            <div className="team">
                <div className="team-member">
                    <img alt="Оксана Быкова, инструктор по дайвингу PADI" src="/images/about-us/team/diving-instructor-oxana.jpg" />
                    <h3>Оксана Быкова, инструктор по дайвингу</h3>
                    <div>
                        <p>PADI OWSI #420043,</p>
                        <p>EFR Instructor,</p>
                        <p> NDL Instructor Rank II №BO 2-6115</p>
                        <p>E-mail: <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a></p>
                    </div>
                </div>

                <div className="team-member">
                    <img alt="Виктор Озаренко, инструктор по дайвингу, школа дайвинга в Одессе"
                        src="/images/about-us/team/diving-trainer-viktor-ozarenko.jpg" />

                    <h3>Виктор Озаренко, инструктор-тренер,командор клуба</h3>
                    <div>
                        <p>PADI #626156 Master Scuba Diver Trainer, </p>
                        <p>EFR Instructor, </p>
                        <p>Tec Gas Blender EANx/ Trimix DSAT, </p>
                        <p>IANTD #666 Trimix Inctructor Trainer, </p>
                        <p>NDL Course Director, Master IDC tech Instructor NDL</p>
                        <p>г. Одесса, Украина</p>
                        <p>Телефон, вайбер: +380 68 498 1046</p>
                        <p>E-mail: <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a></p>
                    </div>
                </div>

                <div className="team-member">
                    <img alt="Богдан Хмельницкий инструктор, Bogdan Khmelnitskiy diving instructor" src="/images/about-us/team/diving_instructor_bogdan.jpg" />
                    <h3>Богдан Хмельницкий, инструктор по дайвингу</h3>
                    <div>
                        <p>NDL Instructor Rank II №KB 2-4935</p>
                        <p>г. Белгород-Днестровский, Одесская область, Украина</p>
                        <p>Телефон, вайбер:</p>
                        <p>+38 067 718 8160</p>
                        <p>E-mail: <a href="mailto:akkerman@rambler.ru">akkerman@rambler.ru</a></p>
                    </div>
                </div>
            </div>

        </ div>;
    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(Team);
}
