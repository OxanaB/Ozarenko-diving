import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';

export class KidsDiving extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Детский дайвинг </h1>
            <p>Не секрет, что многие родители-дайверы хотят приобщить своих детей к увлечению дайвингом. В нашем клубе вы можете спокойно и, главное, с удовольствием понырять вместе со своим ребёнком, и обучить его дайвингу. Для детей у нас есть маленькие пяти-шести литровые баллоны, с которыми детям легко и комфортно погружать в красочный подводный мир Египта и изучать рыбок. Занятия проходят в игровой форме и легко даются самым непоседливым детям. Детский дайвинг - это в первую очередь счастье и улыбка на лице вашего ребёнка.</p> 
            <p>Тренировки проводятся в бассейне в Одессе, с последующим выездом на открытую воду в Египет. Обучение детей проходит в максимально комфортных и безопасных условиях, практически индивидуально: максимально в группе на одного инструктора одновременно учатся только два ребенка. При обучении детей дайвингу мы даём необходимые знания в игровой форме. Чтобы ребенку было комфортно в воде мы используем легкие пяти-шести литровые стальные и аллюминиевые баллоны</p>
            <p>Детей можно увлечь в определение вида увиденных рыб. Кто знает может у вас растет будущий ученый-биолог?!</p>
            <div className="slider-align-left">
            <Slider images={sliderKids} className={"vertical"}/>
            <h2>Обучение детей дайвингу</h2>
            <p>Курсы дайвинга для детей (Junior Diver NDL) делятся на две группы в соответствии с возрастом ребенка.</p>
            <p>От 8-10 лет.</p>
            <p>Первая возрастная группа (от 8 - 10 лет) дети обучаются по программе состоящей из 15ти теоретических занятий в классной комнате и 15ти практических занятий в закрытом водоеме, плюс 2 погружения в открытом водоеме.</p>
            <p>От 10 -14 лет.</p>
            <p>Вторая возрастная группа (от 10-14 лет) обучаются по программе состоящей из 25ти теоретических занятий в классной комнате и 6ти практических занятий в закрытом водоеме, плюс 4 погружения в открытом водоеме.</p>
            <p>После получения сертификата JUNIOR NOVICE DIVER NDL 8-9 летние дети  могут погружаться на глубину до 5 метров только с инструктором профессионалом, а  после получения JUNIOR DIVER NDL 10-14 летние дети могут погружаться  на глубину до 12 метров с профессионалом или родителем/опекуном имеющим квалификацию не ниже RESCUE DIVER NDL.</p>
            <p>Обладатель сертификата JUNIOR DIVER NDL может повысить свою квалификацию до NOVICE DIVER / DIVER NDL по достижении им 15-ти лет без выполнения дополнительных процедур. </p>
            </div>
            <h2>Информация для родителей</h2>
            <p>Обучение детей дайвингу несколько отличается от обучения взрослого человека. Задача инструктора состоит в том, чтобы объяснить ребенку довольно сложные вещи простым и доступным языком.</p>
            <p>Как ни странно, теоретическую часть обучения дети осваивают быстрее, чем взрослые. Это происходит потому, что мозг ребенка настроен на усвоение нового материала лучше, чем у взрослого человека. Ребенок учится в школе, и каждый день открывает для себя фантастические по масштабу вещи. Например, вчера он узнал, что такое мировой океан, что такое закон Архимеда, да и вообще что такое человек. Единственное отличие процесса обучения дайвингу от обучения математике или физике в школе – то, что инструктор включает в этот процесс элементы игры и относительной свободы ребенка (до определенных пределов конечно).</p>
            <p>У ребенка должно создаваться ощущение, что, при всей серьезности изучаемого материала, это, все-таки, отдых. Тем не менее, в процессе обучения инструктор настроит ребенка на серьезный подход к этому занятию.</p>
            <p>Практическая часть обучения в воде будет проводиться в сопровождении и под обязательным контролем инструктора. Ребенка научат плавать с аквалангом, но в дальнейшем организовывать, планировать и контролировать проведение этих погружений должен будет взрослый человек. Каким бы ни был ответственным и аккуратным юный аквалангист, все равно ребенок обладает ограниченной мерой ответственности за свои поступки, и поэтому вся ответственность за погружение ложится на сопровождающих его взрослых.</p>
               
            <iframe className="video" src="https://www.youtube.com/embed/Hfvokd2s-Qk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <iframe className="video" src="https://www.youtube.com/embed/T7qAgBnDO1U" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <h2>Стоимость дайвинга для детей</h2>
            <p>Цены на детский дайвинг практически не отличаются от стоимости дайвинга для взрослых. Но учитывая то, что дети быстрее устают и зачастую делают только одно погружение в день, мы сделали специальный прайс-лист для маленьких дайверов.</p>
            <p>Курс Junior novice diver NDL .................................................. $ 235</p>
            <p>Курс Junior diver NDL .............................................................. $ 335</p>
            <p>Курс Junior open water diver PADI ........................................ $ 335</p>
            <p>В стоимость курсов включены работа русского инструктора, комплект снаряжения для дайвинга, трансфер из отеля.</p>
            <p>Сертификационный взнос в PADI и NDL оплачивается дополнительно и стоит 35$.</p>
            <p>Учебные материалы PADI приобретаются дополнительно. Стоимость учебника PADI $ 40 (обязательно наличие учебника у каждого студента - требование PADI).</p>
        </div>
    }
}
const sliderKids: string[] = [
    'images/diving-sharm/kids-1.jpg',
    'images/diving-sharm/kids-2.jpg',
    // 'images/diving-sharm/kids-3.jpg',
    'images/diving-sharm/kids-4.jpg',
    'images/diving-sharm/kids-5.jpg',
    'images/diving-sharm/kids-6.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(KidsDiving);
}