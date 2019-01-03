import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { TechnicalDiving } from '../technical-diving/TechnicalDiving';
import { writeFileSync } from 'fs'
import { Page } from '../technical-diving/page';

const pages: any = {
    './technical-diving/technical-diving.html': ReactDom.renderToString(
        <Page title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <TechnicalDiving />
        </Page>
    )
}
for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}