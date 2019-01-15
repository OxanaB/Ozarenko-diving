import * as React from 'react'
import { enableClient } from './client';
import { Slider } from './slider-component';

export class SpecialtyDiverNDL extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Специализированные курсы NDL</h1>
            <h2 id="Nitrox">Курс дайвинга Nitrox diver</h2>
            <p>Nitrox  – это газовая смесь, позволяющая продлить бездекомпрессионые пределы, которые необходимо соблюдать. При дыхании обогащенным воздухом во время погружения в Ваш организм поступает меньше азота и больше кислорода, чем при дыхнии обычным воздухом.</p>
            <p>Основное преимущество обогащенного воздуха в повышении безопасности погружения при соблюдении установленных пределов.</p>
            <p>После прохождения курса вы получите сертификат, который позволяет нырять на обогащенном воздухе с максимальным процентом содержания кислорода 40%.</p>
            <p>Курс Nitrox diver занимает один день, за который вы совершите два погружения на обогащенном воздухе и изучите особенности его использования. </p>
            <p>В стоимость включены учебные материалы, баллоны с обогащенным воздухом, трансфер из отеля. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <Slider images={sliderNitrox} width={500} height={640} />
            <div className="ndl-course-page-price"><p>550$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2 id="PPB">Курс дайвинга "Мастерское владение плавучестью" Professional bouyancy diver</h2>
            <p>Любой начинающий дайвер, после прохождения начальный курс обучения, сталкивается, как правило, с рядом проблем. Это ошибки в регулировке плавучести, усталость, неправильное положение тела под водой и, как следствие всего этого, быстрый расход воздуха. Любая подводная деятельность требует идеально-нейтральной плавучести, иначе она превращается из отдыха в тяжелый труд.</p>
            <p>Идеальная плавучесть Вам понадобиться также, если вы захотите заниматься под водой чем-то специализированным. Допустим, Вы хотите заняться подводной фото- или видеосъемкой, ориентированием, ночными  или глубоководными погружения и т.д.  Любой самый распрекрасный фотограф, не обладая идеальной плавучестью, не сможет сделать ни одной хорошей фотографии.</p>
            <p>Помимо комфорта под водой и экономии воздуха нейтральная плавучесть помогает аквалангисту сохранять после себя окружающую среду нетронутой.</p>
            <p>Курс "Мастерское владение плавучестью" проходит один день в условиях мелководья. С стоимость включены трансфер из отеля, учебные материалы, аренда снаряжения.  Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <a href="/diving-courses-ndl.html" className="ndl-courses-list-button">Вернуться назад к структуре курсов</a>
            <div className="ndl-course-page-price"><p>135$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2 id="Deep">Курс дайвинга Deep diver</h2>
            <Slider images={sliderDeep} width={640} height={500}/>
            <p>Глубоководные погружения всегда манили людей. Чем же так манит всех этих людей глубина? Ведь там темнее и холоднее?! На большей глубине сильнее расходуется воздух, что ограничивает время пребывания под водой. С увеличением глубины уменьшаются временные пределы пребывания под водой, поскольку усиливается насыщение тканей азотом. Все это правда. Но глубина все равно привлекает своей таинственностью. Так в чем же дело? В чем причины того, что люди совершают глубоководные погружения?</p>
            <ul>
                <li>На глубине живут совершенно другие морские обитатели, которых нет на мелководье.</li>
                <li>Большинство затонувших объектов находятся в глубоких местах. Корабли редко тонут прямо у берега. В основном это глубины более 10-15 метров.</li>
            </ul>
            <p>Что еще? Узнайте на курсе!</p>
            <p>Курс Deep diver длится 2 дня, включая 4 глубоких погружения и теорию.</p>
            <p>В стоимость включены учебные материалы,  трансфер из отеля. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>250$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2 id="DrySuit">Курс дайвинга в сухом костюме "Dry suit diver"</h2>
            <p>На Курс Dry Suit Diver NDL может быть принят дайвер имеющий сертификат Дайвера или его эквивалент. Использование гидрокостюма сухого типа или просто сухого гидрокостюма требует определенного умения и соответствующего тренинга. Теоретическая часть содержит информацию о назначении и особенностях устройства «сухого» костюма.</p>
            <p>Практическая часть содержит комплекс упражнений в водоёме, необходимых для получения навыков использования «сухого» костюма при погружении. По окончании курса выдаётся сертификат NDL Dry Suit Diver. </p>
            <p>Квалификация NDL Dry Suit Diver позволяет аквалангисту:</p>
            <ul><li>безопасно использовать «сухой» костюм при подводном плавании;</li>
                <li>сделать комфортным длительное пребывание в холодной воде.</li></ul>
            <p>Получить сертификат NDL Dry Suit Diver может любой практически здоровый человек, освоивший требуемые для данной квалификации навыки. Минимальное количество учебных погружений - 2.</p>
            <p>Для того, чтобы пройти курс вам необходимо иметь свой собственный сухой гидрокостюм. Рекомендации по покупке конкретной модели вы можете получить заранее в нашем клубе. В стоимость курса сухой гидрокостюм не включен. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <a href="/diving-courses-ndl.html" className="ndl-courses-list-button">Вернуться назад к структуре курсов</a>
            <div className="ndl-course-page-price"><p>230$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2 id="Night">Курс дайвинга Night diver</h2>
            <Slider images={sliderNight} width={500} height={640} />
            <p>Ночными погружениями считаются погружения, которые проводятся с наступлением темноты. Именно в темное время суток появляется возможность созерцать многих подводных обитателей, которые прячутся от своих врагов днем, а то и просто спят в своих «домах». В тропиках практически только ночью можно увидеть лобстеров, омаров, лангустов и креветок. Только ночью при свете фонаря можно наблюдать танго «испанского танцора».</p>
            <p>Свет фонаря не рассеивается и делает краски кораллов и рыб более яркими и насыщенными. Именно ночью некоторые рыбы подпускают к себе очень близко и это прекрасная возможность их сфотографировать, да и выглядят в свете фонаря они порой по-другому. Ночные погружения это возможность взглянуть на уже знакомые места по-другому и получить новые впечатления, которые будут просто незабываемы.</p>
            <p>Ночные погружения это путь повышения дайверского мастерства и продолжение этого бесконечного пути в познании подводного мира.</p>
            <p>На курс Night Diver NDL может поступить дайвер имеющий сертификацию Diver NDL или эквивалент. В курс включены три ночных погружения, аренда фонаря, учебные материалы,  трансфер из отеля. Сертификационный взнос в NDL оплачивается дополнительно и стоит 35$.</p>
            <div className="ndl-course-page-price"><p>215$</p></div>
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>


        </ div>
    }
}
const sliderNight: string[] = [
    '/images/courses/night-diver-ndl-1.jpg',
    '/images/courses/night-diver-ndl-2.jpg',
]
const sliderDeep: string[] = [
    '/images/courses/deep-diver-ndl-1.jpg',
    '/images/courses/deep-diver-ndl-2.jpg',
]
const sliderNitrox: string[] = [
    '/images/courses/nitrox-diver-ndl-1.jpg',
    '/images/courses/nitrox-diver-ndl-2.jpg',
    '/images/courses/nitrox-diver-ndl-3.jpg',
]

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(SpecialtyDiverNDL);
}