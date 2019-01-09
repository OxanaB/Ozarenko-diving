import * as React from 'react'
import { map } from '../utils';
import { rebreatherPricelistCourses, rebreatherPricelistAir, rebreatherPricelistDecoPro, rebreatherPricelistNormoxic, rebreatherPricelistHypoxic } from './rebreather-price';


export class Rebreather extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Дайвинг на ребризере (замкнутый цикл дыхания) CCR</h1>
            <img src="/images/technical-diving/rebreather-diver.jpg" alt="дайвинг на ребризере, обучение ребризеру, ребризер красное море, ребризер египет" />
            <div className="text-after-h1">
                <p>Дайвинг на ребризере сильно отличается от погружений с обычным аквалангом - практически нет пузырей, рыба вас не
                    боится, по-другому происходит тонкая настройка плавучести, вы не думаете о расходе газа, но думаете о совершенно
                    других вещах. Дайвинг на ребризере можно сравнить с ездой на автомобиле, где ребризер - это дорогой автомобиль, а
                    обычный авкаланг SCUBA - это велосипед.</p>
            </div>
            <h2>Обучение дайвингу на ребризере</h2>
            <p>Обучение дайвингу на замкнутом цикле проводится на ребризерах Megalodon и Inspiration. Обучение проводится по
                системе IANTD, главным преимуществом которой перед другими системами обучения дайвингу на ребризерах является то,
                что, получив навыки декомпрессионых погружений уровня Advanced nitrox и выше на одной модели ребрезира, вам
                достаточно пройти кроссовер на другую модель ребризера (узнать особенности конкретной модели), чтобы совершать
                такого же уровня погружения, и не платить дважды за теорию декомпресии, как это часто делается в других обучающих
                организациях.</p>
            <p>В стоимость курсов включены: все необходимое оборудование, газы, бэйлаут баллоны, софнолайм, трансферы, работа
                инструктора. Обеды на корабле, парковые сборы, доплаты за поездки к затонувшим кораблям и в окрестности Шарм эль
    Шейха оплачиваются по прайс-листу. Сертификат IANTD оплачивается дополнительно 60 евро .</p>

            {map(rebreatherPricelistCourses, (rebreatherCourses) => {
                return <table>
                    <tr>
                        <td>{rebreatherCourses.title}</td>
                        <td>{rebreatherCourses.price}</td>
                    </tr>
                    <tr>{rebreatherCourses.duration}</tr>
                    <tr>{rebreatherCourses.description}</tr>
                </table>
            })}

            <h2>Цены на погружения на ребризере в Шарм-эль-Шейхе</h2>
            <p>В стоимость погружений на ребризере включены Diluent, кислород, баллон-Bailout, декомпрессоные стейжды и
                декомпрессионые газы (в соотвествии с уровнем погружения и сертификации). Поглатитель sofnolime оплачивается
                отдельно - 12 euro/кг. Bailout-баллоны с тримиксом и кислородом оплачиваются дополнительно при условии их
                использования (для декомпрессионых погружений). Обеды на корабле, парковые сборы, доплаты за поездки к затонувшим
                кораблям и в окрестности Шарм эль Шейха оплачиваются по прайсу. Аренда ребризера Inspiration / Megalodon
                оплачивается дополнительно 70 euro/день. </p>

            <h3>Air rebreather diving, 30м, без декопроцедур</h3>
            {map(rebreatherPricelistAir, (rebreatherDailyAir) => {
                return <table>
                    <tr>
                        <td>{rebreatherDailyAir.days}</td>
                        <td>{rebreatherDailyAir.price}</td>
                    </tr>
                </table>
            })}

            <h3>Deco procedures и Adv.Rec trimix., 48м, 15 мин деко(max)</h3>
            {map(rebreatherPricelistDecoPro, (rebreatherDailyDeco) => {
                return <table>
                    <tr>
                        <td>{rebreatherDailyDeco.days}</td>
                        <td>{rebreatherDailyDeco.price}</td>
                    </tr>
                </table>
            })}

            <h3>Normoxic trimix, 60м max </h3>
            {map(rebreatherPricelistNormoxic, (rebreatherDailyNormox) => {
                return <table>
                    <tr>
                        <td>{rebreatherDailyNormox.days}</td>
                        <td>{rebreatherDailyNormox.price}</td>
                    </tr>
                </table>
            })}

            <h3>Hypoxic trimix, 100м max </h3>
            {map(rebreatherPricelistNormoxic, (rebreatherDailyHypox) => {
                return <table>
                    <tr>
                        <td>{rebreatherDailyHypox.days}</td>
                        <td>{rebreatherDailyHypox.price}</td>
                    </tr>
                </table>
            })}
        </ div>
    }
}