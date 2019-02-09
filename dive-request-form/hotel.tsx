import * as React from 'react';
import { localizer } from './language';

export interface HotelConcern {
    about: 'hotel-input';
    hotel: string
}

export interface HotelProps {
    hotel: string;
    language: string;
    when: (concern: HotelConcern) => void;
}

export class Hotel extends React.Component<HotelProps> {
    render() {
        const { hotel, language } = this.props;
        return <>
            <label>
                <div>{localizer.useCorrectLanguage(language).form[5]}</div>
                <div><input type="text" value={hotel}
                    onChange={e => {
                        this.props.when({ about: 'hotel-input', hotel: e.currentTarget.value })
                    }} /></div>
            </label>
        </>
    }
}
