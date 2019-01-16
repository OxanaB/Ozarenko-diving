import * as React from 'react';

export class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="header-container">
                <a href="/index.html" ></a> 
                <div className="header-text-elements">
                    <p>Школа дайвинга Виктора Озаренко, курсы обучения дайвингу PADI, IANTD, NDL</p>
                    <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a>
                </div>
            </div>
        </div>
    }
}

{/* <img className="header-img"  
                    src="/images/logos/ozarenko_logo-main.png"
                    alt="Школа дайвинга Виктора Озаренко. Дайвинг клуб в Одессе: курсы PADI, NDL, IANTD. Техничсекий дайвинг. Фридайвинг" />*/}