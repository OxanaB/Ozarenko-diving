import * as React from 'react';
import { enableClient } from './client';
import { App } from './dive-request-form/app';

export class DiveRequest extends React.Component {
    render() {
        return <div className="page-container">
            <App />
        </div>
    }
}
declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(DiveRequest);
}
