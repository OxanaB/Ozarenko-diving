import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { OzarenkoDivingPage } from '../ozarenko-diving-page-component';
import { Team } from '../about-us-component';
import { ViktorOzarenko } from '../viktor-ozarenko-component';
import { Feedback } from '../about-us/feedback-component';
import { ContactUs } from '../about-us/contact-us-component';
import { TechnicalDiving } from '../technical-diving/technical-diving-component';
import { Sidemount } from '../technical-diving/sidemount-component';
import { TechdivingCoursesIantd } from '../technical-diving/techdiving-courses-iantd-component';
import { TechdivingCoursesNdl } from '../technical-diving/techdiving-courses-ndl-component';
import { Rebreather } from '../technical-diving/rebreather-component';
import { PriceSharm } from '../diving-sharm-el-sheikh/prices-sharm-component';
import { Insurance } from '../diving-sharm-el-sheikh/insurance-component';
import { NorthRoutes } from '../liveaboard/north-routes-component';
import { SouthRoutes } from '../liveaboard/south-routes-component';
import { writeFileSync } from 'fs';
import { Page } from '../page';
import * as Meta from '../meta';
import { Core } from '../core';

const pages: any = {
    './index.html': ReactDom.renderToString(
        <Page meta={Meta.metaMainPage} script="ozarenko-diving-page-component" title={'Школа дайвинга Виктора Озаренко. Филиалы в Одессе и Шарм-эль-Шейхе'}>
            <Core><OzarenkoDivingPage /></Core>
        </Page>
    ),
    './about-us.html': ReactDom.renderToString(
        <Page meta={Meta.metaDivingClubPage} script="about-us-component" title={'О клубе | Дайв-клуб Искатели морских сокровищ, Одесса (Украина), Шарм-эль-Шейх (Египет)'}>
            <Core><Team /></Core>
        </Page>
    ),
    './about-viktor-ozarenko.html': ReactDom.renderToString(
        <Page meta={Meta.metaViktorOzarenkoPage}script="viktor-ozarenko-component" title={'Виктор Озаренко, командор дайвинг клуба "Искатели морских сокровищ", Одесса (Украина)'}>
            <Core><ViktorOzarenko /></Core>
        </Page>
    ), './about-us/feedback.html': ReactDom.renderToString(
        <Page meta={Meta.metaFeedbackPage} script="feedback-component" title={'Отзывы о дайвиге с нашим клубом в Шарм-эль-Шейхе (Египет)'}>
            <Core><Feedback /></Core>
        </Page>
    ), './about-us/contact-us.html': ReactDom.renderToString(
        <Page meta={Meta.metaContactUsPage}script="contact-us-component" title={'Контактная информация'}>
            <Core><ContactUs /></Core>
        </Page>
    ),
    './technical-diving/technical-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechnicalDivingPage}script="technical-diving-component" title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <Core><TechnicalDiving /></Core>
        </Page>
    ),
    './technical-diving/sidemount.html': ReactDom.renderToString(
        <Page meta={Meta.metaSidemountPage}script="sidemount-component" title={'Обучение дайвингу в сайдмаунте (sidemount diving)'}>
            <Core><Sidemount /></Core>
        </Page>
    ),
    './technical-diving/techdiving-courses-iantd.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesIantd}script="techdiving-courses-iantd-component" title={'Курсы технического дайвинга IANTD'}>
            <Core><TechdivingCoursesIantd /></Core>
        </Page>
    ),
    './technical-diving/techdiving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesNdl}script="techdiving-courses-ndl-component" title={'Курсы технического дайвинга NDL'}>
            <Core><TechdivingCoursesNdl /></Core>
        </Page>
    ),
    './technical-diving/rebreather-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechDivingRebreather}script="rebreather-component" title={'Ребризер дайвинг на Красном море, обучение. Megaladon & Inspiration'}>
            <Core><Rebreather /></Core>
        </Page>
    ),
    './diving-sharm-el-sheikh/ceny-diving-sharm.html': ReactDom.renderToString(
        <Page meta={Meta.metaPriceSharm}script="prices-sharm-component" title={'Цены на дайвинг в Шарм эль Шейхе, Египет'}>
            <Core><PriceSharm /></Core>
        </Page>
    ),
    './diving-sharm-el-sheikh/diving-strahovka.html': ReactDom.renderToString(
        <Page meta={Meta.metaInsurance}script="insurance-component" title={'Страхование дайверов | международная дайверская страховка'}>
            <Core><Insurance /></Core>
        </Page>
    ),
    './liveaboard/redsea-south.html': ReactDom.renderToString(
        <Page meta={Meta.metaSouthRoutes}script="south-routes-component" title={'Маршруты дайвинг сафари по югу Красного моря (Египет)'}>
            <Core><SouthRoutes /></Core>
        </Page>
    ), './liveaboard/redsea-north.html': ReactDom.renderToString(
        <Page meta={Meta.metaNorthRoutes}script="north-routes-component" title={'Маршруты дайвинг сафари по северу Красного моря (Египет)'}>
            <Core><NorthRoutes /></Core>
        </Page>
    )
};

for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}