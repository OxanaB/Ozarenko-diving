import * as React from 'react'
import { enableClient } from './client';

export class NdlCourses extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Обучение дайвингу на курсах NDL</h1>
            <div className="image-align-right">
                <p>Национальная Дайв Лига (NDL) - это организация, разработавшая большое количество уникальных программ для обучения аквалангистов (дайверов) и фридайверов. Национальная Дайв Лига обладает разветвленной системой дайвинг клубов и школ дайвинга и фридайвинга проводящих обучение подводному плаванию во многих городах России, а также странах СНГ, Египте, Таиланде, Вьетнаме, на Мальдивских островах и других курортах планеты с последующей сертификацией. Здесь представлены цены на курсы обучения дайвингу от начального уровня и выше.  </p>
                <img id="logo-ndl" src="/images/logos/ndl_logo_black.jpg" title="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-ШейхеL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            </div>

            <h2 className="center">С чего начать? Курсы дайвинга базового уровня</h2>

            <div className="ndl-courses">
                <div className="ndl-course">
                    <h2>Novice Diver NDL 235$</h2>
                    <img className="ndl-card" src="/images/courses/card-novice-diver-ndl.jpg" title="Курс обучения дайвингу Novice Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-novice-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>
                <div className="ndl-course">
                    <h2>Diver NDL 335$</h2>
                    <img className="ndl-card" src="/images/courses/card-diver-ndl.jpg" title="Курс обучения дайвингу Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Открытая вода (Referral) 230$</h2>
                    <p>Вы прошли половину начального курса обучения дома в бассейне. Теперь вам осталось сдать экзамены в открытой воде. На этом курсе вы сделаете 4 погружения в открытой воде на глубины до 18 метров. В стоимость курса включены работа русского инструктора, все необходимое оборудование, трансфер из отеля, использование учебных материалов. Сертификационный взнос в NDL составляет 35$</p>
                </div>

                <div className="ndl-course">
                    <h2>Junior diver NDL 335$</h2>
                    <p>Ваш ребенок тоже может пройти обучение дайвингу и нырять со взрослыми наравне. Специально для детей от 10 до 14 лет разработан курс Junior Dvier NDL. Детки по младше (8 и 9 лет) могут учиться дайвингу на курсе Junior Novice diver.</p>
                    <p><a href="/kids-diving.html" className="link-to-ndl-courses">Подробнее о детском дайвинге  </a></p>
                </div>
            </div>
            <div className="center-page">
            <a href="/contact-us.html" className="button-go-to-page center">ЗАБРОНИРОВАТЬ</a>
            </div>

            <h2 className="center">Продолжение обучению дайвингу</h2>
            <p>Пройдя обучение на начальных курсах дайвинга, вы можете повышать свой уровень владения навыками подводного плавания на базовых курсах продвинутого дайвера Universal diver и Advanced universal diver, дайвера-спасателя, дайвмастера, а также получать опыт разнообразной подводной деятельности на специализованных курсах Deep diver, Nitrox diver, Night diver, Мастерское владение плавучестью и др.</p>


            <div className="ndl-courses">
                <div className="ndl-course">
                    <h2>Universal diver 260$</h2>
                    <img className="ndl-card" src="/images/courses/card-universal-diver-ndl.jpg" title="Курс обучения дайвингу Universal Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-universal-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Advanced universal diver 235$</h2>
                    <img className="ndl-card" src="/images/courses/card-advanced-universal-diver-ndl.png" title="Курс обучения дайвингу Advanced universal Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-advanced-universal-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Cпасатель Rescue diver 335$</h2>
                    <img className="ndl-card" src="/images/courses/card-rescue-diver-ndl.jpg" title="Курс обучения дайвингу Cпасатель Rescue diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-rescue-diver-and-medic-first-aid.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Medic First Aid 110$</h2>
                    <img className="ndl-card" src="/images/courses/card-mfa-ndl.jpg" title="Курс обучения дайвингу Medic First Aid NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-rescue-diver-and-medic-first-aid.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>
            </div>
            <div className="center-page">
            <a href="/contact-us.html" className="button-go-to-page center">ЗАБРОНИРОВАТЬ</a>
            </div>

            <div className="ndl-courses">
                <div className="ndl-course">
                    <h2>Deep diver 250$</h2>
                    <img className="ndl-card" src="/images/courses/card-deep-diver-ndl.jpg" title="Курс обучения дайвингу Deep Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Deep" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Nitrox Diver 135$</h2>
                    <img className="ndl-card" src="/images/courses/card-nitrox-diver-ndl.jpg" title="Курс обучения дайвингу Nitrox Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Nitrox" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Night diver 215$</h2>
                    <img className="ndl-card" src="/images/courses/card-night-diver-ndl.jpg" title="Курс обучения дайвингу Night Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Night" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>

                <div className="ndl-course">
                    <h2>Dry siut diver 180$</h2>
                    <img className="ndl-card" src="/images/courses/card-drysuit-diver-ndl.jpg" title="Курс обучения дайвингу Dry siut Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kursy-nitrox-night-deep-dry-suit.html#DrySuit" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>
                       
                <div className="ndl-course">
                    <h2>Professional buoyancy diver 135$</h2>
                    <img className="ndl-card" src="/images/courses/card-professional-bouyancy-diver-ndl.jpg" title="Курс обучения дайвингу Professional buoyancy NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kursy-nitrox-night-deep-dry-suit.html#PPB" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>


                <div className="ndl-course">
                    <h2>Курс Дайвмастер - Divemaster NDL 650$</h2>
                    <img className="ndl-card" src="/images/courses/card-divemaster-ndl.jpg" title="Курс Дайвмастер - Divemaster NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
                    <p><a href="/kurs-divemaster-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
                </div>
            
            </div>
            <div className="center-page">
                <a href="/contact-us.html" className="button-go-to-page center">ЗАБРОНИРОВАТЬ</a>
            </div>

            <p>Следующей ступенью обучения дайвингу может стать так называемый технодайвинг или технический дайвинг. Во время технокурсов вы научитесь нырять в дублированном снаряжении, получите навыки качественного планирования погружений, что сможете всегда безопасно нырять даже без подводного компьютера, отработаете несколько способов гребка ластами, отточите мастерство зависания в толще воды, и самое главное - для вас откроются места недоступные в рекреационном дайвинге: глубокие каньоны, закрытые пещеры и каверны и многое другое.</p>
            <p>Технический дайвинг доступен каждому аквалангисту, достигшему начального уровня Diver NDL и их аналогов, и имеющего как минимум 10 погружений в условиях открытой воды.  </p>
            <p>Обучение техническому дайвингу начинается с теоретической подготовки и отработки навыков подводного плавания. Вам нужно будет научиться идеально контролировать свое тело на малых глубинах, рассчитывать план погружений, обращаться с новым оборудованием. На первом курсе технодайвинга максимальная глубина составляет 42 метра, следующие курсы технического дайвинга открывают более манящие глубины от 50 и до более 100 метров.</p>
            <p>Подробности о курсах технодайвинга опубликованы в разделе <a href="/technical-diving.html">"Технический дайвинг"</a>.</p>

        </ div >
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(NdlCourses);
}