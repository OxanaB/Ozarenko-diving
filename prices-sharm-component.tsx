import * as React from 'react';
import { map } from './utils';
import { dailyDivingPrice, dailyExtrasPrise, dailyRentPrice } from './price-daily-sharm';
import { enableClient } from './client';

export class PriceSharm extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Цены на дайвинг в Шарм эль Шейхе</h1>
            <p>Дорогие любители дайвинга и подводного мира! На этой странице вы сможете узнать сколько стоит дайвинг в Шарме, аренда снаряжения, дайв-поездки на удаленные от Шарма места, технические погружения, а также курсы обучения дайвингу и индивидуальные программы.</p>
            <p>Цены на рекреационный дайвинг включают два дайва в день, 12-литровые баллоны с воздухом, грузы и грузовой пояс​, трансфер, услуги дайв-гида, обед и напитки на корабле.</p>
            <p>Дайвинг в Шарме организован таким образом, что каждый день дайверская яхта отправляется в море на рифы острова Тиран, в заповедник Рас Мухаммед или на локальные дайв-сайты (по расписанию). По желанию можно организовать поездку в Дахаб и на затонувшие корабли SS Thistlegorm, Dunraven, Million Hope. Услуги по дайвингу в Шарме организованы дружественным дайвинг-центром Scubadreamer Diving College, расположенным в отелях Мексикана и Роял Гранд Шарм (Хадаба).</p>
            <div className="wrapper-price-sharm">
                <div>
                    <h3>Доплата за дайв-поездки из Шарма и на затонувшие суда</h3>
                    {map(dailyExtrasPrise, (pricelist, index) => {
                        return <table className="price-simple" key={index}>
                            <tbody>
                                <tr>
                                    <td>{pricelist.position}</td>
                                    <td>{pricelist.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    })}
                </div>
                <div>

                    <h3>Дайвинг в Шарме</h3>
                    {map(dailyDivingPrice, (pricelist, index) => {
                        return <table className="price-simple" key={index}>
                            <tbody>
                                <tr>
                                    <td>{pricelist.position}</td>
                                    <td>{pricelist.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    })}
                </div>

                <div>

                    <h3>Аренда снаряжения</h3>
                    {map(dailyRentPrice, (pricelist, index) => {
                        return <table className="price-simple" key={index}>
                            <tbody>
                                <tr>
                                    <td>{pricelist.position}</td>
                                    <td>{pricelist.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    })}
                </div>
            </div>
            
            <h2>Технический дайвинг в Шарме</h2>
            <p>Уточняйте дополнительно возможность проведения технических погружений, а также их стоимость по телефону</p>
            <div className="price-sharm-courses">
                <h2>Курсы обучения дайвингу PADI / NDL</h2>
                <p>Scuba diver PADI / Novice diver NDL ....  по запросу</p>
                <p>Open water diver PADI / NDL ............  по запросу</p>
                <p>Referral OWD PADI / NDL ................  по запросу</p>
                <p>Advanced OWD PADI.......................  по запросу</p>
                <p>Universal diver NDL ....................  по запросу</p>
                <p>Nitrox diver PADI / NDL.................  по запросу</p>
                <p>Deep diver PADI / NDL...................  по запросу</p>
                <p>Dry suit diver PADI / NDL ..............  по запросу</p>
                <p>Rescue diver PADI / NDL ................  по запросу</p>
                <p>​EFR PADI / MFA NDL .....................  по запросу</p>
                <p>Divemaster PADI / NDL ..................  по запросу</p>
                <p>Sidemount  diver PADI ..................  по запросу</p>
                <p>Дополнительно оплачивается сертификационный взнос в PADI, либо NDL в размере 35€. </p>
            </div>
            <div className="price-sharm-tech-courses">
                <h2>Курсы технического дайвинга IANTD</h2>
                <p>IANTD Essentials .......................  по запросу</p>
                <p>Advanced Nitrox diver ..................  по запросу</p>
                <p>Advanced Nitrox и Deep diver ...........  по запросу</p>
                <p>Technical diver ........................  по запросу</p>
                <p>Normoxic trimix diver ..................  по запросу</p>
                <p>Trimix diver ...........................  по запросу</p>
                <p>Sidemount diver IANTD ..................  по запросу</p>
                <p>В стоимость всех курсов IANTD включены:  учебные материалы, работа инструктора, трансфер, газовые смеси EANx (максимальный % в каждом курсе разный), кислород, гелий, оборудование. Гелий входит в стоимость курсов Normoxic trimix diver и Trimix diver.</p>
                <p>Сертификат IANTD оплачивается дополнительно 60 евро</p>
            </div>
            <p> В стоимость курсов PADI не включены учебные материалы. Наличие учебника у каждого студента на курсах PADI обязательное требование обучающей организации. Стоимость учебников по курсам PADI варьируется от 20€ до 40€. Вы также имеете возможность пройти курсы любительского дайвинга по системе IANTD.
            Стоимость сертификации по этой системе 60 €. Сертификат в течение 3-4 дней можно получить на руки в Шарм эль Шейхе (доставка из Хургады). Индивидуальное обучение на любом курсе дайвинга дополнительно 50 евро день</p>
            <h2>Смотрите наше видео: дайвинг в заповеднике Рас Мухаммед (Шарк риф), курс open water diver у Виктора Озаренко</h2>

            <iframe className="video" src="https://www.youtube.com/embed/cJ_crX9Huy0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <p>дайвинг в заповеднике Рас Мухаммед (Шарк риф),</p>
            <iframe className="video" src="https://www.youtube.com/embed/CpO1yeCZULg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <p>курс open water diver у Виктора Озаренко</p>

            <h3>Что можно увидеть в водах Красного моря</h3>
            <p>По качеству и разнообразию кораллов, морской флоры и фауны Красному морю нет равных в Северном полушарии. Туристический бум, охвативший в последние годы египетское побережье Красного моря и Шарма, в значительной степени связан именно с уникальным и невероятно богатым подводным миром этого тропического моря, популяризацией подводного плавания. Протянувшиеся вдоль всего египетского побережья коралловые рифы являются своеобразным жизненным центром, привлекающим множество рыб. Поражает разнообразие форм кораллов, которые могут быть круглыми, плоскими, разветвлёнными, а также иметь другие фантастические формы и цветовую гамму — от нежно-жёлтого и розового до коричневого и синего. Но цвет сохраняют только живые кораллы, после смерти они теряют мягкие покровные ткани и остаётся только белый кальциевый скелет.</p>
            <p>В Красном море широко распространены бутылконосые дельфины, различные виды полосатого дельфина и косатки. Вполне возможна встреча под водой и с зелёной черепахой. Удивительные иглокожие удлинённой формы — морские огурцы — живут на морском дне, водятся акулы, они облюбовали для себя побережье Судана. Некоторые ихтиологи и дайверы утверждают, что нрав у акул довольно миролюбивый, и они крайне робки. Увидев людей, они стремятся поскорее ретироваться. Мурены, приспособленные к жизни на рифах, могут достигать 3 метров в длину и имеют довольно устрашающий вид. Но, в основном, если их не дразнить, они не опасны для человека. Здесь можно встретить и рыбу-наполеона, получившую своё название из-за характерного выступа на голове, который напоминает головной убор французского императора. Эти рыбы особенно многочисленны у южной оконечности Синайского полуострова. Отличаются яркой окраской рыбы-ангелы и рыбы-бабочки, рыбы-клоуны и султанки.</p>
            <p>Климат на побережье почти всего Красного моря — тропический пустынный, и лишь крайний север относится к средиземноморскому климату. Температура воздуха в самый холодный период (декабрь-январь) днем составляет 20—25 градусов, а в самый жаркий месяц — август, превышает 35—40 градусов и даже иногда доходит до 50 градусов. Благодаря жаркому климату у берегов Египта температура воды даже зимой не опускается ниже +20 градусов, а летом достигает +27 .</p>
            <p>Сильные испарения тёплой воды превратили Красное море в одно из самых солёных на земном шаре: 38—42 грамма солей на литр. Поэтому во время дайвинга в Красном море необходимо брать большее количество грузов. Если у вас есть проблемы с плавучестью, вы можете обратиться к опытным инструкторам нашего дайвинг клуба и пройти курс Мастерского владения плавучестью, и научиться правильно подбирать и распределять грузовую систему в любых условиях дайвинга.</p>
            <h3>Немного о Шарм эль Шейхе</h3>
            <p>Шарм эль Шейх - это небольшой курортный город, расположенный на южной оконечности Синайского полуострова на берегу Красного моря. Территориально Шарм эль Шейх делится на несколько районов: Sharm El Maya (Old Market), Hadaba, Ras Umm Sid, Hay El Nour, Roweysat, Tower, Naama Bay, Gardens Bay, Coral Bay, Sharks Bay, Ras Nasrani (Montaza), Nabq. На юге город граничит с национальным парком Рас Мухаммед, на севере — с заповедником Набк, с северо-запада и запада прикрыт от ветров грядой Синайских гор, а с юго-востока омывается Акабским заливом Красного моря. Среди других курортов Египта Шарм эль Шейх выделяется своим удачным расположением - тут практически не бывает сильных ветров (за исключением района Набк) и пыльных бурь.</p>
            <p>В Шарм эль Шейхе нет части, в которой проживает местное население и это его делает особенно привлекательным для туристов. С самого начала он строился как туристический центр с большим количеством отелей и соответствующей инфраструктурой. Практически все первоклассные системы отелей представлены здесь, кроме них можно найти большое количество небольших отелей рассчитанных на бюджетный отдых.</p>
            <p>Власти Египта уделяют особое внимание безопасности туристов отдыхающих на курорте - в город ведут всего две дороги, которые надежно прикрыты полицейскими постами. Даже во время революций 2011 и 2013 годов в городе сохранялась спокойная обстановка.</p>
            <h3>Дайвинг в Шарм эль Шейхе</h3>
            <p>Благодаря чистой воде, большому количеству рифов и богатому подводному миру Шарм эль Шейх является одним из самых излюбленных курортов в мире  для любителей дайвинга. В районе Шарм эль Шейха доступны порядка 40 дайв-сайтов. Ежедневные погружения проходят по следующим основным направлениям:</p>
            <p>Локальные дайв-сайты. Насчитывают 19 мест для дайвинга. Они, расположенные вдоль береговой линии Шарм эль Шейха. Здесь обычно нет сильных волн и течений, это идеальное место для обучения, пробных погружений и погружений первого дня. </p>
            <p>Остров Тиран. Насчитывает 6 мест для дайвинга. На большинстве этих сайтов бывают сильные течения и большие волны на внешней стороне рифов. Подходят для уверенных дайверов. В проливе о. Тиран находится Риф Джексон - одно из самых посещаемых и красивых мест в районе Шарм эль Шейха.</p>
            <p>Заповедник Рас Мухаммед. Насчитывает 10 мест для дайвинга. В Рас Мухаммеде можно найти места для погружений подходящие для дайверов любого уровня. Тут расположен один из самых красивых и известных в мире дайв-сайтов - "Шарк риф и Йоланда риф", тем не менее это место является одним из самых сложных в районе Шарм эль Шейха (рекомендуемый уровень AOWD).</p>
            <p>Пролив Губал. Известен затонувшими кораблями Dunraven и Thistlegorm. Эти рэки подходят для дайверов уровня AOWD и выше. Thistlegorm - Британское военное грузовое судно затонуло во время Второй Мировой войны. Этот рэк является одним из самых интересных, известных и посещаемых во всем мире.</p>
            <p>Текст из Википедии</p>
        </div>
    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(PriceSharm);
}