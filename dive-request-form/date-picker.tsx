import * as React from 'react';
import { DateInput, DateInputProps, DateInputConcern } from './date-input';
import { Calendar, CalendarProps, CalendarConcerns } from './calendar';

export type DatePickerConcern = CalendarConcerns | DateInputConcern;

export interface DatePickerProps {
    pickedDate: Date | null;
    language: string;
    isCalendarToShow: boolean;
    when: (concern: DatePickerConcern) => void;
}

export class DatePicker extends React.Component<DatePickerProps> {
    render() {
        const { pickedDate, language } = this.props;
        const calendarProps: CalendarProps = {
            pickedDate: pickedDate,
            language: language,
            when: concern => {
                this.props.when(concern);
            }
        };
        const inputFormProps: DateInputProps = {
            pickedDate, language,
            when: concern => {
                this.props.when(concern);
            }
        };
        return <>
            <DateInput key={pickedDate !== null ? pickedDate.toLocaleString() : ''} {...inputFormProps} />
            {
                this.props.isCalendarToShow
                    ? <Calendar {...calendarProps} />
                    : null
            }
        </>;
    }
}
