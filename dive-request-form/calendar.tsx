import * as React from 'react';
import { Grid, PickedDateConcern } from './grid';
import { MonthViewer, MonthViewerConcern } from './month-viewer';
import { broke, monthToString, monthFromStringToNumber } from './utils';
import { localizer } from './language';

export type CalendarConcerns = PickedDateConcern;

export interface CalendarProps {
    pickedDate: Date | null;
    language: string;
    when: (concern: CalendarConcerns) => void;
}
export interface CalendarState {
    anchorDate: Date;
    month: string;
    year: string;
}

export class Calendar extends React.Component<CalendarProps, CalendarState> {
    state = {
        anchorDate: new Date(),
        year: new Date().getFullYear().toString(),
        month: monthToString(localizer.useCorrectLanguage(this.props.language).months, new Date().getMonth())
    };
    private when = (concern: MonthViewerConcern) => {
        const { anchorDate } = this.state;
        const { language } = this.props;
        switch (concern.about) {
            case 'show-previous-month': {
                const newAnchorDate = new Date(anchorDate.getFullYear(), anchorDate.getMonth() - 1);
                const months = localizer.useCorrectLanguage(language).months;
                const newMonth = monthToString(months, newAnchorDate.getMonth());
                const newYear = newAnchorDate.getFullYear().toString();
                this.setState({
                    month: newMonth,
                    year: newYear,
                    anchorDate: newAnchorDate
                });
                break;
            }
            case 'show-next-month': {
                const newAnchorDate = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + 1);
                const months = localizer.useCorrectLanguage(language).months;
                const newMonth = monthToString(months, newAnchorDate.getMonth());
                const newYear = newAnchorDate.getFullYear().toString();
                this.setState({
                    anchorDate: newAnchorDate,
                    month: newMonth,
                    year: newYear
                });
                break;
            }
            case 'month-choise': {
                const { month }  = concern;
                const months = localizer.useCorrectLanguage(language).months;
                const choosenMonth = monthFromStringToNumber(month, months);
                const yearNumber = parseInt(this.state.year);
                const newAnchorDate = new Date(yearNumber, choosenMonth);
                const monthText = monthToString(months, choosenMonth);
                this.setState({
                    anchorDate: newAnchorDate,
                    month: monthText,
                });
                break;
            }
            case 'year-choise': {
                const { year } = concern;
                const { anchorDate } = this.state;
                const choosenMonth = anchorDate.getMonth();
                const choosenYear = parseInt(year);
                const newAnchorDate = new Date(choosenYear, choosenMonth);
                const yearText = choosenYear.toString();
                this.setState({
                    anchorDate: newAnchorDate,
                    year: yearText
                });
                break;
            }
            default: return broke(concern);
        }
    }
    render() {
        const { language } = this.props;
        const { anchorDate, month, year } = this.state;
        return <div className="calendar">
            <MonthViewer anchorDate={anchorDate} language={language} month={month} year={year}
                when={this.when} />
            <table className="grid">
                <Grid anchorDate={anchorDate} language={language} when={concern => {
                    this.props.when(concern);
            }} />
            </table>
        </div>;
    }
}
