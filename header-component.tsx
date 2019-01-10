import * as React from 'react';

export class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="header-container">
                <a href="/index.html">
                <img className="header-img" 
                    src="/images/logos/ozarenko_logo-main.png"
                    title="Главная: школа дайвинга Виктора Озаренко. Дайвинг клуб в Одессе" 
                    alt="Дайвинг клуб Виктора Озаренко &quot;Искатели морских сокровищ&quot;, Шарм-эль-Шейх, Египет | Обучение дайвингу в Египте, дайвинг в Шарм эль Шейхе, технический дайвинг, сайдмаунт"/></a>
                <div className="header-text-elements">
                    <div className="header-text">Школа дайвинга Виктора Озаренко, курсы обучения дайвингу PADI, IANTD, NDL</div>
                    <div className="header-link">
                        <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    }
}