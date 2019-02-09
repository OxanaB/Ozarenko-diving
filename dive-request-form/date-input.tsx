import * as React from 'react';
import { localizer } from './language';

export type DateInputConcern = ShowCalendarConcern;

export interface DateInputProps {
    pickedDate: Date | null;
    language: string;
    when: (concern: DateInputConcern) => void;
}

export interface ShowCalendarConcern {
    about: 'show-calendar';
    isCalendarToShow: boolean;
}

interface State {
    text: string;
}

export class DateInput extends React.Component<DateInputProps, State> {
    state = {
        text: this.props.pickedDate === null ? '' : this.props.pickedDate.toLocaleDateString()
    }
    render() {
        const { text } = this.state;
        const { language } = this.props;
        return <>
            <label>
                <div>{localizer.useCorrectLanguage(language).form[4]}</div>
                <div className="wrapper-input-icon">
                    <input type="text"
                        value={text}
                        onFocus={() => {
                            this.props.when({
                                about: 'show-calendar',
                                isCalendarToShow: true
                            })
                        }}
                        onChange={e => {
                            this.setState({ text: e.currentTarget.value });
                        }}
                        onKeyDown={({ keyCode }) => {
                            if (keyCode === 27) {
                                this.props.when({
                                    about: 'show-calendar',
                                    isCalendarToShow: false
                                })
                            }
                        }}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                        <path fill="none" d="M0 0h24v24H0z" /></svg>
                </div>
            </label>
        </>
    }
}
