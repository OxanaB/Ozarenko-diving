import * as React from 'react';
import { map } from '../utils';
import { clientsFeedback } from './feedback_array'

export class Feedback extends React.Component {
    render() {
        return <div className="page-container">
            <h1>Отзывы клиентов о дайвинге в Шарм-эль-Шейхе с нашим клубом</h1>
            {map(clientsFeedback, (clientsFeedback) => {
                return <div className="clients-feedback-feed">
                    <div className="client-feedback">
                    <img src={clientsFeedback.img} />
                    <h2>{clientsFeedback.who}</h2>
                    <h5>{clientsFeedback.from}</h5>
                    <p>{clientsFeedback.text}</p>
                    </div>
                </div>
            })}
        </ div>
    }
}