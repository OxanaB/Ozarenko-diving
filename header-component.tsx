import * as React from 'react';

export class Header extends React.Component {
    render() {
        return <div className="header">
                <a href="/index.html" ></a>
                <p>Школа дайвинга Виктора Озаренко, курсы обучения дайвингу PADI, IANTD, NDL</p>
                <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a>
        </div>;
    }
}
