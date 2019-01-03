import * as React from 'react';
import { Footer } from '../footer';
import { mainMenu } from '../navigation';
import { Menu, MenuProps } from '../menu';
import { map } from '../utils';
import { metaTechnicalDivingPage } from './meta-technical-diving';

export interface PageProps {
    title: string;
}

export class Page extends React.Component<PageProps> {
    render() {
        const menu: MenuProps = {
            mainMenus: mainMenu,
            activeMainMenuIndex: 0,
            when: () => { }
        };
        return <html>
            <head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <script src="require.js" data-main="main_page"></script>
                <link rel="stylesheet" href="styles.css" />
                {map(metaTechnicalDivingPage, (metaTechnicalDivingPage) => {
            return <meta
                name={metaTechnicalDivingPage.name}
                property={metaTechnicalDivingPage.property}
                content={metaTechnicalDivingPage.content}
            />
        })}
                <title>{this.props.title}</title>
                <Menu {...menu} />
            </head>
            <body>
                {this.props.children}
            </body>
            <footer>
                <Footer mainMenus={mainMenu} subMenus={[]} />
            </footer>
        </html>;
    }
}