import * as React from 'react';
import { Header } from './header-component';
import { Menu, MenuProps } from './menu';
import { Footer } from './footer';
import { mainMenu } from './navigation';
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
                <meta name="viewport" content="width=device-width,initial-scale=1" charSet="utf-8" />
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
                <script src="/facebook.js"></script>
                {/* <script src="/require.js" data-main="main_page"></script> */}
                <link rel="stylesheet" href="/styles.css" />
                <link href="https://fonts.googleapis.com/css?family=Lobster|Play:400,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet" />
                <title>{this.props.title}</title>
            </head>
            <body>
                <div className="entire-page" id="root" >
                    <Header />
                    <div className="page">
                        {this.props.children}
                    </div>
                    <Footer mainMenus={mainMenu} />
                </div>
            </body>

        </html>;
    }
}