import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';

export class ViktorOzarenko extends React.Component {
    render() {
        return <div className="page-container">

            <h1>Виктор Озаренко</h1>
            <Slider images={sliderViktor} width={500} height={640}/>
            <p>Командор Клуба "Искатели морских сокровищ"​, сын двух городов-героев Одессы и
                Севастополя. Незаурядная личность, опытный подводный пловец, человек-легенда, 40 лет
    профессионально занимается дайвингом.</p>

            <p>​Виктор начал свою подводную деятельность еще в далекие времена СССР на берегу Черного моря. В 12 лет
                он совершил свое первое погружение на аппарате "АВМ-3м", первым из всех приятелей отважившись сделать
                шаг в бездну. После этого его настольными книгами стали: "Десятая флотилия МАС", "Подводные диверсанты", "Немецкие
                подводные диверсанты во второй Мировой войне", а также "Князь Боргезе" (книга про командира итальянской десятой
    флотилии МАС).</p>

            <p>С 1981 по 1996 годы служил на Военно-морском флоте. Основной деятельностью на службе были
                водолазные работы (рабочая глубина 200 метров), испытание новых образцов подводной техники, испытание средств
                передвижения под водой, работа глубоководных комплексов, а также подготовка морских животных (дельфинов).
    Виктор руководил оперативно-спасательным водолазным отрядом. </p>

            <p>Уйдя в запас, имея богатый опыт подводного плавания, Озаренко решает включиться в
    струю бурно развивающего на территории бывшего Советского Союза любительского дайвинга.</p>

            <p>Он становится инструктором PADI, в последующем инструктором-тренером IANTD и NDL.</p>

            <p>Сегодня за плечами Виктора более 18 тысяч дайвов в различных условиях погружений и
                конфигураций снаряжения, более чем 15 летний опыт работы инструктором по дайвингу на Красном, Черном
    и Средиземном морях, а также водах Антлантического и Индийского океанов.</p>

            <p>Виктор Озаренко является инструктором-тренером и курс-директором&nbsp;международных
    дайверских организаций:</p>

            <p>PADI Master Scuba Diver Trainer # 626156, IANTD Trimix Instructor Trainer #666, Tec Gas Blender EANx/ Trimix DSAT, NDL Course Director, Master IDC Tech Instructor</p>

            <p>В 2013 году Виктор Озаренко в составе экспедиции Русского географического общества установил рекорд
                Гиннеса, погрузившись на дно одного из самых холодных водоемов мира – озера Лабынкыр, в самой холодной
                точке земного шара, в самое холодное время года! Подробности рекорда читайте на странице журнала
    <a href="http://www.vokrugsveta.ru/vs/article/8113/">"Вокруг Света"</a>.</p>

        </ div>
    }
}
const sliderViktor: string[] = [
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo1.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo2.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo3.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo4.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo5.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo6.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo7.jpg',
    '/images/about-us/viktor-ozarenko/viktor_ozarenko_photo8.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(ViktorOzarenko);
}