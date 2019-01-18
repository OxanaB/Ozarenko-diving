import * as React from 'react'
import { enableClient } from './client';

export class ContactUs extends React.Component {
    render() {
        return <div className="page-container">
            <div className="wrapper-two-columns">
                <div><h1>Контакты в Одессе</h1>

                    <p>E-mail <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a></p>

                    <p>Тел. +38 068 498 1046 (Виктор)</p>
                </div>
                <div>
                    <h1>Оставить заявку на дайвинг</h1>
                    <iframe className="booking" src="https://goo.gl/forms/lyhFZT7DxAwRLBZH2" width="640" height="1158" />
                </div>
            </div>
        </ div>
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(ContactUs);
}