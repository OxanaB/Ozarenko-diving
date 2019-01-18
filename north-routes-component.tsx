import * as React from 'react';
import { enableClient } from './client';

export class NorthRoutes extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Маршруты северных дайв-сафари</h1>
            <h3>Мы рекомендуем иметь минимум 20 зарегистрированных погружений для маршрута «Север классика» и минимум 35 зарегистрированных погружений для маршрутов «Северные Рэки» и «Шарм-Дахаб».</h3>
            <div className="wrapper-div-image">
            <h2>Север классика</h2>
                <img id="north" className="img-left" src="/images/liveaboard/north-wreck-and-reef.jpg" alt="Маршрут дайвинг сафари по северу красного моря &quot;Север классика&quot; из Шарм эль Шейха (Египет)" />
                <p>Этот дайв-тур подходит каждому любителю дайвинга. Он предоставляет собой комбинацию рифового и wreck дайвинга.</p>
                <p>Примерный маршрут дайвинг сафари (будет зависеть от погодных условий):</p>
                <p>День 0: Прибытие в Шарм эль Шейх, заселение на борт. Приветственный брифинг и ужин. Ночевка в порту.</p>
                <p>День 1: Чек-дайв на сайтах «Temple» или «Ras Katy», переход в заповедник  Ras Mohamed, Beacon Rock, ночной дайв</p>
                <p>День 2: рэк Dunraven, Small Crack, рэк Thistlegorm, ночной дайв на рэк Thistlegorm</p>
                <p>День 3: утренний дайв на рэк Thistlegorm, рифы Shag Rock, Alternatives, ночной дайв</p>
                <p>День 4: заповедник Ras Mohamed: рифы Shark & Yolanda Reef, Jackfish Alley, переход к рифам острова Тиран (Gordon Reef), ночной дайв</p>
                <p>День 5: Рифы острова Tiran: Jackson (outside в зависимости от погодных условий – поиск акул-молотов), Woodhouse, Laguna, ночной дайв</p>
                <p>День 6: Рифы острова Тиран: Thomas или Gordon; заключительный дайв на Ras Um Sid</p>
                <p>День 7: Check-out. Трансфер в аэропорт или отель</p>
            </div>
            <div className="wrapper-div-image">

            <h2>Шарм-Дахаб, или Золотой путь</h2>
                <img id="north-2" className="img-right" src="/images/liveaboard/north-sharm-dahab.jpg" title="Маршрут дайвинг сафари по северу красного моря&quot;Шарм - Дахаб, или Золотой путь&quot; из Шарм эль Шейха (Египет)" />
                <p>Маршрут подходит для уже опытных дайверов, с уровнем не ниже Advanced open water diver.</p>
                <p>Примерный маршрут дайвинг сафари (будет зависеть от погодных условий и опытности дайверов):</p>
                <p>День 0: Прибытие в Шарм-эль-Шейх, заселение на яхту, ужин и ночевка в порту</p>
                <p>День 1: Чек-дайв на Temple, переход к рифам острова Тиран (Gordon Reef, Woodhouse) ночной дайв</p>
                <p>День 2: Переход в Дахаб на сайты Gabr el Bint, Canyon, Abu Galum, ночной дайв День 3: Blue Hole, Canyon, Gabr el Bint North, ночной дайв</p>
                <p>День 4: Gabr el Bint, обратный переход в Шарм заповедник Набк: на выбор и погодным условиям рэк Maria Shroeder или рэк Million Hope, Тиран: Jackson Reef,  ночной дайв</p>
                <p>День 5: Рифы острова Тиран: Thomas, Gordon, переход на Ras Um Sid, ночной дайв</p>
                <p>День 6: Заповедник Ras Mohamed: рифы Shark & Yolanda Reef, Jackfish Alley, Ras Zatar</p>
                <p>День 7: Высадка с яхты после завтрака</p>
            </div>

            <div className="wrapper-div-image">

                <h2>Северные рэки (wreck diving)</h2>
                <img id="north" className="img-left" src="/images/liveaboard/north-wreck-and-ras-mohammed.jpg" alt="Маршрут дайвинг сафари по северу красного моря &quot;Северные рэки (wreck diving)&quot; из Шарм эль Шейха (Египет)" />
                <p>Маршрут подходит для уже опытных дайверов, с уровнем не ниже Advanced open water diver.</p>
                <p>Примерный маршрут дайвинг сафари (будет зависеть от погодных условий и опытности дайверов):</p>
                <p>День 0: Прибытие в Шарм-эль-Шейх, заселение на яхту, ужин и ночевка в порту</p>
                <p>День 1: Чек-дайв на Temple, рэк Dunraven, Beacon Rock, ночной дайв</p>
                <p>День 2: Риф Abu Nuhas (Могила кораблей): рэки Chrisoula K, Carnatic, Giannis D, ночной дайв</p>
                <p>День 3: Small Gubal, Rosalie Moeller (глубокий рэк, только для технических дайверов), рэк Ulysees, ночной дайв</p>
                <p>День 4: Shag Rock рэк Kingston, рэк Thistlegorm, Thistlegorm, ночной дайв на рэк</p>
                <p>День 5: Thistlegorm, Small Crack, Alternatives, ночной дайв</p>
                <p>День 6: Заповедник Ras Mohamed (Ras Zatar); заключительный дайв на Ras Um Sid</p>
                <p>День 7: Check-out. Трансфер в аэропорт или отель</p>
            </div>

        </div>
    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(NorthRoutes);
}