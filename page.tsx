import * as React from 'react';
import { Header } from './header-component';
import { Footer } from './footer';
import { mainMenu } from './navigation';
import { map } from './utils';
import { Meta } from './meta';

export interface PageProps {
    meta: Meta[];
    title: string;
    script?: string;
}

export class Page extends React.Component<PageProps> {
    render() {
        return <html>
            <head>
                <meta name="viewport" content="width=device-width,initial-scale=1" charSet="utf-8" />
                <meta name="fb_admins_meta_tag" content="viktor.ozarenko" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Школа дайвинга Виктора Озаренко. Филиалы в Одессе и Шарм-эль-Шейхе" />
                <meta property="fb:admins" content="viktor.ozarenko" />
                {map(this.props.meta, (x, index) => {
                    return <meta key={index}
                        name={x.name}
                        property={x.property}
                        content={x.content}
                    />
                })}
                <script src="/facebook.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133475833-1"></script>
                <script src="google-analytics.js"></script>
                <script src="https://apis.google.com/js/platform.js"></script>
                {
                    this.props.script !== undefined
                        ? <>
                            <script src="/require.js" data-main={this.props.script}></script>
                        </>
                        : null
                }
                <link rel="stylesheet" href="/styles.css" />
                <link href="https://fonts.googleapis.com/css?family=Lobster|Play:400,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet" />
                <title>{this.props.title}</title>
            </head>
            <body>
                <Header />
                <div className="page" id="root">{this.props.children}</div>
                <Footer mainMenus={mainMenu} />
            </body>

        </html>;
    }
}