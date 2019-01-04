import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { TechnicalDiving } from '../technical-diving/TechnicalDiving';
import { writeFileSync } from 'fs'
import { Page } from '../technical-diving/page';
import { metaTechnicalDivingPage, metaSidemountPage } from '../technical-diving/meta-technical-diving';

const pages: any = [{
    './technical-diving/technical-diving.html': ReactDom.renderToString(
        <Page meta={metaTechnicalDivingPage} title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <TechnicalDiving />
        </Page>
    )
},
{
    './technical-diving/sidemount.html': ReactDom.renderToString(
        <Page meta={metaSidemountPage} title={'Обучение дайвингу в сайдмаунте (sidemount diving)'}>
            
        </Page>
    )
},
{
    './technical-diving/techdiving-courses-iantd.html': ReactDom.renderToString(
        <Page meta={metaSidemountPage} title={'Курсы технического дайвинга IANTD'}>
            
        </Page>
    )
},
{
    './technical-diving/techdiving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={metaSidemountPage} title={'Курсы технического дайвинга NDL'}>
            
        </Page>
    )
},
{
    './technical-diving/rebreather-diving.html': ReactDom.renderToString(
        <Page meta={metaSidemountPage} title={'Ребризер дайвинг на Красном море, обучение. Megaladon & Inspiration'}>
            
        </Page>
    )
}
]
for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}