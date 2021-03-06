import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';

export class LastSafari extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Дайвинг сафари с 17 по 24 ноября 2018 года "Затонувшие корабли севера Красного моря" </h1>
            <p>Команда клуба "Искатели морских сокровищ" и плавучая гостиница яхта "Брина 1" приглашают вас на дайвинг сафари по северным рэкам Красного моря с 17 по 24 ноября 2018 года. В программе шести полноценных дней дайвинга: погружения на рифах заповедника Ras Mohammed, затонувших кораблях Dunraven, SS Thistlegorm, Chrisoula K, Carnatic, Giannis D, Ulysees, Kingston, Million Hope, рифах острова Тиран, а также пять ночных погружений. Присоединяйтесь!
    Минимально необходимый уровень подготовки: Scuba diver / Referral  OWD / Open water diver. Поднять свой уровень до Advanced open water diver можно и нужно непосредственно на корабле, причем желательно это успеть сделать до начала сложных погружений.
Кроме того, на прохождение курсов и специализаций PADI /  IANTD действует скидка 30 % от обычной цены. </p>
            <div className="wrapper-two-columns">
                <Slider images={sliderBrina} className={'safariboat'} />
                <div className="description">
                    <h2>Цена 715 евро!</h2>
                    <p>не включая перелет</p>
                    <p>Найтрокс: 70 € за неделю (12-шка), 100 € (15-шка), 5 € одна заправка</p>
                    <p>Прокат оборудования - 25€ в день</p>
                    <p>15 L баллон - 40€ неделя</p>
                    <p>Страховка  - 40€ неделя</p>
                    <p>Чаевые команде - 50€ (обязательно)</p>
                    <p>Чаевые гидам - от 35€ (по желанию</p>
                </div>
            </div>
            <h2>ОПЛАТА И ОТМЕНА</h2>
            <p>Бронирование: предоплата за сафари - 500 евро (предоплата не возвращается только замена другим человеком). Оставшиеся 215 евро и доплаты за дополнительные услуги вносятся непосредственно на корабле в начале сафари. В случае бронирования менее чем за месяц до начала сафари вносится полная стоимость</p>
            <h2>Маршрут дайв сафари </h2>
            <p>Сафари начинается и заканчивается в Шарм-эль-Шейхе.</p>
            <p>Этот маршрут предоставляет собой комбинацию рифового дайвинга и wreck дайвинга.</p>
            <p>День 1. Прибытие в Шарм, встреча в аэропорту  и трансфер в порт, check-in. Приветственный брифинг и ужин. Ночевка в порту на яхте.</p>
            <p>День 2. Чек дайв на Ras Katy (Temple), один-два дайва в заповеднике Ras Mohammed, переход через пролив Губал до рифа Shaab Abu Nuhas, ночной дайв.</p>
            <p>День 3. Рэки рифа Shaab Abu Nuhas - утренний и дневные дайвы. Ночной дайв и ночевка на Gubal Island.</p>
            <p>День 4. SS Thistlegorm wreck - 2-3 дайва. Ночной дайв и ночевка на Shaab Mahmoud.</p>
            <p>День 5. Ras Mohammed National Park - 2 погружения. Dunraven wreck, или Shag Rock (Kingston wreck). Ночной дайв и ночевка на Тиране</p>
            <p>День 6. Рифы острова Тиран, поиск хаммерхедов на Jackson outside, рэк Million Hope</p>
            <p>День 7. Шарм-эль-Шейх: дайвы на локальных сайтах. Ночевка на Temple.</p>
            <p>День 8. Check-out. Трансфер в аэропорт или отель.</p>
            <p>Программа сафари зависит от погодных условий и уровня аквалангистов. Окончательное решение по конкретному дайву принимают капитан и главный гид корабля. </p>
            <p>Сафари рекреационное. </p>
            <iframe className="video" src="https://www.youtube.com/embed/Z2BZCj95DUU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <iframe className="video" src="https://www.youtube.com/embed/aXIA4NdrMeI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
            <p>Во время сафари вам пригодятся персональный дайв-компьютер, буй с катушкой (на бадди-пару) и подводный фонарик (для ночных дайвов и при проникновении в затонувшие корабли).</p>
            <p>На яхте 10 кают. 6 кают TWIN (c двумя одноместными кроватями), 1 каюта DBL (с двухместной кроватью) на нижней палубе, 1 каюта  DBL (с двухместной кроватью) на средней палубе, 2  семейные каюты  (с кроватями queen-size ) на верхней палубе. В каждой каюте есть ванная комната (туалет, душ), кондиционер, LCD, DVD.</p>
            <p>Спать можно и на верней палубе под звёздами.</p>
            <p>Питание - полный пансион (3 раза в день + безалкогольные напитки + ежедневные коктейли и соки + прощальный ужин от команды). Трансфер из / в аэропорт включен в стоимость сафари.</p>
            <p>Авиа перелет бронируется отдельно.</p>



            <div className="wrapper-div-image">
                <p>Подробнее о затонувших кораблях на нашем маршруте:</p>
                <h3>Данрэйвен (Dunraven)</h3>
                <img className="img-left" src="/images/liveaboard/wreck-dunraven.jpg" title="wreck Данрэйвен (Dunraven)" alt="wreck Данрэйвен (Dunraven) Шарм-эль-Шейх" />
                <p>Риф Sha'ab Mahmoud, у скалы Beacon Rock, в 6,9 милях к западу от Ras Mohammed. Это небольшой, но очень красивый риф, с маленьким маяком. В 1876 году здесь потерпел крушение и затонул Британский торговый пароход "Dunraven", направлявшийся в Бомбей.</p>
                <p>"Dunraven " (длина 80 м, ширина 10 м) был построен в 1873 году в Ньюкастле, а в 1876 году натолкнулся на риф и затонул. Груз (древесина и рулоны хлопка) сгорели во время пожара, возникшего при кораблекрушении. Так он и лежит, перевернутый, расколотый надвое, весь обросший кораллами и заселенный рыбками, на глубине от 18 до 30 метров. А найдено это судно было только в 1977 году.</p>
                <p>Основная интрига состоит в том, что полностью восстановить картину крушения и даже точно идентифицировать корабль пока никому не удалось. В 1977 году геолого-разведывательное судно одной из нефтяных корпораций обнаружило останки неизвестного корабля. Обследование объекта группой дайверов не дало результатов, и лишь через некоторое время, когда удалось поднять со дна фарфоровые тарелки с надписью Dunraven, появилась возможность узнать, что это было за судно. Однако, как выяснилось, под именем Dunraven ходили сразу два корабля.</p>
                <p>Один из них был построен в 1890 году и затонул в водах Атлантики в 1917г. Второй, хотя и числился британским торговым судном, был оснащен военной техникой для обнаружения и уничтожения подводных лодок. Во время Первой мировой войны он затонул, после чего все документы, содержащие информацию о нем, были фальсифицированы или уничтожены из соображений секретности.</p>
                <p>Временами казалось, что тайна гибели корабля в Красном море так никогда и не будет раскрыта — появлялись новые, все более и более фантастические версии, ничуть не приближавшие к правде. Но однажды, во время очередного осмотра трюма судна, были обнаружены необычные бутылки из-под содовой с надписью, упоминающей королеву Викторию. Удалось выяснить, что такие бутылки из толстого зеленого стекла выпускались в Британии только с 1836 по 1880 год. Вскоре было установлено, что корабль затонул в период с 1873 по 1880 год. Наконец, в Ньюкастле обнаружили архивный документ с подробным описанием судна Dunraven и обстоятельств его гибели, что позволило поставить точку в этой запутанной истории.</p>
                <h3>Риф Шааб Абу Нухас (Abu Nuhas)</h3>
                <img className="img-left" src="/images/liveaboard/wreck-shaab-abu-nuhas.jpg" title="Рэки рифа Шааб Абу Нухас (Abu Nuhas)" alt="Рэки рифа Шааб Абу Нухас (Abu Nuhas): Крисоула К (Chrisoula K) или Маркус (Marcus), Кимон М (Kimon M), Карнатик (Carnatic), Джанис Ди (Ghiannis D) " />
                <p>Риф Шааб Абу Нухас (Abu Nuhas) является самым удаленным из всех рифов восточной части пролива Губал. Учитывая расположение самого рифа и проходящий мимо него главный судовой путь, становится ясным, почему Абу Нухас (Abu Nuhas) получил печально известную репутацию "кладбища кораблей". Здесь покоятся 7 различных кораблей, 3 из которых почти разрушены. Остальные же 4 судна - Kimon M., Chrisoula K., Carnatic, Giannis D. - поражают своим хорошим состоянием.</p>

                <h3>Крисоула К (Chrisoula K) или Маркус (Marcus) </h3>
                <img className="img-right" src="/images/liveaboard/wreck-chrisoula-k.jpg" title="wreck Крисоула К (Chrisoula K) или Маркус (Marcus)" alt="wreck Крисоула К (Chrisoula K) или Маркус (Marcus)" />
                <p>В северной части рифа Абу Нухас (Abu Nuhas) на глубине 18-25м находится затонувшее судно. Оно идентифицируется как германское грузовое судно Крисула К (Chrisoula K), потерпевшее крушение в 1981 году. Морской гигант был спущен на воду в 1954 г. под именем «Dora Oldendorf», которое в 1970 г. было переименовано на «Anna B.», а уже в 1979г. корабль получил своё окончательное название «Chrisoula К».</p>
                <p>В августе 1981 года, судно направлялось в Саудовскую Аравию, когда на полном ходу налетело на печально известный риф Абу Нухас. Столкновение было достаточно сильным. Оно вызвало искривлению юта, который вместе с винтом опустился на глубину 27 метров. При этом остальная часть (практически не тронутая) затонула на песчаном дне на глубине всего 4 метров. На борту была плитка, которая сейчас хаотично разбросана на месте аварии. Нос корабля полностью разбит.</p>
                <p>Очень хорошо сохранились кормовые надстройки, винт и штурвал, двигательный отсек, клюз с якорной цепью. Трюм поражает своими размерами, и создаётся ощущение, что Вы находитесь в заполненном водой спортивном зале. Погружения во внутренние части корабля тоже заслуживают внимания дайверов. На камбузе можно увидеть открытую электрическую плиту, в каютах найти ванные комнаты со всеми их составляющими, а в мастерской машинного отделения потренироваться в опознании различных инструментов, находящихся в шкафах и разбросанных на полу.</p>
                <p>Стоит также отметить, что видимость здесь практически идеальная. Постоянное переменное течение усносит прочь взвесь и планктон, поэтому для любителей подводной фотосъёмки это поистине находка! Совет: некоторые внутренние отсеки корабля достаточно узки, а некоторые просто завалены различным хламом, что требует определённой сноровки при продвижении из каюты в каюту.</p>
                <p>Разнообразные корабельные обломки, которые находятся в месте кораблекрушения Крисоула К (Chrisoula K), дают основание предполагать, что в этом месте затонуло еще одно судно. И груз бронзы также может принадлежать кораблю, имя которого до сих пор неизвестно.</p>
                <p>Однако то ли это судно на самом деле? Скорее всего нет. Такое утверждение помогает сделать серийный номер двигателя. А он то и указывает на то, что речь идет о грузовом корабле Германии Маркус (Marcus), который затонул в этом же месте, но несколькими годами раньше. Он тоже направлялся в Саудовскую Аравию, когда в 1978г. по причине сильного шторма и проблем со штурвалом, натолкнулся на риф. Что же послужило причиной ложного утверждения? Во первых, в течении нескольких лет корпус Крисулы К находился над водой, прочно стоя на рифе. Когда же он опустился на дно, не было никаких сомнений насчёт его идентификации. Во вторых, на борту Маркуса тоже находился груз плитки. А где же тогда Крисула К ? Ответ прост. Её можно обнаружить, спустившись на глубину 60м. Корабль лежит на правом борту в четырехстах метрах к северу от рифа. </p>

                <h3>Кимон М (Kimon M)</h3>
                <img className="img-left" src="/images/liveaboard/wreck-kimon-m.jpg" title="wreck Кимон М (Kimon M)" alt="wreck Кимон М (Kimon M)" />
                <p>На расстоянии примерно 250 м на восток от Крисоулы К на северо-восточном окончании рифа Абу Нухас находится Кимон М (Kimon M), так называемый "чечевичный рэк", названный так, потому что в момент кораблекрушения судно было нагружено 4 500 т этих бобовых. Судно, вышедшее из турецкого порта Искандарун и державшее путь в Бомбей, столкнулся на полном ходу с северо-восточным углом рифа Абу Нухас. Экипаж был спасен благодаря помощи проходившего мимо судна Интеразия. Долгое время носовая часть судна оставалась на рифе, но волны со временем разрушили сталь, заставив исчезнуть, то, что уже стало предупреждением для проходящих мимо кораблей.</p>
                <p>Остатки корпуса судна постепенно спустились вдоль склона, и затонули на правом борту, с кормой на песчаном дне на глубине 32 метра. Первый трюм находится на глубине 16 м, в то время как фок-мачта, многочисленные обломки и огромный якорь еще лежат на рифе, на глубине 4 м.</p>
                <p>Обследование судна начинается с отлично сохранившейся кормы с рулем и винтом. После этого пересекается левый борт корабля для изучения входов в трюмы с лебедками, направляясь к полностью разрушенной при столкновении с рифом носовой части. Особенно интересен огромный машинный зал, в котором хорошо сохранился восьмицилиндровый дизельный двигатель корабля.</p>
                <p>Фактически, именно хорошая погода превратила эту историю в трагедию. На рассвете стало ясно, что судно прочно сидит на рифе, а море спокойно. Было принято решение, оказавшееся фатальным для пассажиров и членов экипажа, - провести на борту корабля вторую ночь. Работы по организации эвакуации разворачивались неспешно.</p>
                <p>В 22.50 корабль неожиданно раскололся на две части. В смятении 27 пассажиров и членов экипажа были снесены обломками и утонули. Выжившие сумели перетащить корабельные лодки через риф. Поджигая кипы хлопка, паля из ракет, они смогли привлечь внимание другого корабля - Суматры, который и принял их на борт.</p>
                <p>Карнатик водоизмещением 1776 тонн и длиной 90 м, оставался неподвижным на коралловом склоне. Его передняя фок-нок-рея поднималась над поверхностью воды. </p>

                <h3>Карнатик (Carnatic)</h3>
                <img className="img-right" src="/images/liveaboard/wreck-carnatik.jpg" title="wreck Карнатик (Carnatic)" alt="wreck Карнатик (Carnatic)" />
                <p>В 1 час ночи 13 сентября 1869 г. появилось сообщение, что английский пароход Карнатик (Carnatic) под командованием капитана П.Б.Джонса налетел на рифы лишь несколько часов спустя после прохождения Суэцкого канала на пути в Бомбей. На борту Карнатика (Carnatic) было более 230 пассажиров и членов экипажа. Корабль перевозил консигнационную партию монет ценностью более 40 тысяч фунтов стерлингов, а также вино и Лондонскую содовую воду. Путешествие началось удачно. Погода была хорошей, море - спокойным. И, возможно, все так бы и продолжалось, если бы не небольшая навигационная ошибка, из-за которой судно село на мель.</p>
                <p>Когда информации достигла Ллойда, было принято решение предпринять спасательную экспедицию под командой капитана Генри Д. Гранта. В состав экспедиции входили 2 водолаза. В этом и состоит символическое значение Карнатика для современных аквалангистов: именно на этом судне была проведена одна из первых успешных спасательных операций с использованием новой технологии откачивания воздуха и погружений в шлеме.</p>
                <p>Более века назад погружение на затонувшее судно было трудным и опасным. В конце концов, один из водолазов, Стивен Сэффери, сумел достичь почтовой комнаты, где хранился груз золота. 25 октября 1869 г. первый сундук с золотом был поднят на поверхность. Всего было поднято 32 тысячи фунтов стерлингов. Возникает логичный вопрос: а как же остальные 8 тысяч? Возможно, они и до сих пор находятся среди обломков Карнатика! На протяжении нескольких месяцев Карнатик оставался на своем месте, на рифе, посещаемый лишь местными бедуинами, которые тащили все, что им позволяла достать техника свободного погружения. Но в марте 1870 г. поврежденный пароход соскользнул на морское дно. Скользя по дну, Карнатик раскололся на три части.</p>
                <p>Самая впечатляющая - корма с высоким полуютом и характерно большим винтом, наполовину ушедшим в грунт. Судно в значительной степени подверглось соляной коррозии. Угол, образованный кормой и песчаным дном, вместе с рифом на заднем плане и живописными рыбками на переднем, представляют замечательную композицию для фотосъемки. Отсюда лучше всего двигаться в сторону кормовой палубы и, через остатки палубы, к машинному отделению, в котором находится огромный котел, а также части сдвоенного двигателя. Неподалеку расположилась носовая часть, которая также доступна для исследования. Исследуя носовую часть, аквалангисты получат возможность рассмотреть прямоугольные амбразуры пассажирских кают, а также кольцо крепления бушприта. Карнатик отличается от всех более поздних мест кораблекрушений тем, что густо покрыт мягкими и жесткими кораллами, обжит морской фауной, что предоставляет великолепные ракурсы для подводных фотографов. Будем надеяться, что и в обозримом будущем этот прекрасный пример кораблестроения, больше века пролежавший на морском дне, останется в сохранности и будет доступен для подводных экскурсий.</p>

                <h3>Джанис Ди (Ghiannis D)</h3>
                <img className="img-left" src="/images/liveaboard/wreck-ghiannis-d.jpg" title="wreck Джанис Ди (Ghiannis D)" alt="wreck Джанис Ди (Ghiannis D)" />
                <p>Грузовое судно было спущено на воду в Японии в 1969 г., под названием Shayo Maru. В 1975 г. его продали греческой компании.В 1980г. переименовали в Gianis D. В апреле 1983 г. судно, шедшее с грузом древесины в порт Джидда(Саудовская Аравия), налетело на риф. К счастью, Gianis D затонул не сразу, и за то время, что он оставался на плаву, проходившее мимо египетское судно приняло на борт весь терпящий бедствие экипаж. «Джанис-Ди», самая популярная достопримечательность рифа Абу-Нухас, сохранился лучше других, затонувших здесь судов и кораблей.</p>
                <p>Ghiannis D лежит на песчаном дне на глубине 27 м, средняя часть разрушена, но хорошо сохранилась корма с большой трубой, капитанским мостиком и винтом. ​ Нос с мачтой и якорем находится у самого рифа. Проникнув внутрь, можно полюбоваться столбами света, попадающими в кормовой отсек через иллюминаторы. Игра света особенно эффектна за час-два до полудня.</p>
                <p>В машинном отделении стаи стеклянных рыбок кружат около6-цилиндрового судового дизеля мощностью 3000л.с. Двигатель, трубо¬проводы, запорная арматура до сих пор в прекрасном состоянии -дает о себе знать японское происхождение корабля. Наружные части его не менее живописны - обилие мягких кораллов, мелкой живности и преследующих ее хищников покрупнее - крылаток, каранксов. Джаннис Д (Giannis D), сильно наклонен, поэтому внутри него наши чувства вступают в противоречие друг с другом - органы равновесия предлагают одно "горизонтальное" положение, а глаза- другое.</p>
                <p>Согласно другой версии, Джаннис Д (Giannis D), затонул в 1981 году. Корабль отправился на помощь тонущей Крисула К (Chrisoula K), но, как говорят, не справился с управлением, налетел на риф, где и застрял, покуда ветер и волны не добили корабль.</p>

                <h3>Кингстон (Kingston)</h3>
                <img className="img-right" src="/images/liveaboard/wreck-kingston.jpg" title="wreck Кингстон (Kingston)" alt="wreck Кингстон (Kingston)" />
                <p>Риф Shag Rock Располагается в миле от Shaab Ali и в 6 милях от затонувшего судна Thistlegorm. Shag Rock – это небольшой коралловый риф, отмеченный небольшим металлическим маяком на юго-восточной стороне. Возле маяка находится большое песчаное плато, уходящее на глубину 8-10м.</p>
                <p>Английское грузовое судно "Kingston" было спущено на воду в 1871 году и через десять лет затонуло при переходе из Лондона в Аден. Носовая часть судна находится далеко на рифовом массиве, возвышаясь над водной поверхностью. Основной корпус лежит на ровном киле на глубине 14 метров, винто-рулевая группа прекрасно сохранилась.</p>
                <p>Некоторые путеводители описывают данное место под именем "Sarah H.". Однако, как выяснил известный исследователь кораблекрушений Красного моря Питер Коллингс, судно с таким названием никогда не существовало. Автор первого путеводителя, не имея возможности идентифицировать обнаруженное судно, просто обозвал его именем дайв-мастера, с которым совершал погружение. </p>
                <p>Сегодня можно с уверенностью говорить, что у рифа Shag Rock покоится именно "Кингстон", построенный на верфях Освальд в Ньюкастле по заказу Commercial S.S.Co.</p>
                <p>Идеальная видимость здесь достигается благодаря постоянному переменному течению, уносящему прочь взвесь и планктон. В районе расположения Кингстоуна течение практически отсутствует. Корпус судна неплохо сохранился и выглядит сейчас совершенно фантастически. Небольшая глубина, прекрасное естественное освещение и насыщенность различными морскими обитателями делает это место особенно привлекательным для подводной фото- и видеосъёмки. С правой стороны от затонувшего судна можно рассмотреть останки мачты, покоящиеся на морском дне. Фауна в этом месте особенно интересна. Далее погружение продолжается по направлению к востоку или западу (в зависимости от течения), где можно исследовать риф, у которого обитают груперы, черепахи, белоперые акулы, скаты, а также это место регулярно посещают дельфины.</p>

                <h3>Тисельгорм (SS Thistlegorm)</h3>
                <div className="slider-align-left">
                    <Slider images={sliderThistlegorm} className={'thg'} />
                    <p>Самое известное судно, покоящееся в Красном море, это, пожалуй, Thistlegorm - британское грузовое судно, принадлежавшее компании Albyn Line. Длина судна – 126,5м, ширина - 17,5м, трехцилиндровый паровой двигатель, мощностью 1860 лошадиных сил, что позволяло развивать скорость до 10,5 узлов и грузоподъемностью 5000 тонн. В мае 1941г. с экипажем в 39 человек, заполненное амуницией, боеприпасами, винтовками, мотоциклами, грузовыми автомобилями, танками для передвижения по пустыне, локомотивами, запчастями для самолетов, медикаментами, резиновой обувью, судно покинуло порт Glasgow. Груз предназначался для 8-ого британского полка, остановившегося в Египте и в Ливии. Пройдя вокруг Африки и оставив за кормой 12000 миль Атлантического и Индийского океанов, Тисельгорм 6 октября 1941 бросил якорь недалеко от входа в Суэцкий залив, так как не смог попасть в Суэцкий канал из-за судна, подорвавшегося на немецкой мине.</p>
                    <p>В ночь с 5-го на 6-е октября немецкий бомбардировщик Heinkel He III заметил и атаковал Тисельгорм. Две бомбы поразили кормовую палубу судна и взорвались в набитом боеприпасами трюме. В результате корабль переломился на две части и затонул на глубине около 30 метров, не успев совершить ни одного выстрела по врагу.</p>
                    <p>Взрыв был настолько сильным, что локомотивы, весившие 126 тонн каждый, были отброшены на приличное расстояние от корабля и моментально ушли на 30-ти метровую глубину. Само судно также довольно быстро опустилось на ту же глубину 6 октября 1941г. в 01:30. Экипаж корабля и капитан были спасены близлежащим судном HMS Carlisle, однако, 9 человек, пять канониров и четыре матроса погибли во время атаки. На вечном приколе остался весь груз, который перевозил Тисельгорм: развороченные взрывом железнодорожные вагоны, паровоз, танкетки, тягачи, мотоциклы, грузовые автомобили, боеприпасы...</p>
                    <p>Все это застыло в немом оцепенении, и лишь множество тропических рыб, поселившихся в его отсеках, нарушали покой.</p>
                    <p>Первым, кто открыл затонувшее судно, был Жак-Ив Кусто. На легендарном судне Calypso он побывал в этих водах в 1955г., а затем упомянул о затонувшем судне Thistlegorm в статье, опубликованной в 1956г. году в журнале National Geographic. Однако, о затонувшем корабле вскоре забыли и лишь в 1992г. году оно было заново открыто израильским шкипером. За короткое время Thistlegorm стал излюбленным местом дайверов со всего мира.</p>
                    <p>Во втором трюме расположены грузовики "Bedford", мотоциклы и автомобили. В третьем трюме находятся ящики с амуницией и ручные гранаты. В четвертом трюме - гусеничные MK II.</p>
                    <p>Один из минусов этого "рэка" - его невероятная популярность. "Обхаживают" его чаще египетских пирамид. Этот минус - следствие относительной легкодоступности судна для ныряльщиков. Его можно осмотреть как во время длительного морского сафари, так и с помощью однодневных вылазок. Но только на сафари возможно фантастическое ночное погружение на Тисельгорм.</p>
                </div>
            </div>
        </div>;

    }
}
const sliderThistlegorm: string[] = [
    'images/liveaboard/wreck-thistlegorm-1.jpg',
    'images/liveaboard/wreck-thistlegorm-2.jpg ',
    'images/liveaboard/wreck-thistlegorm-3.jpg ',
    'images/liveaboard/wreck-thistlegorm-4.jpg ',
    'images/liveaboard/wreck-thistlegorm-5.jpg ',
    'images/liveaboard/wreck-thistlegorm-6.jpg ',
];

const sliderBrina: string[] = [
    'images/liveaboard/boat-brina-1.jpg',
    'images/liveaboard/boat-brina-1-upperdeck.jpg',
    'images/liveaboard/boat-brina-1-upperdeck-2.jpg',
    'images/liveaboard/boat-brina-1-divedeck.jpg',
    'images/liveaboard/boat-brina-1-salon-1.jpg',
    'images/liveaboard/boat-brina-1-salon-2.jpg',
    'images/liveaboard/boat-brina-1-salon-3.jpg',
    'images/liveaboard/boat-brina-1-double.jpg',
    'images/liveaboard/boat-brina-1-twin.jpg',

];

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(LastSafari);
}
