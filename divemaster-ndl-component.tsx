import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';
import { SpecialtyNdlLinks } from './specialty-links-ndl';

export class DivemasterNdl extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Первый профессиональный курс дайвинга - Divemaster NDL</h1>
            <div className="ndl-course-page-description">
                <Slider images={sliderDivemaster} className={"vertical"} />
                <div>

                    <p>Курс Дайвмастер (Divemaster NDL) - это первый профессиональный уровень в дайвинге. Дайвер успешно прошедший курс Divemaster NDL получает возможность работать и зарабатывать в дайвиндустрии как дайвгид, помогать инструктору при проведении курсов, проводить пробные погружения.</p>
                    <p>Курс Divemaster NDL занимает от 2 недели, и состоит из теоретической и практической частей. Теоретическая часть содержит знания по:</p>
                    <ul><li>по правилам организации погружений,</li>
                        <li>основам дайвинг бизнеса,</li>
                        <li>методологии работы с клиентом дайв центра,</li>
                        <li>полный объем информации по теории дайвинга (физика, физиология, теории декомпрессии, дайв таблицам и компьютерам, устройству и функционированию оборудования для дайвинга и общей океанологии).</li></ul>
                    <p>Практическая часть содержит:</p>
                    <ul><li>комплекс упражнений в открытом водоёме, необходимых для получения практических навыков организации погружений и контроля над группой дайверов. </li>
                        <li>отработку и сдачу основных навыков подводного плавания</li>
                        <li>выполнение нормативов по плаванию и выносливости</li>
                        <li>отработку основных навыков работы с людьми во время ассистирования инструктору НДЛ при проведении курсов.</li></ul>
                </div>
                    <p>После успешного завершения курса NDL DIVEMASTER дайвер может продолжить свое обучение и повысить собственное профессиональное мастерство, поступив на <a href="/instructor-development-course.html#NdlItc">инструкторский курс</a> NDL.</p>
                <p>Для поступления на курс DIVEMASTER NDL студент должен иметь аттестацию Universal Diver, Professional buoyancy, Rescue diver и MFA, либо аттестацию DIVELEADER NDL или эквивалентные им. Если курс Professional buoyancy не пройден студентом, то он должен быть включен в курс DIVEMASTER NDL. Кандидат должен быть не моложе 18 лет, иметь медицинское разрешение на занятия подводным плаванием в соответствии с законами страны, иметь не менее 40 зарегистрированных погружений.</p>
                <p>В стоимость курса включены практические занятия в бассейне и открытом море, дайвмастерская практика, учебные материалы, трансферы. Ареда снаряжения и сертификация оплачивается дополнительно.</p>
            </div>

            <div className="center-align">
                <a href="/contact-us.html" className="button center">ЗАБРОНИРОВАТЬ</a>
                <h2>Навигация по курсам</h2>
                <div className="ndl-navigation">
                    <a href="/kurs-rescue-diver-and-medic-first-aid.html">
                        <img src="/images/courses/card-rescue-diver-ndl.jpg" title="Курсы дайвинга Спасатель и Оказание первой помощи NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                    <a href="/kurs-rescue-diver-and-medic-first-aid.html">
                        <div className="arrow back"></div></a>
                    <a href="/instructor-development-course.html#NdlItc">
                        <div className="arrow forward"></div></a>
                    <a href="/instructor-development-course.html#NdlItc">
                        <img src="/images/courses/card-instructor-rank-2-ndl.jpg" title="Профессиональные курсы инструкторов по дайвингу NDL" alt="обучение дайвингу Одесса, курсы дайвинга Одесса, обучение дайвингу, курсы дайвинга, стоимость курса diver ndl" />
                    </a>
                </div>
                <h2>Специализированные курсы NDL</h2>
                <SpecialtyNdlLinks />
                <a href="/diving-courses-ndl.html" className="button center">Вернуться назад к структуре курсов</a>
            </div>

        </ div>
    }
}
const sliderDivemaster: string[] = [
    '/images/courses/divemaster-ndl-1.jpg',
    '/images/courses/divemaster-ndl-2.jpg',
    '/images/courses/divemaster-ndl-3.jpg',
    '/images/courses/divemaster-ndl-4.JPG',
]
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(DivemasterNdl);
}