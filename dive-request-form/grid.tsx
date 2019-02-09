import * as React from 'react';
import { getGridsStartAndFinishPoints, makeGrid } from './grid-maker';
import { localizer } from './language';


export interface GridProps {
    anchorDate: Date;
    language: string;
    when: (concern: PickedDateConcern) => void;
}

export interface PickedDateConcern {
    about: 'date-is-picked';
    pickedDate: Date;
}

export class Grid extends React.Component<GridProps> {
    render() {
        const { anchorDate: date, language } = this.props;
        const { firstDayOnTheGrid, lastDayOnTheGrid, lastDayOfMonth } = getGridsStartAndFinishPoints(date);
        const gridCurrentMonth = makeGrid(firstDayOnTheGrid, lastDayOnTheGrid, lastDayOfMonth);
        return <>
            <thead>
                <tr>
                    {
                        localizer.useCorrectLanguage(language).days.map((day) => {
                            return <th key={day.toString()}> {day}
                            </th>;
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    gridCurrentMonth.map((week, weekIndex) => {
                        return <tr key={weekIndex}>{
                            week.map(date => {
                                const classes = date.getMonth() === lastDayOfMonth.getMonth() ? '' : 'not-active';
                                return <td key={date.toDateString()} className={classes}>
                                    <a href="" onClick={e => {
                                        e.preventDefault();
                                        this.props.when({ about: 'date-is-picked', pickedDate: date });
                                    }}>
                                        {date.getDate()}
                                    </a>
                                </td>;
                            })}
                        </tr>;
                    })
                }


            </tbody>
        </>
    }
}












