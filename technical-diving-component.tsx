import * as React from 'react';
import { map } from './utils';
import { priceListTechnicalDaily, priceListTechnicalRent } from './price-technical';
import { enableClient } from './client';

export class TechnicalDiving extends React.Component {

    render() {
        return <div className="page-container">
            <h1>Технический дайвинг</h1>
            <div className="text-after-h1">
                <p>Технический дайвинг отличается от любительского более сложными условиями погружения, выходящими за рамки
                     спортивного дайвинга, а также особыми требованиями к снаряжению и подготовке аквалангиста. Техническая конфигурация поможет
                     научиться лучше контролировать свое тело во время погружения, а также даст необходимый багаж знаний для
                обеспечения своей безопасности во время подводных приключений.</p>
                <p>Курсы технического дайвинга в клубе "Икатели морских сокровищ" доступны каждому аквалангисту уровня open
                     water diver, имеющему всего 10 зарегистрированных погружений. Обучение техническому дайвингу возможно в популярной,
                легкой и удобной конфигурации сайдмаунт. Спарка - прошлый век!</p>
            </div>
            <div className="links-to-tech-courses">
                <h2><a href="/techdiving-courses-iantd.html">
                    Курсы технического дайвинга IANTD</a></h2>
                <h2><a href="/techdiving-courses-ndl.html">
                    Технический дивизион NDL</a></h2>
            </div>
            <div className="price-technical">
                <h2>Цены на технические погружения в Одессе</h2>
                <p>В стоимость технических погружений включены один декомпрессионый дайв в день с персональным гидом Виктором Озаренко, воздушная спарка или баллоны на сайдмаунт,
                грузы. Ваши газы и газы гида оплачиваются дополнительно.</p>
                {map(priceListTechnicalDaily, (priceListTechnicalDaily, index) => {
                    return <table className="price-with-subtitle-table" key={index}>
                        <tbody><tr>
                            <td className="price-title">{priceListTechnicalDaily.title}</td>
                            <td className="price-digits">{priceListTechnicalDaily.price}</td>
                        </tr>
                            <td>{priceListTechnicalDaily.subtitle}</td>
                            <td></td>
                        </tbody>
                    </table>
                })}
            </div>
            <div className="price-technical-rent">
                <h2>Аренда снаряжения</h2>
                {map(priceListTechnicalRent, (priceListTechnicalRent, index) => {
                    return <table className="price-with-subtitle-table" key={index}>
                        <tbody>
                            <tr>
                                <td className="price-title">{priceListTechnicalRent.title}</td>
                                <td className="price-digits">{priceListTechnicalRent.price}</td>
                            </tr>
                            <tr>
                                <td>{priceListTechnicalRent.subtitle}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                })}
            </div>
            <h2>Видео с наших технических погружений</h2>
            <div className="video-links-techdive">
                <div><iframe src="https://youtu.be/j0J6FTidC-w" />
                    <p>Дахаб, Blue Hole (Голубая дыра)</p>
                </div>
                <div><iframe src="https://youtu.be/8WYPb_94k0k" />
                    <p>Дахаб, малый каньон на Abu Talha</p>
                </div>
                <div><iframe src="https://youtu.be/rO5cfTarQdg" />
                    <p>Шарм эль Шейх, Томас каньон</p>
                </div>
            </div>
        </ div>
    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(TechnicalDiving);
}