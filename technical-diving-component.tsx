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
                <a href="/techdiving-courses-iantd.html">
                    <img src="/images/logos/IANTD-logo.jpg" />
                    <h2>Курсы технического дайвинга IANTD</h2></a>
                <a href="/techdiving-courses-ndl.html">
                    <img src="/images/logos/ndl-tek-logo-red.jpg" />
                    <h2>Технический дивизион NDL</h2></a>
            </div>
            <div className="price-technical">
                <h2>Цены на технические погружения в Одессе</h2>
                <p>В стоимость технических погружений включены один декомпрессионый дайв в день с персональным гидом Виктором Озаренко, воздушная спарка или баллоны на сайдмаунт,
                грузы. Ваши газы и газы гида оплачиваются дополнительно.</p>
                {map(priceListTechnicalDaily, (priceListTechnicalDaily, index) => {
                    return <table className="price-table-big" key={index}>
                        <tbody><tr>
                            <td className="title">{priceListTechnicalDaily.title}</td>
                            <td className="digits">{priceListTechnicalDaily.price}</td>
                        </tr>
                            <td className="subtitle">{priceListTechnicalDaily.subtitle}</td>
                            <td></td>
                        </tbody>
                    </table>
                })}
            </div>
                <h2>Аренда снаряжения</h2>
            <div className="price-technical-rent">
                {map(priceListTechnicalRent, (priceListTechnicalRent, index) => {
                    return <table className="price-table-big" key={index}>
                        <tbody>
                            <tr>
                                <td className="title">{priceListTechnicalRent.title}</td>
                                <td className="digits">{priceListTechnicalRent.price}</td>
                            </tr>
                            <tr>
                                <td className="subtitle">{priceListTechnicalRent.subtitle}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                })}
            </div>
            <h2>Видео с наших технических погружений</h2>
            <div className="video-links-techdive">
                <div>
                    <iframe className="video" src="https://www.youtube.com/embed/j0J6FTidC-w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                    <h4>Дахаб, Blue Hole (Голубая дыра)</h4>
                </div>
                <div>
                    <iframe className="video" src="https://www.youtube.com/embed/8WYPb_94k0k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                    <h4>Дахаб, малый каньон на Abu Talha</h4>
                </div>
                <div>
                    <iframe className="video" src="https://www.youtube.com/embed/rO5cfTarQdg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
                    <h4>Шарм эль Шейх, Томас каньон</h4>
                </div>
            </div>
        </ div>
    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(TechnicalDiving);
}