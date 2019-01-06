import * as React from 'react';
import { Footer } from './footer';
import { mainMenu } from './navigation';
import { Menu, MenuProps } from './menu';
import { map } from './utils';
import { Meta } from './meta';

export interface PageProps {
    meta: Meta[];
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
                <meta name="fb_admins_meta_tag" content="viktor.ozarenko" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Школа дайвинга Виктора Озаренко. Филиалы в Одессе и Шарм-эль-Шейхе" />
                <meta property="fb:admins" content="viktor.ozarenko" />
                {map(this.props.meta, (x) => {
                    return <meta
                        name={x.name}
                        property={x.property}
                        content={x.content}
                    />
                })}
                <script src="require.js" data-main="main_page"></script>
                <link rel="stylesheet" href="styles.css" />
                <title>{this.props.title}</title>
                <Menu {...menu} />
            </head>
            <body>
                {this.props.children}
            </body>
            <footer>
                <Footer mainMenus={mainMenu} />
            </footer>
        </html>;
    }
}