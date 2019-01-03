import * as React from 'react';

export interface PageProps {
    title: string;
}

export class Page extends React.Component<PageProps> {
    render() {
        return <html>
            <head>
                <title>{this.props.title}</title>
            </head>
            {this.props.children}
        </html>;
    }
}