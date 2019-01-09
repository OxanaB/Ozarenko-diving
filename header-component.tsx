import * as React from 'react';

export class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="header-container">
                <a href="/ozarenko-diving/main-page.html"><div className="header-img"></div></a>
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