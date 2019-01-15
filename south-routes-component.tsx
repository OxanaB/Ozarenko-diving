import * as React from 'react';
import { enableClient } from './client';
import { Slider } from './slider-component';

export class SouthRoutes extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Маршруты дайвинг сафари по югу Красного моря</h1>
            <p>Красное море очень интересное и разнообразное. Есть несколько популярных маршрутов для дайвинг сафари, которые различаются между собой по сложности погружений, удаленности от берега, портом выхода яхты.</p>
            <p>Вы можете выбрать для себя наиболее подходящий южный маршрут:</p>
            <ul>
                <li><a href="#sent-johns">дальний юг острова Сент Джонс</a></li>
                <li><a href="#brothers">острова Бразерс</a></li>
                <li><a href="#rocky">острова Роки и Дедалус, риф Эльфинстоун</a></li>
            </ul>
            <h2 id="sent-johns">Дальний юг Красного моря, острова Сент Джонс</h2>
            <img src="/images/liveaboard/south-st-johns-reef-system.jpg" alt="Дальний юг Красного моря, острова Сент Джонс"/>
            <p>Рифы St. John’s находятся на самой южной оконечности Красного моря, принадлежащего Египту, в 40 км от границы с Суданом, и добраться туда можно только на дайвинг сафари.</p>
            <p>Температура воды здесь всегда на пару градусов выше, чем в районе Хургады и Шарм-Эль-Шейха, поэтому сезон комфортного дайвинга здесь длится немного дольше.</p>
            <p>Для дайвинг сафари, как правило, рекомендуется определённый опыт, примерно 30-40 погружений. Но сафари на Сент Джонс подходит для дайверов любого уровня, вплоть до новичков, которые прошли базовое обучение дайвингу в бассейне.</p>
            <p>Рифы по этому маршруту попадаются самые разные, и для начинающих всегда найдутся пологие и неглубокие места без течений, где новички могут набраться опыта в первые дни. А потом можно погружаться и на более сложных рифах. Безопасность в большей степени зависит от хорошего планирования и подготовки к погружению.</p>
            <p>Маршрут на Дальний юг Красного Моря обычно начинается из порта Marsa Alam  и мы сразу оказываемся в море и получаем полное ощущение, что наш отдых уже начался. В первый день дайвинг сафари нам дают «разныряться» на коралловых рифах, где нет волн, течений и бездонной, уходящей вниз глубины. Затем обычно следует большой ночной переход на юг Красного моря, к самой границе с Суданом, где расположены полные жизни и растительности рифы St. John’s (Святого Джона). То есть на второй день путешествия мы оказываемся в открытом море, где до самого горизонта простирается вода, не видно берега и не ловят сигнал мобильные телефоны.</p>
            <p>Рифы St. John’s представляют собой горы, которые поднимаются со дна моря и своими вершинами почти доходят до поверхности воды. Здесь есть стенки с сильным течением, вертикально уходящие далеко вниз, и мелководные коралловые рифы-сады. Кораллы здесь ещё не испорчены массовым нашествием дайверов и близостью к большим курортам, на отвесных стенках кружат рифовые акулы и акулы-молоты, большие стаи тунцов и каранкасов, не редко можно встретить дельфинов и морских черепах, иногда приплывают манты. Во время ночных погружений часто попадаются «Ночные танцоры» и другие голожаберники.</p>
            <p>В западной части рифа Habili Ali растет большое колличество огромных горгоний и черных кораллов. Здесь можно увидеть рифовых акул и стаи акул-молотов (Hammerheads)!</p>
            <p>Риф Habili Gafаar покрыт мягкими кораллами, здесь вы увидите рыб-бабочек, луцианов и барракуд, а также можно встретить мант, темноперых и белоперых серых акул.</p>
            <p>Риф Gota Soraya - считается одним из лучших Красноморских рифов с ответными стенками. Риф просто изрезан многочисленными выступами и трещинами, полными glass-fishes и большеглазов. Сюда также часто приплывают темноперые акулы, белоперые серые акулы и акулы-молоты.</p>
            <p>Из множества дайв сайтов Сент-Джонса изучены только 10-12, а разнообразие подводной жизни даёт дайверам представление о том, каким было Красное море пару десятилетий назад. При хорошей погоде можно оставаться на Сент-Джонсе три дня, погружаясь у особенно красивых маленьких рифов.</p>
            <p>Из десятка рифов на Сент Джонс (St.Johns Reef) самым популярным, пожалуй, является риф Вуд (St John’s Wood) или Ум Элерог (Umm Elerog). Погружения на этом сайте очень трудно описать словами, это что-то невероятное. Перед Вами возникает большой цилиндрический столб, вокруг которого рассыпаны сотни уже маленьких коралловых столбиков различной ширины. Одни из них расположены всего лишь в нескольких метрах от поверхности воды, другие остановились на пол пути. Как истинные деревья они обладают коралловыми ветвями, окутанных сотнями разноцветных мелких рыб, будто настоящими листьями. Именно такое сочетание дает ощущение присутствия в лесу и, если Вы давно там не были, то Вам просто необходимо посетить этот сайт.</p>
            <p>Огибая столбики просто невозможно предугадать, что Вы увидите за поворотом. Это может быть или просторная сказочная поляна, освещенная солнечными лучами, с желтыми рыбами-бабочками, или небольшой коралл, ставший домом для мелких рыб. Где-то в этом дивном лесу отдыхает на песке парочка стингреев. Они позволяют себя фотографировать в обмен на главное место в Вашем фотоальбоме. Различные цвета мягких кораллов хорошо просматриваются сквозь изысканные веера горгонарий. Можно увидеть морские звезды, рыб-собак, барракуд, отдыхающих белоперых акул и мурен.</p>
            <p>Большой риф Биг Гота (Big Gota) обладает крутыми стенами, уходящими в глубину. С южной стороны прилегает небольшое плато, на котором кипит жизнь – огромное разнообразие морских обитателей, от маленьких рыб до крупных морских хищников акул, маленькие пещеры и красивые кораллы.</p>
            <p>Маленький риф Смол Гота (Small Gota) легко можно полностью обогнуть за время погружения. Живописные стены покрыты красочными мягкими, черными кораллами и горгонариями. Можно увидеть акул и величественных мант.</p>
            <p>Риф Кэйв (Cave Reef) представляет собой настоящий лабиринт, образованный сотнями сросшихся между собой коралловых столбов. Погружения на этот сайт подходят для дайверов любого уровня подготовки. В основном пещеры открытые. Лучи солнца играют бликами на песчаном дне, даря ощущение нереальности окружающего мира, что невольно начинаешь восхищаться талантом природы, сотворившей такое чудо. Вы почувствуете себя настоящим первооткрывателем, когда будете пробираться сквозь узкие проходы, в которых можно найти множество закоулков и сотни рифовых рыб. Нередко можно увидеть акулу.</p>
            <p>Вход в пещеры расположен на уровне 17 метров, а пробираясь все дальше вглубь них, они становятся всё выше к поверхности и в некоторых местах достигают 2-9 метров. Морские обитатели – черепахи, наполеоны – собираются вместе, чтобы кормиться у гостеприимных склонов. Можно увидеть рыб-носорогов, рыб-хирургов и акул-молотов и серых рифовых акул.</p>
            <p>На обратном пути мы погружаемся на красивейших рифах, которыми богат так называемый «Средний Юг», включая Fury Shoals со спокойным дайвингом при любой погоде. Здесь больше коралловых садов и подводных рифов, испещрённых замысловатым лабиринтом расщелин и узких сквозных проходов – первоклассные места для подводных фотографов. Есть также и красивые отвесные стенки.</p>
            <p>Во время погружения на рифе Shaab Claude, изрезанном тоннелями и пещерами, вы увидите огромные ветвистые кораллы- пориты, анемонов и живущих в них амфиприонов, обитающих с южной стороны рифа, куда иногда прилывают длиннорылые акулы.</p>
            <p>В лагуне рифа Сатайя (Dolphin Reef, Sattayah) постоянно держатся около сотни дельфинов.</p>
            <p>Погружаясь у отвесных стен рифа Shaab Sharm есть веорятность увидеть океанических белоплавниковых акул, а также черепах, которые здесь отдыхают перед путешествием на юг к Wadi Gamal.</p>
            <p>Риф Wadi Gamal с его плавным краями, покрытыми твердыми желтыми и зелеными мягкими кораллами - место обитания разнообразных рыб-ангелов и рыб-бабочек, а в сезон можно увидеть большие косяки каранкасов и тунцов.</p>
            <p>Серевенее у стенки рифа Shaab Sharm есть вероятность увидеть рифовых акул, а у южной стороны рифа можно встретить черепах.</p>
            <p>Если в программу сафари включены острова – заповедники Rocky и Zabargad, то мы посвящаем им один день нашего круиза. Остров Rocky имеет треугольную форму, каждая из сторон треугольника – это глубоко уходящая вниз стенка, покрытая разнообразными кораллами. Здесь дайверам часто встречаются дельфины, манты, акула-молот, стаи тунцов и барракуд, время от времени - китовая акула. Здесь мы совершаем три ошеломительных дневных погружения, после чего уходим к острову Zabargad, который славится очень красивым ночным дайвингом.</p>
            <p>В районе Марса-Алама есть несколько дайв-сайтов с общим названием Abu-Dabbab. Вокруг некоторых из них растёт морская трава, и если повезёт, то можно увидеть дюгоней, которых ещё называют морскими коровами. А раз уж они коровы, значит любят есть траву.</p>
            <p>Иногда маршрут дайвинг сафари на St. John’s составляется так, что в заключительный день у нас есть возможность понырять на одном из самых знаменитых рифах Красного моря – Elphinestone. Это очень симпатичная длинная стенка с огромными горгониями и множеством мягких кораллов, которым очень хорошо живётся там, где есть течения. Здесь можно сделать незабываемый дрифт-дайв и увидеть сразу все главные достопримечательности – акулу-Молота, акулу Лонгимануса, манту, дельфинов, тунцов и огромные косяки более мелкой рыбы. А иногда Эльфинстоун выглядит просто симпатичным, но ничем не примечательным подводным рифом, по форме напоминающим большой огурец.</p>

            <h2 id="#brothers">Острова Бразерс</h2>
            <p>Посреди Красного моря, напротив Сафаги есть два острова — Большой и Малый братья. Они представляют собой маленькие островки с отвесными стенами, которые обрываются на глубине 70 метров и дальше переходят в широкое плато.</p>
            <p>Различить их между собой несложно: на Большом брате (400 метров длиной и около 30 метров шириной) стоит тридцатиметровый маяк — символ Бразерс. Его построили англичане еще в конце XIX века, и сегодня на нем проводятся экскурсии. </p>
            <p>Малый брат, расположенный в километре от Большого, меньше раза в два и имеет чуть выпуклую форму в отличие от абсолютно плоского Большого брата.</p>
            <p>Бразерс — это настоящие оазисы посреди бескрайней морской глади. Благодаря сильным течениям здесь зародилась невероятно интенсивная и разнообразная морская жизнь. Склоны обоих Братьев настолько густо покрыты колониями мягких и твердых кораллов, что создается иллюзия, будто это настоящий ковер, сотканный трудолюбивыми мастерицами-узбечками.</p>
            <p>Такой невероятно хлебосольный «дом» привлек целые косяки рыб, которые нашли себе здесь и стол, и кров в зарослях кораллов. Вдоль стенок прямо перед глазами носятся разноцветные коралловые рыбки и особи покрупнее — хирурги, спинороги, рыбы-трубы, попугаи… Привлеченные обилием легкой добычи, на Бразерс устремляются отряды акул, тунцов, барракуд и других хищников. На Большом брате есть место, где часто встречается лисья акула, приходят молоты и манты. В эти места регулярно наведываются и другие обитатели морских глубин, которых нечасто встретишь на других рифах и островах — китовые акулы и рыба-луна, белоперые и черноперые акулы, а также серые рифовые акулы.</p>
            <p>На Большом брате лежат три затонувших судна. Самое известное — это Numidia, старое британское торговое судно XIX века длиной 137 метров и шириной 16,7 метров.Летом 1901 года Numidia шла из Ливерпуля в Калькутту. Темной египетской ночью утомленный вахтенный не заметил маяка, и большой корабль на полном ходу врезался в остров. С тех пор Numidia лежит почти вертикально на склоне, обросшая мягкими и твердыми кораллами, в ее трюмах и других отсеках поселились рыбы. На рэк ходят посмотреть очень многие, потому что его верх находится на глубине 12 метров.</p>
            <p>Другой рэк — грузовое судно Aida. Это уже глубоководное погружение для технических дайверов. Aida лежит кормой на глубине 60 метров, а носовой частью — на 12-14 метрах. Корабль не такой красивый, как Numidia: его нос разворочен и врос в стенку острова, вокруг валяются останки груза, но глубоководные дайверы любят здесь плавать, заходить в трюмы, тревожа местных обитателей.В 2004 году на Большом брате затонуло еще одно, третье судно — Karim 2000. Катер отправился в сафарийное путешествие, и на его борту находилась группа дайверов. Команда не успела подготовиться должным образом к штормовой погоде, и волны буквально «слизали» суденышко, которое уверенно пошло на дно. Люди ночью стали выпрыгивать в воду и, к счастью, все спаслись. Их подобрал другой корабль, а Karim 2000 теперь отдыхает на 90 метрах глубины.</p>
            <p>В дайвинг-сафари к островам Brothers Вас ждет:</p>
            <ul>
                <li>Отвесные рифовые стены, уходящие на сотни метров в глубину;</li>
                <li>Необычайна богатая подводная жизнь рифов, окружающих острова Бразерс;</li>
                <li>Заросли горгонарий на глубинах от 10 до 40 м;</li>
                <li>Высокая вероятность встреч с пелагическими рыбами: тунцом, барракудой, акулами разных видов – акулой-молотом, шелковой, лисицей и серой рифовой;</li>
                <li>Живописные стены рифов, покрытые мягкими и твердыми кораллами, разных видов и форм;</li>
                <li>Два рэка в районе северного мыса острова Big Brother: судно "Аида", лежащее на склоне на глубинах от 30 до 60 метров, и судно "Нумидия", лежащее на глубинах от 10 до 86 метров.</li>
            </ul>
            <h2 id="rocky">Остров Роки, остров Дедалус, риф Эльфинстоун</h2>
            <Slider images={sliderSouthReefs} width={500} height={350} />
            <p>Риф Дедалус (сравнительно небольшой по размерам) находится в открытом море, почти на полпути к Саудовской Аравии. Меньше чем 800 метров в поперечнике, риф отмечен маяком, и это единственное, что возвышается над поверхностью моря на много миль вокруг, до самого горизонта.</p>
            <p>Риф невелик, однако, будучи единственным, на многие километры вокруг, местом обитания, плотно населен практическии непуганой живностью, привлекающей крупных пелагических хащников. Склоны рифа крутые, почти отвесные. Коралловые колонии покрывают эти склоны повсюду, от поверности до глубин. Обычная рифовая живность, дополняется стайными рыбами, такими как тунцы и макрели, ставриды и каранкасы и множестов других. </p>
            <p>Эльфинстоун - один из наиболее популярных дайв сайтов на Юге Красного Моря. Это длинный узкий риф, около 300 метров протяженностью в 12 километрах от бухты Марса Абу Дахаб. Сильнейшие течения делают дрифт вдоль стен этого рифа незабываемым дайвом. Стена населена мягкими кораллами и буквально кишит рыбой. Она уходит в глубину на 70, а местами и более метров.</p>
            <p>Чтобы получить настоящий заряд адреналина, нужно достичь северного плато. Возможно, вам придется поработать ластами, но когда вы туда попадете, то обнаружите, что окружены белоплавниковыми, рифовыми, а иногда и молотоголовыми акулами. На южном плато, на глубине 55 метров имеется арка, в которой также часто встречаются акулы. Здесь лежит большой, покрытый кораллами камень. Многие верят, что это - саркофаг. (Для того чтобы убедиться в этом рекомендует пройти технические курсы дайвинга).</p>
            <Slider images={sliderRockyZabagard} width={600} height={400} />
            <p>Остров Роки расположен в двадцати километрах на Юг от Забаргада и является единственным участком суши в этом районе, вплоть до рифа Сент-Джонс. Он имеет размеры пятьсот метров с запада на восток и около двухсот — с юга на север. Неимоверно интересным для дайвинг-сафари Роки делает роскошный коралловый Риф, опоясывающий остров со всех сторон. Ландшафт которого и условия погружения, тем не менее, сильно разнятся. Северная сторона острова наиболее сложное место для дайвинга. Из-за отсутствия природной защиты в виде бухт или атоллов, данная часть рифа и акватории открыта сильным северным ветрам и течениям. А сам риф резко уходит на глубину. Волнение ощущается даже на 20-25 метрах. Нырять новичкам здесь запрещено.</p>
            <p>Чаще всего, «зодиак» доставляет дайверов к северо-западной оконечности острова, где начинать погружение довольно комфортно и безопасно. Риф в этом месте удивительно красив благодаря гигантским столбам, уходящим на глубину 25-30 метров и зубчатым стенам, покрытым горгонариями. Здесь сильны течения, с помощью которых вы можете постепенно продвигаться вдоль северной части рифа, любуясь плотным ковром мягких кораллов на отвесной стене. В этой части острова много стайных и пелагических рыб. Прежде всего, это каранксы и барракуды. На глубину 30-40 метров поднимаются акула-молот, манты, серебристые рифовые акулы. На мелководье Вы обязательно встретите наполеонов, крылаток, рыб-снайперов, больших групперов и мурен. Но обязательно следует быть осторожным, так как северное течение, ударяясь о выступы стены, образует опасные вихри. Видимость не более 15 метров.</p>
            <p>Южная часть острова Роки более комфортна для погружения. Данный участок рифа примечателен многочисленными трещинами, проходам и небольшими пещерами. На глубинах 35-40 метров риф становится отвесным, но разбит на множество уступов и расселин. Благодаря чему создается впечатление, что это рукотворный архитектурный ансамбль. Стены покрывают многочисленные кораллы: акропоры, кораллы-капуста, пориты. При этом они отлично и причудливо сгруппированы. Помимо указанных рыб, тут можно встретить рыб-ворчунов, шишколобых рыб-попугаев, морских ангелов, стаи луцианов и рыб-бабочек.Изюминкой острова является небольшой участок рифа в его северо-восточной части. Это место очень точно прозвано «акулий театр». Вы сможете полюбоваться и сфотографировать грациозных акул разных видов на маленьком подводном козырьке на глубине не более 30 метров. Видимость здесь составляет 20-25 метров, а течения незначительны.</p>
        </div>
    }
}
const sliderSouthReefs: string[] = [
    'images/liveaboard/south-deadalus-reef.jpg',
    'images/liveaboard/south-elphinstone-reef.jpg',
]
const sliderRockyZabagard: string[] = [
    'images/liveaboard/south-rocky-island-reefs.jpg',
    'images/liveaboard/south-zabargad-island-reefs.jpg',
]
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(SouthRoutes);
}