import * as React from 'react'
import { enableClient } from '../client';

export class ContactUs extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Контакты в Одессе</h1>

            <p>E-mail <a href="mailto:ozarenko.diving@gmail.com">ozarenko.diving@gmail.com</a></p>

            <p>Тел. +38 068 498 1046 (Виктор)</p>
        </ div>
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(ContactUs);
}