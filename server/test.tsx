import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { DivingClub } from '../about-us/diving-club-component';
import { ViktorOzarenko } from '../about-us/viktor-ozarenko-component';
import { Feedback } from '../about-us/feedback-component';
import { ContactUs } from '../about-us/contact-us-component';
import { TechnicalDiving } from '../technical-diving/technical-dving-component';
import { Sidemount } from '../technical-diving/sidemount-component';
import { TechdivingCoursesIantd } from '../technical-diving/techdiving-courses-iantd-component';
import { TechdivingCoursesNdl } from '../technical-diving/techdiving-courses-ndl-component';
import { Rebreather } from '../technical-diving/rebreather-component';
import { writeFileSync } from 'fs';
import { Page } from '../page';
import * as Meta from '../meta';


const pages: any = {
    './about-us/diving-club.html': ReactDom.renderToString(
        <Page meta={Meta.metaDivingClubPage} title={'О клубе | Дайв-клуб Искатели морских сокровищ, Одесса (Украина), Шарм-эль-Шейх (Египет)'}>
           <DivingClub />
        </Page>
    ),
    './about-us/viktor-ozarenko.html': ReactDom.renderToString(
        <Page meta={Meta.metaViktorOzarenkoPage} title={'Виктор Озаренко, командор дайвинг клуба "Искатели морских сокровищ", Одесса (Украина)'}>
           <ViktorOzarenko />
        </Page>
    ),'./about-us/feedback.html': ReactDom.renderToString(
        <Page meta={Meta.metaFeedbackPage} title={'Отзывы о дайвиге с нашим клубом в Шарм-эль-Шейхе (Египет)'}>
           <Feedback />
        </Page>
    ),'./about-us/contact-us.html': ReactDom.renderToString(
        <Page meta={Meta.metaContactUsPage} title={'Контактная информация'}>
           <ContactUs />
        </Page>
    ),
    './technical-diving/technical-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechnicalDivingPage} title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <TechnicalDiving />
        </Page>
    ),
    './technical-diving/sidemount.html': ReactDom.renderToString(
        <Page meta={Meta.metaSidemountPage} title={'Обучение дайвингу в сайдмаунте (sidemount diving)'}>
            <Sidemount />
        </Page>
    ),
    './technical-diving/techdiving-courses-iantd.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesIantd} title={'Курсы технического дайвинга IANTD'}>
            <TechdivingCoursesIantd />
        </Page>
    ),
    './technical-diving/techdiving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesNdl} title={'Курсы технического дайвинга NDL'}>
            <TechdivingCoursesNdl />
        </Page>
    ),
    './technical-diving/rebreather-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechDivingRebreather} title={'Ребризер дайвинг на Красном море, обучение. Megaladon & Inspiration'}>
            <Rebreather />
        </Page>
    )
};

for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}