import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { OzarenkoDivingPage } from '../ozarenko-diving-page-component';
import { Team } from '../about-us-component';
import { ViktorOzarenko } from '../viktor-ozarenko-component';
import { Feedback } from '../feedback-component';
import { ContactUs } from '../contact-us-component';
import { TechnicalDiving } from '../technical-diving-component';
import { Sidemount } from '../sidemount-component';
import { TechdivingCoursesIantd } from '../techdiving-courses-iantd-component';
import { TechdivingCoursesNdl } from '../techdiving-courses-ndl-component';
import { Rebreather } from '../rebreather-component';
import { PriceSharm } from '../prices-sharm-component';
import { IntroDiving } from '../intro-dive-component';
import { KidsDiving } from '../kids-component';
import { Insurance } from '../insurance-component';
import { ArchiveSale } from '../arhiv-akciy-component';
import { LastSafari } from '../last-safari-component';
import { Fleet } from '../fleet-component';
import { NorthRoutes } from '../north-routes-component';
import { SouthRoutes } from '../south-routes-component';
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
    ), './feedback.html': ReactDom.renderToString(
        <Page meta={Meta.metaFeedbackPage} script="feedback-component" title={'Отзывы о дайвиге с нашим клубом в Шарм-эль-Шейхе (Египет)'}>
            <Core><Feedback /></Core>
        </Page>
    ), './contact-us.html': ReactDom.renderToString(
        <Page meta={Meta.metaContactUsPage}script="contact-us-component" title={'Контактная информация'}>
            <Core><ContactUs /></Core>
        </Page>
    ),
    './technical-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechnicalDivingPage}script="technical-diving-component" title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <Core><TechnicalDiving /></Core>
        </Page>
    ),
    './sidemount.html': ReactDom.renderToString(
        <Page meta={Meta.metaSidemountPage}script="sidemount-component" title={'Обучение дайвингу в сайдмаунте (sidemount diving)'}>
            <Core><Sidemount /></Core>
        </Page>
    ),
    './techdiving-courses-iantd.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesIantd}script="techdiving-courses-iantd-component" title={'Курсы технического дайвинга IANTD'}>
            <Core><TechdivingCoursesIantd /></Core>
        </Page>
    ),
    './techdiving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesNdl}script="techdiving-courses-ndl-component" title={'Курсы технического дайвинга NDL'}>
            <Core><TechdivingCoursesNdl /></Core>
        </Page>
    ),
    './rebreather-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechDivingRebreather}script="rebreather-component" title={'Ребризер дайвинг на Красном море, обучение. Megaladon & Inspiration'}>
            <Core><Rebreather /></Core>
        </Page>
    ),
    './ceny-diving-sharm.html': ReactDom.renderToString(
        <Page meta={Meta.metaPriceSharm}script="prices-sharm-component" title={'Цены на дайвинг в Шарм эль Шейхе, Египет'}>
            <Core><PriceSharm /></Core>
        </Page>
    ),
    './kids-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaKidsDiving}script="kids-component" title={'Детский дайвинг | Обучение детей дайвингу'}>
            <Core><KidsDiving /></Core>
        </Page>
    ),
    './sharm-try-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaIntroDiving}script="intro-dive-component" title={'С чего начать занятия дайвингом или пробное погружение с аквалангом'}>
            <Core><IntroDiving /></Core>
        </Page>
    ),
    './diving-strahovka.html': ReactDom.renderToString(
        <Page meta={Meta.metaInsurance}script="insurance-component" title={'Страхование дайверов | международная дайверская страховка'}>
            <Core><Insurance /></Core>
        </Page>
    ),
    './arhiv-akciy-sharm.html': ReactDom.renderToString(
        <Page meta={Meta.metaArchiveSale}script="arhiv-akciy-component" title={'Архив акций и скидок на дайвинг в Шарм эль Шейхе'}>
            <Core><ArchiveSale /></Core>
        </Page>
    ),
    './last-safari-egypt.html.html': ReactDom.renderToString(
        <Page meta={Meta.metaFleet}script="last-safari-component" title={'Дайвинг сафари в ноябре 2018 по северу Красного моря из Шарма'}>
            <Core><LastSafari /></Core>
        </Page>
    ),
    './redsea-liveaboard-fleet.html': ReactDom.renderToString(
        <Page meta={Meta.metaFleet}script="fleet-component" title={'Сафарийный флот, Шарм-эль-Шейх (Египет)'}>
            <Core><Fleet /></Core>
        </Page>
    ),
    './redsea-liveaboard-south.html': ReactDom.renderToString(
        <Page meta={Meta.metaSouthRoutes}script="south-routes-component" title={'Маршруты дайвинг сафари по югу Красного моря (Египет)'}>
            <Core><SouthRoutes /></Core>
        </Page>
    ),
     './redsea-liveaboard-north.html': ReactDom.renderToString(
        <Page meta={Meta.metaNorthRoutes}script="north-routes-component" title={'Маршруты дайвинг сафари по северу Красного моря (Египет)'}>
            <Core><NorthRoutes /></Core>
        </Page>
    )
};

for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}