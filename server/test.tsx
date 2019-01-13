import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { OzarenkoDivingPage } from '../ozarenko-diving-page-component';
import { Team } from '../about-us-component';
import { ViktorOzarenko } from '../viktor-ozarenko-component';
import { Feedback } from '../feedback-component';
import { ContactUs } from '../contact-us-component';
import { PadiCourses } from '../padi-courses-component';
import { NdlCourses } from '../ndl-courses-component'; 
import { IdcCourses } from '../idc-component';
import { FreediveCourses } from '../freedive-component';
import { NoviceDiverNdl } from '../novice-diver-ndl-component';
import { DiverNdl } from '../diver-ndl-component';
import { UniversalDiverNdl } from '../universal-diver-ndl-component';
import { AdvUniDiverNdl } from '../adv-univ-diver-ndl-component';
import { RescueDiverNdl } from '../rescue-diver-ndl-component';
import { DivemasterNdl } from '../divemaster-ndl-component';
import { SpecialtyDiverNDL } from '../specialty-diver-ndl-component';
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
        <Page meta={Meta.metaViktorOzarenkoPage} script="viktor-ozarenko-component" title={'Виктор Озаренко, командор дайвинг клуба "Искатели морских сокровищ", Одесса (Украина)'}>
            <Core><ViktorOzarenko /></Core>
        </Page>
    ), 
    './feedback.html': ReactDom.renderToString(
        <Page meta={Meta.metaFeedbackPage} script="feedback-component" title={'Отзывы о дайвиге с нашим клубом в Шарм-эль-Шейхе (Египет)'}>
            <Core><Feedback /></Core>
        </Page>
    ), 
    './contact-us.html': ReactDom.renderToString(
        <Page meta={Meta.metaContactUsPage} script="contact-us-component" title={'Контактная информация'}>
            <Core><ContactUs /></Core>
        </Page>
    ),
    './diving-courses-padi.html': ReactDom.renderToString(
        <Page meta={Meta.metaPadiCourses} script="padi-courses-component" title={'Курсы обучения дайвингу PADI в Одессе и Шарм-эль-Шейхе'}>
            <Core><PadiCourses /></Core>
        </Page>
    ),
    './diving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaNdlCourses} script="ndl-courses-component" title={'Курсы обучения дайвингу по системе NDL в Одессе и Шарм-эль-Шейхе'}>
            <Core><NdlCourses /></Core>
        </Page>
    ),
    './kurs-novice-diver-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaNoviceDiver} script="novice-diver-ndl-component" title={'Начальный курс обучения дайвингу Novice diver NDL в Одессе'}>
            <Core><NoviceDiverNdl /></Core>
        </Page>
    ),
    './kurs-diver-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaDiverNDL} script="diver-ndl-component" title={'Начальный курс обучения дайвингу Diver NDL'}>
            <Core><DiverNdl /></Core>
        </Page>
    ),
    './kurs-universal-diver-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaUniversalDiver} script="universal-diver-ndl-component" title={'Вторая ступень обучения дайвингу курс Universal diver NDL'}>
            <Core><UniversalDiverNdl /></Core>
        </Page>
    ),
    './kurs-advanced-universal-diver-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaAdvancedUniversalDiver} script="adv-univ-diver-ndl-component" title={'Курс Advanced Universal diver NDL'}>
            <Core><AdvUniDiverNdl /></Core>
        </Page>
    ),
    './kurs-rescue-diver-and-medic-first-aid.html': ReactDom.renderToString(
        <Page meta={Meta.metaRescueDiver} script="rescue-diver-ndl-component" title={'Курсы дайвинга Спасатель и Оказание первой помощи NDL'}>
            <Core><RescueDiverNdl /></Core>
        </Page>
    ),
    './kurs-divemaster-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaDivemasterNdl} script="divemaster-ndl-component" title={'Первый профессиональный курс дайвинга Дайвмастер - Divemaster NDL'}>
            <Core><DivemasterNdl /></Core>
        </Page>
    ),
    './kursy-nitrox-night-deep-dry-suit.html': ReactDom.renderToString(
        <Page meta={Meta.metaSpecialtyNdl} script="specialty-diver-ndl-component" title={'Спецкурсы NDL Найтрокс дайвер, Сухой костюм, Deep diver, Night diver'}>
            <Core><SpecialtyDiverNDL /></Core>
        </Page>
    ),
    './instructor-development-course.html': ReactDom.renderToString(
        <Page meta={Meta.metaIdcCourses} script="idc-component" title={'Курсы инструкторов по дайвингу NDL и IANTD от Виктора Озаренко'}>
            <Core><IdcCourses /></Core>
        </Page>
    ),
    './freediving.html': ReactDom.renderToString(
        <Page meta={Meta.metaFreediveCourses} script="freediving-component" title={'Курсы фридайвинга в Шарм эль Шейхе и Одессе'}>
            <Core><FreediveCourses /></Core>
        </Page>
    ),
    './technical-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechnicalDivingPage} script="technical-diving-component" title={'Технический дайвинг с Виктором Озаренко на Черном и на Красном море'}>
            <Core><TechnicalDiving /></Core>
        </Page>
    ),
    './sidemount.html': ReactDom.renderToString(
        <Page meta={Meta.metaSidemountPage} script="sidemount-component" title={'Обучение дайвингу в сайдмаунте (sidemount diving)'}>
            <Core><Sidemount /></Core>
        </Page>
    ),
    './techdiving-courses-iantd.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesIantd} script="techdiving-courses-iantd-component" title={'Курсы технического дайвинга IANTD'}>
            <Core><TechdivingCoursesIantd /></Core>
        </Page>
    ),
    './techdiving-courses-ndl.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechCoursesNdl} script="techdiving-courses-ndl-component" title={'Курсы технического дайвинга NDL'}>
            <Core><TechdivingCoursesNdl /></Core>
        </Page>
    ),
    './rebreather-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaTechDivingRebreather} script="rebreather-component" title={'Ребризер дайвинг на Красном море, обучение. Megaladon & Inspiration'}>
            <Core><Rebreather /></Core>
        </Page>
    ),
    './ceny-diving-sharm.html': ReactDom.renderToString(
        <Page meta={Meta.metaPriceSharm} script="prices-sharm-component" title={'Цены на дайвинг в Шарм эль Шейхе, Египет'}>
            <Core><PriceSharm /></Core>
        </Page>
    ),
    './kids-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaKidsDiving} script="kids-component" title={'Детский дайвинг | Обучение детей дайвингу'}>
            <Core><KidsDiving /></Core>
        </Page>
    ),
    './sharm-try-diving.html': ReactDom.renderToString(
        <Page meta={Meta.metaIntroDiving} script="intro-dive-component" title={'С чего начать занятия дайвингом или пробное погружение с аквалангом'}>
            <Core><IntroDiving /></Core>
        </Page>
    ),
    './diving-strahovka.html': ReactDom.renderToString(
        <Page meta={Meta.metaInsurance} script="insurance-component" title={'Страхование дайверов | международная дайверская страховка'}>
            <Core><Insurance /></Core>
        </Page>
    ),
    './arhiv-akciy-sharm.html': ReactDom.renderToString(
        <Page meta={Meta.metaArchiveSale} script="arhiv-akciy-component" title={'Архив акций и скидок на дайвинг в Шарм эль Шейхе'}>
            <Core><ArchiveSale /></Core>
        </Page>
    ),
    './last-safari-egypt.html': ReactDom.renderToString(
        <Page meta={Meta.metaFleet} script="last-safari-component" title={'Дайвинг сафари в ноябре 2018 по северу Красного моря из Шарма'}>
            <Core><LastSafari /></Core>
        </Page>
    ),
    './redsea-liveaboard-fleet.html': ReactDom.renderToString(
        <Page meta={Meta.metaFleet} script="fleet-component" title={'Сафарийный флот, Шарм-эль-Шейх (Египет)'}>
            <Core><Fleet /></Core>
        </Page>
    ),
    './redsea-liveaboard-south.html': ReactDom.renderToString(
        <Page meta={Meta.metaSouthRoutes} script="south-routes-component" title={'Маршруты дайвинг сафари по югу Красного моря (Египет)'}>
            <Core><SouthRoutes /></Core>
        </Page>
    ),
     './redsea-liveaboard-north.html': ReactDom.renderToString(
        <Page meta={Meta.metaNorthRoutes} script="north-routes-component" title={'Маршруты дайвинг сафари по северу Красного моря (Египет)'}>
            <Core><NorthRoutes /></Core>
        </Page>
    )
};

for (const name in pages) {
    const html = pages[name];
    writeFileSync(name, html, { encoding: 'utf-8' });
}