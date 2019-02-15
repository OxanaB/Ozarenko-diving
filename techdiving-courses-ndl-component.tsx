import * as React from 'react';
import { enableClient } from './client';

export class TechdivingCoursesNdl extends React.Component {
        render() {
                return <div className="page-container">
                        <h1>Технический дивизон National Dive League (NDL)</h1>
                        <div className="image-align-right">
                        <img id="logo-ndl" src="/images/logos/ndl-tek-logo-red.jpg" alt="Технический дивизон NDL. Курсы технического дайвинга в Одессе" />
                        <p>Технический дивизион NDL - это авторская программа обучения техническому дайвингу , созданная курс-директором NDL
                            Виктором Озарено на основе 37-летнего опыта профессионального дайвинга в различных конфигурациях и условиях
                            погружений. Он собрал воедино все самое лучшее, чему научился в различных системах, и создал собственную систему
                            обучения техническому дайвингу, которая доступна всем желающим, и учит правильному и безопасному техническому дайвингу.</p>
                        <p>Программы обучения и курсы технического дайвинга Технического дивизона NDL предназначены для углубления знаний и
                            улучшения навыков в области дайвинга и повышения мастерства. Основой безопасного дайвинга является крепкий
                            фундамент, на котором стоит Пирамида, состоящая из качественного Образования, исправного Оборудования и многогранного Опыта - эта ключевая фраза пронизывает всю линейку курсов.</p>
                        <p>Все курсы при желании могут проводиться в конфигурациях бекмаунт и <a href="/sidemount.html">сайдмаунт</a></p>
                        </div>
                        <div className="courses">
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>
                                                                <h2>Интро-ТЕК</h2>
                                                        </td>
                                                        <td>
                                                                <h2>100$</h2>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>
                                <div>

                                        <img src="/images/technical-diving/ndl/intro-to-tech.jpg" alt="Забронировать программу обучения техническому дайвингу" />
                                        <p> Программа рассчитана на сертифицированных дайверов любого уровня подготовки (старше 14 лет). Занятие проводятся с комплектом
                                                снаряжения, в котором дайвер, совершает любительские погружения. В комплекте для подводного плавания заменяется только SCUBA (спарка с монифолдом, 2Х12 литров). </p>
                                        <p> Цель программы: дать дайверу понять преимущество плавания в Спарке и освоить начальные навыки плавания в «Спарке», а также проверить готовность к началу обучения на курсе «ТЕК-Спорт». </p>
                                        <p> Дайв проводится в условиях «Закрытой воды», максимальная глубина 6 метров. Время 30-60 минут. </p>
                                </div>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>

                                                                <h2>TЕК-Спорт</h2>
                                                        </td>
                                                        <td>
                                                                <h2>450$</h2>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>

                                <div>

                                        <img src="/images/technical-diving/ndl/tech-sport.jpg" alt="Забронировать курс начального обучения техническому дайвингу" />
                                        <p> Обязательная программа, включающая в себя все базовые навыки плавания в технической конфигурации и обязательные дайв процедуры. Учебные погружения по отработке навыков выполняются на глубинах до 12 метров. </p>
                                        <p> На курс может записаться любой сертифицированный дайвер любой обучающей системы не ниже сертификации «Дайвер» или его аналога (с 14 лет), желающий получить базовые навыки технических курсов. </p>
                                        <p> За время курса дайверы получают понятия и терминологию технического дайвинга, дайв-протокол перед погружением, действия во время погружения, сценарий при проведении «декомпрессионных» погружений, действия при аварийных ситуациях, помощь и самоспасение. </p>
                                </div>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>
                                                                <h2>TЕК-1</h2>
                                                        </td>
                                                        <td>
                                                                <h2>570$</h2>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>

                                <div>

                                        <img src="/images/technical-diving/ndl/tech-1.jpg" alt="Забронировать курс обучения продвинутого найтрокса технического дивизиона NDL" />
                                        <p> Курс продвинутого найтрокса и декомпрессионных процедур. В рамках курса дайверы изучают техническую конфигурацию снаряжения, обязательное к использованию дополнительное оборудование, оттачивают навыки и технику подводного плавания, полученные на курсе "ТЕК-Спорт", отрабатывают стрессоустойчивость, навыки само- и взаимоспасения,                                    планирование декомпрессионных погружений с общим временем декомпрессии не более 15 минут, использование одного этапного баллона, работу в команде, получают основы газ-блендинга найтроксных смесей. </p>
                                        <p> Для зачисления на курс дайверу необходимо иметь сертификат "ТЕК-Спорт" и не менее 30 зарегистрированных погружений в открытой воде на глубину до 30 метров.</p>
                                        <p> Погружения осуществляются в рамках курса до 42 м, по окончании курса студент может планировать и осуществлять погружения в технической конфигурации снаряжения в составе команды (напарника) на глубину до 45 метров. </p>
                                </div>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>
                                                                <h2>TЕК-2</h2>

                                                        </td>
                                                        <td>
                                                                <h2>1100$</h2>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>

                                <div>

                                        <img src="/images/technical-diving/ndl/tech-2.jpg" alt="Забронировать курс обучения техническому дайвингу второго уровня" />
                                        <p> Курс ТЕК-2 подразумевает использование во время погружений донной газовой смеси тримикс (Tx20/35) с содержанием кислорода не менее 20%, что значительно увеличивает безопасность и комфорт погружений. </p>
                                        <p> В рамках курса студенты досконально изучают техническую конфигурацию снаряжения, грамотное дублирование снаряжения и дополнительного оборудования, использование двух этапных баллонов. Изучают методику планирования погружений по таблицам и с использованием компьютерных программ, получают основы газ-блендинга смесей из трех компонентов (тримикс). При отработке погружений в закрытой воде отрабатывается стрессоустойчивость, моделируются реальные опасности и способы их решения. Навыки и знания, полученные на курсе, подтверждаются в зачетных погружениях в условиях открытой воды. </p>
                                        <p> Для зачисления на курс дайверу необходимо иметь сертификат "ТЕК-1" и не менее 100 зарегистрированных погружений, из которых не менее 20 осуществлялось на глубину до 30 от 45 метров. </p>
                                        <p> Погружения осуществляются на глубины до 60 метров, общее время дайва до 120 минут. В рамках курса предусмотрены два обязательных погружения на тримиксе, стоимость газов включена в курс. Аренда снаряжения оплачивается отдельно. </p>
                                </div>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>
                                                                <h2>TЕК-3</h2>

                                                        </td>
                                                        <td>
                                                                <h2>1500$</h2>
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>

                                <div>
                                        <img src="/images/technical-diving/ndl/tech-3.jpg" alt="Забронировать курс обучения техническому дайвингу продвинутого уровня" />
                                        <p> В рамках программы ТЕК-3 тримиксные дайверы: </p>
                                        <ul>
                                                <li> - получают углубленные знания в планировании погружений на гипоскическом тримиксе процентное содержание кислорода мение 18%,</li>
                                                <li> - оттачивают технику подводного плавания и использования оборудования,</li>
                                                <li> - получают начальные навыки экспедиционной работы и подводных исследований,</li>
                                                <li> - планируют и осуществляют погружение на глубины до 90 метров в рамках курса с использованием трех этапных баллонов с EANx и донным газом Tx 14/50.</li>
                                        </ul>
                                        <p>Для зачисления на курс дайверу необходимо иметь сертификат "ТЕК-2" и не менее 200 зарегистрированных погружений, из которых не менее 30 осуществлялось на глубину до 40 от 60 метров.</p>
                                        <p>По окончании курса дайверы могут осуществлять и планировать погружения до 100 метров.</p>
                                        <p>Сертификат и газы включены в курс. Аренда оборудования оплачивается отдельно.</p>
                                </div>
                                <div>
                                        <h2>Технический дивизион NDL. Факты</h2>
                                        <p> Технический дивизион NDL -это авторская программа обучения техническому дайвингу, созданная курс-директором NDL Виктором Озарено на основе 37-летнего опыта профессионального дайвинга в различных конфигурациях и условиях погружений. </p>
                                        <p>Технический дивизион NDL делится опытом в методике и технике погружений со всеми дайверами, заинтересованными в повышении своего уровня. Программы обучения и курсы технического дайвинга технического дивизона NDL предназначены для углубления знаний и улучшения навыков в области дайвинга и повышения мастерства. Основой безопасного дайвинга является крепкий фундамент, на котором стоит Пирамида, состоящая из качественного Образования, исправного Оборудования и многогранного Опыта - это ключевая фраза пронизывает всю линейку курсов.</p>
                                        <p>Обучение техническому дайвингу по системе NDL проводится на базе дайвинг центра в Шарм эль Шейхе и доступно каждому аквалангисту уровня open water diver, имеющему 10 погружений. Первые занятия можно проходить в стандартной однобалонной конфигурации, но с двумя вентилями.</p>
                                        <p>Проверить свою готовность к техническому дайвингу предлагается в программе "ТЕК-Спорт", которая проводится в условиях закрытой воды на глубине до 6 метров. В процессе программы дайвер узнает и получает новый опыт плавания в дублированной системе.</p>
                                        <p>Следующие программы технического дивизиона NDL углубляют знания и навыки подводного плавания в технической конфигурации, открывают все новые глубины, добавляются стейджевые баллоны и меняются газовые смеси.</p>
                                        <p>Курсы технического дайвинга по авторской программе проводит курс-директор NDL, Master IDC Tech Instructor<a href="/about-viktor-ozarenko"> Виктор Озаренко</a>. </p>
                                </div>
                        </div>
                </ div>;
        }
}

declare var window: any;
if (typeof window !== 'undefined') {
        enableClient(TechdivingCoursesNdl);
}
