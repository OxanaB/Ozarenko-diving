import * as React from 'react'
import { enableClient } from './client';

export class NdlCourses extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Обучение дайвингу на курсах NDL</h1>
            <p>Национальная Дайв Лига (NDL) - это организация, разработавшая большое количество уникальных программ для обучения аквалангистов (дайверов) и фридайверов. Национальная Дайв Лига обладает разветвленной системой дайвинг клубов и школ дайвинга и фридайвинга проводящих обучение подводному плаванию во многих городах России, а также странах СНГ, Египте, Таиланде, Вьетнаме, на Мальдивских островах и других курортах планеты с последующей сертификацией. Здесь представлены цены на курсы обучения дайвингу от начального уровня и выше.  </p>
            <img title="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-ШейхеL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            
            <h2>С чего начать? Курсы дайвинга базового уровня</h2>
            <h2 className="ndl-course-title">Novice Diver NDL 235$</h2>
            <img src="" title="Курс обучения дайвингу Novice Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-novice-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>            
            
            <h2 className="ndl-course-title">Diver NDL 335$</h2>
            <img src="" title="Курс обучения дайвингу Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Открытая вода (Referral) 230$</h2>
            <p>Вы прошли половину начального курса обучения дома в бассейне. Теперь вам осталось сдать экзамены в открытой воде. На этом курсе вы сделаете 4 погружения в открытой воде на глубины до 18 метров. В стоимость курса включены работа русского инструктора, все необходимое оборудование, трансфер из отеля, использование учебных материалов. Сертификационный взнос в NDL составляет 35$</p>
            
            <h2 className="ndl-course-title">Junior diver NDL 335$</h2>
            <p>Ваш ребенок тоже может пройти обучение дайвингу и нырять со взрослыми наравне. Специально для детей от 10 до 14 лет разработан курс Junior Dvier NDL. Детки по младше (8 и 9 лет) могут учиться дайвингу на курсе Junior Novice diver.</p>
            <p><a href="/kids-diving.html" className="link-to-ndl-courses">Подробнее о детском дайвинге  </a></p>

            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2>Продолжение обучению дайвингу</h2>
            <p>Пройдя обучение на начальных курсах дайвинга, вы можете повышать свой уровень владения навыками подводного плавания на базовых курсах продвинутого дайвера Universal diver и Advanced universal diver, дайвера-спасателя, дайвмастера, а также получать опыт разнообразной подводной деятельности на специализованных курсах Deep diver, Nitrox diver, Night diver, Мастерское владение плавучестью и др.</p>
            <h2 className="ndl-course-title">Universal diver 260$</h2>
            <img src="" title="Курс обучения дайвингу Universal Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-universal-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Advanced universal diver 235$</h2>
            <img src="" title="Курс обучения дайвингу Advanced universal Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-advanced-universal-diver-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Cпасатель Rescue diver 335$</h2>
            <img src="" title="Курс обучения дайвингу Cпасатель Rescue diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-rescue-diver-and-medic-first-aid.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Medic First Aid 110$</h2>
            <img src="" title="Курс обучения дайвингу Medic First Aid NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-rescue-diver-and-medic-first-aid.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2 className="ndl-course-title">Deep diver 250$</h2>
            <img src="" title="Курс обучения дайвингу Deep Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Deep" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Nitrox Diver 135$</h2>
            <img src="" title="Курс обучения дайвингу Nitrox Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Nitrox" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Night diver 215$</h2>
            <img src="" title="Курс обучения дайвингу Night Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kursy-nitrox-night-deep-dry-suit.html#Night" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Dry siut diver 180$</h2>
            <img src="" title="Курс обучения дайвингу Dry siut Diver NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kursy-nitrox-night-deep-dry-suit.html#DrySuit" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <h2 className="ndl-course-title">Professional buoyancy diver 135$</h2>
            <img src="" title="Курс обучения дайвингу Professional buoyancy NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kursy-nitrox-night-deep-dry-suit.html#PPB" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>

            <h2>Первый профессиональный курс дайвинга</h2>
            <h2 className="ndl-course-title">Курс Дайвмастер - Divemaster NDL 650$</h2>
            <img src="" title="Курс Дайвмастер - Divemaster NDL" alt="Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе" />
            <p><a href="/kurs-divemaster-ndl.html" className="link-to-ndl-courses">Подробнее о курсе ---></a></p>
            
            <a href="/contact-us.html" className="book-button">ЗАБРОНИРОВАТЬ</a>
            
            <p>Следующей ступенью обучения дайвингу может стать так называемый технодайвинг или технический дайвинг. Во время технокурсов вы научитесь нырять в дублированном снаряжении, получите навыки качественного планирования погружений, что сможете всегда безопасно нырять даже без подводного компьютера, отработаете несколько способов гребка ластами, отточите мастерство зависания в толще воды, и самое главное - для вас откроются места недоступные в рекреационном дайвинге: глубокие каньоны, закрытые пещеры и каверны и многое другое.</p>
            <p>Технический дайвинг доступен каждому аквалангисту, достигшему начального уровня Diver NDL и их аналогов, и имеющего как минимум 10 погружений в условиях открытой воды.  </p>
            <p>Обучение техническому дайвингу начинается с теоретической подготовки и отработки навыков подводного плавания. Вам нужно будет научиться идеально контролировать свое тело на малых глубинах, рассчитывать план погружений, обращаться с новым оборудованием. На первом курсе технодайвинга максимальная глубина составляет 42 метра, следующие курсы технического дайвинга открывают более манящие глубины от 50 и до более 100 метров.</p>
            <p>Подробности о курсах технодайвинга опубликованы в разделе <a href="/technical-diving.html">"Технический дайвинг"</a>.</p>

        </ div>
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(NdlCourses);
}