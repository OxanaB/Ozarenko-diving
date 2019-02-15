import * as React from 'react';
import { localizer } from './language';

export interface MessageConcern {
    about: 'message-input';
    message: string;
}

export interface MessageProps {
    message: string;
    language: string;
    when: (concern: MessageConcern) => void;
}

export class Message extends React.Component<MessageProps> {
    render() {
        const { message, language } = this.props;
        return <>
            <label>
                <div>{localizer.useCorrectLanguage(language).form[6]}</div>
                <div><textarea value={message} placeholder="Ваши пожелания по дайвингу"
                    onChange={e => {
                        this.props.when({ about: 'message-input', message: e.currentTarget.value });
                     }} /></div>
            </label>
        </>;
    }
}
