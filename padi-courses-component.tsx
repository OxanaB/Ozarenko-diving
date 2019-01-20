import * as React from 'react'
import { enableClient } from './client';

export class PadiCourses extends React.Component {
    render() {
        return <div className="page-container">
                <h1>Курсы обучения дайвингу PADI в Одессе и Шарм эль Шейхе</h1>
            <div className="image-align-right">
                <img id="padi-logo" src="/images/logos/PADI-logo-vertical.jpg" title="Курсы обучения дайвингу PADI в Одессе и Шарм эль Шейхе (Египет)" alt="обучение дайвингу Одесса, курсы дайвинга padi Одесса, обучение дайвингу padi, курсы дайвинга padi" />
                

                    <p>Вас манит мир подводных приключений, вам безумно нравятся коралловые рифы и вы хотите наблюдать за рыбками с расстояния вытянутой руки? Тогда вам стоить заняться дайвингом и пройти свой первый курс и получить удостоверение дайвера! Профессионализм и опыт наших инструкторов станут залогом вашего удовольствия и безопасности.</p>
                    <p>Начните с ознакомительной программы, если еще сомневаетесь, или сразу запишитесь на курс Open Water diver и вперед к новым открытиям!</p>
                    <p>В стоимость курсов PADI не включены учебные материалы. Наличие собственного учебника у каждого студента на курсах PADI обязательное требование обучающей организации. Стоимость учебника по каждому курсу PADI варьируется от 25$ до 45$. Сертификационный взнос в PADI оплачивается дополнительно и стоит 35$.</p>
                
            </div>
            <div className="padi-courses" >
                <div className="padi-course">
                    <h2 className="padi-courses-title">курс Open Water Diver</h2>
                    <p>Курс Open water diver  - это первая ступень обучения дайвингу. Во время курса вы научитесь самостоятельно обращаться с дайверским оборудованием, а также справляться со штаными и внештаными ситуациями под водой После окончания курса вы получите свой первый сертификат PADI, позволяющий погружаться в открытой воде на глубину до 18 метров</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">Referral open water diver</h2>
                    <p>Вы прошли половину курса open water diver у себя дома в бассейне и сдали все навыки работы с дайверским оборудованием. Теперь вам осталось сдать открытую воду и совержить 4 погружения в море на глубину до 18 метров. Шарм-эль-Шейх - самое лучше для этого место</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">курс Advanced Open Water Diver</h2>
                    <p>Вторая ступень обучения дайвингу - это курс Advanced open water diver. На этом курсе за время пяти погружений-приключений из серии Adventures in diving вы улучшите свои навыки подводного плавания, совершите глубокое погружение до 30 метров, потренируете свою плавучесть, научитесь ориентироваться вод водой, попробуете погружаться в темное время суток и многое другое</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">курс Emergency First Response</h2>
                    <p>Прохождение курса оказания первой медицинской помощи Emergency First Response (EFR) является обязательным требованием для зачисления на курс PADI Rescue Diver. Во время курса вы научитесь оказывать первую неотложную помощь, проводить сердечно- легочную реанимацию, останавливать кровотечения и многое другое. Курс теоретический</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">курс Rescue Diver</h2>
                    <p>Курс PADI Rescue Diver без сомнения можно считать самым напряженным, и самым полезным курсом дайвинга. Вы научитесь предотвращать возможные проблемы, которые могут случиться под водой или на поверхности воды, или, в случае возникновения подобных ситуаций, уметь правильно находить из них наилучший выход</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">курс Divemaster</h2>
                    <p>Вы решили стать профессионалом дайвинга! Этот курс не только дает вам возможность приобрести знания и опыт, но и помогает развить качества и умения, необходимые потенциальному инструктору. За время курса вы будете ассистировать инструктору в проведении курсов дайвинга, научитесь водить подводные экскурсии и многое другое. Регистрационные взносы PADI и учебные материалы оплачиваются дополнительно </p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">спецкурс Nitrox Diver</h2>
                    <p>Специальный курс Nitrox diver расскажет вам о преимуществах погружений на газовых смесях с большим содержанием кислорода и меньшим содержанием азота. Вы узнате об опасностях тающихся в использовании других газовых смесей и возможных реакциях организма. Во время курса вы сделаете два погружения на обогащенном воздухе </p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">спецкурс Sidemount Diver</h2>
                    <p>Курс Сайдмаунт даст вам навыки и опыт работы в конфигурации с боковым расположением баллонов. Курс занимает два дня и включает в себя 2 учебных погружения в закрытой воде и два тренировочных погружения открытой воде, возможно и на затонувший корабль. В стоимость курса аренда сайдмаунта Xdeep. Подробное описание курса находится в разделе <a href="/sidemount.html">технического дайвинга</a></p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">спецкурс Deep Diver</h2>
                    <p>На курсе Deep diver вы научитесь совершать бездекомпрессионные погружения на глубину до 40 метров. Вы совершите 4 глубоких погружения и выполните несколько упражнений</p>
                </div>
                <div className="padi-course">
                    <h2 className="padi-courses-title">спецкурс DPV diver (скутер)</h2>
                    <p>Курс DPV diver или водитель подводного скутера (буксировщика) - ваше самое захватывающие подводное приключение. Почувствуйте скорость под водой, забудьте про течения, усталость и большой расход воздуха. Дайвинг со скутером - незабываемое удовольствие! В стоимость включены аренда подводного скутера, работа инструктора.</p>
                </div>
            </div>
            <div className="center-page">
            <a href="/contact-us.html" className="button-go-to-page center">ЗАБРОНИРОВАТЬ</a>
            </div>

            <p>Следующей ступенью обучения дайвингу может стать так называемый технодайвинг или технический дайвинг. Во время технокурсов вы научитесь нырять в дублированном снаряжении, получите навыки качественного планирования погружений, что сможете всегда безопасно нырять даже без подводного компьютера, отработаете несколько способов гребка ластами, отточите мастерство зависания в толще воды, и самое главное - для вас откроются места недоступные в рекреационном дайвинге: глубокие каньоны, закрытые пещеры и каверны и многое другое.</p>
            <p>Технический дайвинг доступен каждому аквалангисту, достигшему начального уровня Diver NDL и их аналогов, и имеющего как минимум 10 погружений в условиях открытой воды.  </p>
            <p>Обучение техническому дайвингу начинается с теоретической подготовки и отработки навыков подводного плавания. Вам нужно будет научиться идеально контролировать свое тело на малых глубинах, рассчитывать план погружений, обращаться с новым оборудованием. На первом курсе технодайвинга максимальная глубина составляет 42 метра, следующие курсы технического дайвинга открывают более манящие глубины от 50 и до более 100 метров.</p>
            <p>Подробности о курсах технодайвинга опубликованы в разделе <a href="/technical-diving.html">"Технический дайвинг"</a>.</p>

        </ div>
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(PadiCourses);
}