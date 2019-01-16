import * as React from 'react';
import { enableClient } from './client';
import { pricelistIntro } from './price-daily-sharm';
import { map } from './utils';
import { Slider } from './slider-component';

export class IntroDiving extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Дайвинг для начинающих</h1>
            <h2>с чего начать занятия дайвингом или как проходит пробное погружение с аквалангом в Египте (Шарм эль Шейх)</h2>
            <div className="wrapper">
                <div className="main-text">
                    <p>Приехав в Египет, многие интересуются, чем можно здесь заняться. Экскурсия на дайвинг - лучшее решение, потому как все самые яркие краски пустыни находятся под водой!</p>
                    <p>Кто может заниматься дайвингом? В принципе каждый человек, у которого нет проблем с давлением и не заложен нос, а также дети начиная с 8-10 лет.</p>
                    <p>Для первого пробного погружения специальная подготовка не требуется. Вы прослушаете предварительный инструктаж, после чего опуститесь под воду на 15 минут один на один с инструктором по дайвингу, который будет полностью все контролировать. </p>
                    <p>Пробное погружение можно делать как с берега, так и во время морской прогулки на дайверской яхте к рифам острова Тиран или в заповедник Рас Мухаммед.</p>
                </div>
                <div className="images-intro">
                    <Slider images={sliderIntroDive} width={393} height={260} />
                    <h5>Цены на дайвинг экскурсии и начальное обучение</h5>
                </div>
            </div>
            <div>
                <p>Другим вариантом первого опыта в дайвинге является программа Discover Scuba Diving PADI, которую мы часто советуем начинающим аквалангистам. Чем она отличается от пробного погружения?</p>
                <p>Во-первых, вам дается базовая школа и пять основных навыков подводного плавания, после выполнения которых вы можете плыть под водой самостоятельно под контролем инструктора, а не за ручку с ним.</p>
                <p>Во-вторых, время погружения увеличивается до того момента, когда воздух в вашем баллоне будет подходить к концу. Обычно его хватает на 40-50 минут погружения. </p>
                <p>В-третьих, максимальная глубина погружения по стандартам этой программы 12 метров, что в два раза больше чем во время просто пробного погружения.</p>
                <p>В-четвертых, после прохождения программы Discover Scuba Diving вы получаете временный сертификат дайвера, действительный в течение одного месяца, по которому вы можете нырять в любом другом месте в группе до 4 аквалангистов с таким же сертификатом в сопровождении одного инструктора на глубину до 12 метров.</p>
                <p>Наконец, самый большой плюс второго варианта с чего начать дайвинг: стоимость программы Discover Scuba Diving будет вычтена из курса Open water diver PADI, если вы решите продолжить обучение дайвингу в нашем клубе.</p>
            </div>
            <h2>Цены на дайвинг для начинающих</h2>
            <div className="price-intro">
                {map(pricelistIntro, (priceIntro, index) => {
                    return <table className="price-with-subtitle-table" key={index}>
                        <tbody>
                            <tr>
                                <td className="price-title">{priceIntro.title}</td>
                                <td className="price-digits">{priceIntro.price}</td>
                            </tr>
                            <tr>
                                <td>{priceIntro.subtitle}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                })}
            </div>
        </div>
    }
}

const sliderIntroDive: string[] = [
    '/images/diving-sharm/intro/intro-01.jpg',
    '/images/diving-sharm/intro/intro-02.jpg',
    '/images/diving-sharm/intro/intro-03.jpg',
    '/images/diving-sharm/intro/intro-04.jpg',
    '/images/diving-sharm/intro/intro-05.jpg',
    '/images/diving-sharm/intro/intro-06.jpg',
    '/images/diving-sharm/intro/intro-07.jpg',
    '/images/diving-sharm/intro/intro-08.jpg',
    '/images/diving-sharm/intro/intro-09.jpg',
    '/images/diving-sharm/intro/intro-10.jpg',
];

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(IntroDiving);
}
