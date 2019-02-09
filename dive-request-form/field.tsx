import * as React from 'react';

export interface Field {
    value: string;
    isValid: boolean;
}

export interface FielderProps {
    field: Field;
    when: (concern: FielderConcern) => void;
}

export interface FielderConcern {
    about: 'field-input';
    value: string
}

export class Fielder extends React.Component<FielderProps> {
    render() {
        const { field: { isValid, value } } = this.props;
        return <input className={isValid ? '' : 'invalid'} type="text" value={value} required
            onChange={e => {
                this.props.when({ about: 'field-input', value: e.currentTarget.value })
            }} />;
    }
}
