import * as React from 'react';
import { enableClient } from './client';

export class IdcCourses extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Профессиональные курсы обучения инструкторов по дайвингу <a href="#IantdIdc">IANTD</a> и <a href="#NdlItc">NDL</a>. Курс-директор Виктор Озаренко</h1>
            <p>Станьте настоящим профессионалом в дайвинге! На инструкторских курсах по дайвингу с Виктором Озаренко вы научитесь быть профессионалом своего дела, отточите свои навыки подводного плавания и научитесь учить дайвингу любого человека. </p>
            <div className="wrapper">
                <div className="idc-iantd">
                    <div className="wrapper">
                        <img src="/images/logos/IANTD-logo.jpg" title="Курсы инструкторов по дайвингу IANTD от Виктора Озаренко" alt="инструкторские курсы, idc iantd, курсы инструкторов по дайвингу, инструкторские курсы IANTD, курс директор Виктор Озаренко, инструкторские курсы Одесса" />
                        <h2 id="IantdIdc">Инструкторские курсы по системе IANTD</h2>
                    </div>
                    <div>
                        <p>Путь в инструкторы по дайвингу IANTD начинается с обучения на IDC (Instructor Development Course) и сдаче инстуркторского экзамена IEC (Instructor Examination Course).</p>
                        <p>Обучение на курсе профессионалов дайвинга и сдача экзамена проводятся инструктором-тренером IANTD Виктором Озаренко в Шарм эль Шейхе. </p>
                        <p>Первые два уровня инструкторов IANTD позволяют готовить рекреационных дайверов, а также проводить курсы, считающиеся вступительными в технический дайвинг.</p>
                        <h3>Инструкторский курс Open water EANx Instructor.</h3>
                        <li>Минимальный возраст 18 лет, минимум 100 погружений, исходный уровень Divemaster IANTD или эквивалент других систем имеющий квалификацию Basic Nitrox Diver.</li>
                        <h3>Инструкторский курс Advanced EANx Instructor.</h3>
                        <li>Минимальный возраст 18 лет, минимум 100 погружений, исходный уровень Divemaster IANTD, или Open water EANx Instructor IANTD, а также Divemaster или Open water Instructor других систем обучения имеющиe квалификацию Advanced Nitrox Diver или эквивалент.</li>
                        <h3>Инструкторский курс Technical Instructor.</h3>
                        <li>Минимальный возраст 21 год, минимум 250 погружений. Должен иметь квалификацию инструктора IANTD уровня Advanced Nitrox с подтверждённым статусом или эвивалент, иметь дайверскую квалификацию IANTD Technical Diver или эквивалент</li>
                        <h3>Инструкторский курс Normoxic Trimix Instructor.</h3>
                        <li>Минимальный возраст 21 год, минимум 250 погружений. Должен иметь квалификацию инструктора IANTD уровня Advanced Nitrox с подтверждённым статусом или эвивалент, иметь дайверскую квалификацию IANTD Trimix Diver или эквивалент.</li>
                        <h3>Инструкторский курс Trimix Instructor.</h3>
                        <li>Инструктор IANTD уровня Trimix представляет собой высшую степень совершенства в овладении мастерством погружений на смесях в продвинутом дайвинге. Минимальный возраст 21 год. Должен представить доказательства не менее 500 зарегистрированных погружений.
                            <p>200 из которых совершались на глубины свыше 30 метров, и не менее 50 погружений на смесях Trimix.</p>
                            <p> Должен иметь квалификацию инструктора IANTD уровня Normoxic Trimix или эквивалент с подтверждённым статусом инструктора не менее 1 года.</p></li>
                    </div>
                    <a href="/contact-us.html" className="button center">ЗАБРОНИРОВАТЬ</a>
                </div>
                <div className="idc-ndl">
                    <div className="wrapper">
                        <img src="/images/logos/ndl_logo_black.jpg" title="Курсы инструкторов по дайвингу NDL от Виктора Озаренко" alt="инструкторские курсы, itc ndl, курсы инструкторов по дайвингу, инструкторские курсы NDL, курс директор Виктор Озаренко, инструкторские курсы Одесса" />
                        <h2 id="NdlItc">Инструкторский курс NDL (Instructor Training Course - ITC)</h2>
                    </div>
                    <div>
                        <p>На инструкторский курс принимаются ассистенты инструктора NDL, дайвмастеры NDL, и дайвмастеры или инструктора других международно-признанных сертифицирующих организаций. Кандидат должен быть не моложе 18-ти лет и иметь 60 зарегистрированных погружений.</p>
                        <p>ITC проводится в течении 10 дней инструктором 3 ранга Виктором Озаренко на базе дайвинг центра в Шарм эль Шейхе.</p>
                        <p>За это  время кандидатам проводятся лекции по философии NDL, дайв-индустрии, особенности маркетинга всех  NDL программ, стандарты и методика преподавания всех NDL курсов. Большое время отводится практическим занятиям. Таким как:</p>
                        <ul>
                            <li>Подготовка академических презентаций (подготовка и проведение лекций).</li>
                            <li>Организация и проведение занятий в воде по всем основным любительским курсам NDL.</li>
                            <li>Мастерское владение плавучестью.</li>
                        </ul>
                        <p>По окончании ITC проводится проверка теоретических знаний по курсу в виде теста. 100 вопросов по физике, физиологии, планированию погружений с использованием NDL таблиц, навыков и окружающей среде, а также по снаряжению по подводному плаванию. </p>
                        <p>Кандидаты, сдавшие экзамены с проходным суммарным количеством баллов ниже 4, имеют право обучать студентов по курсам Novice Diver NDL и Diver NDL.</p>
                        <p>Кандидаты, сдавшие экзамены с проходным суммарным количеством баллов 4 и выше, имеют право обучать студентов по всему спектру NDL программ.</p>
                    </div>
                    <a href="/contact-us.html" className="button center">ЗАБРОНИРОВАТЬ</a>
                </div>
            </div>
            <p>Еще одной ступенью в вашей карьере может стать так называемый технодайвинг или технический дайвинг. Во время технокурсов вы научитесь нырять в дублированном снаряжении, получите навыки качественного планирования погружений, отработаете новые способы гребка ластами, отточите мастерство зависания в толще воды, и самое главное - для вас откроются места недоступные в рекреационном дайвинге: глубокие каньоны, закрытые пещеры и каверны и многое другое.</p>
            <p>Технический дайвинг станет для вас новым этапом и полезным опытом в карьере инструктора. </p>
            <p>Обучение техническому дайвингу начинается с теоретической подготовки и отработки навыков подводного плавания. Вам нужно будет научиться идеально контролировать свое тело на малых глубинах, рассчитывать план погружений, обращаться с новым оборудованием. На первом курсе технодайвинга максимальная глубина составляет 42 метра, следующие курсы технического дайвинга открывают более манящие глубины от 50 и до более 100 метров.</p>
            <p>Подробности о курсах технодайвинга опубликованы в разделе <a href="/technical-diving.html">"Технический дайвинг"</a>.</p>
        </ div>;
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(IdcCourses);
}
