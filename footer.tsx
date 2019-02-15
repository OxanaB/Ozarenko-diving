import { MainMenu } from './navigation';
import * as React from 'react';
import { map } from './utils';

export interface FooterProps {
    mainMenus: MainMenu[];
}

export class Footer extends React.Component<FooterProps> {

    render() {
        return <div className="footer">
            <div className="links-container">
                {map(this.props.mainMenus, (mainMenu, index) => {
                    return <div className="columns" key={index}>
                        {mainMenu.name}
                        {<div className="column-content">{
                            map(mainMenu.subMenus, subMenu => {
                                return <div className="row-in-column" key={subMenu.url}>
                                    <a href={subMenu.url}>
                                        {subMenu.name}
                                    </a>
                                </div>;
                            })
                        }</div>

                        }
                    </div>;
                })}
            </div>
            <div id="fb-root">
                <div className="social-media-widgets">
                    <div className="widget-1"> <div className="fb-page"
                        data-href="https://www.facebook.com/MarineTreasureHunters/"
                        //  data-tabs="timeline,messages"
                        data-small-header="false"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/MarineTreasureHunters/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/MarineTreasureHunters/">
                                Дайвинг клуб &quot;Искатели морских сокровищ&quot;</a></blockquote>
                    </div></div>
                    <div className="widget-2">
                        <div className="fb-like" data-share="true" data-width="450" data-show-faces="true">{'\n'}</div>
                        <div className="g-ytsubscribe" data-channelid="UC5f2ywQOvq4FC6tPhBkwcDg" data-layout="full" data-count="default">{'\n'}</div>
                        <div><a href="http://divetop.ru?SID=1629" /><img src="http://divetop.ru/baner.php?SID=1629&t=1&c=1"
                            height="31" width="88" alt="Дайвинг - рейтинг DIVEtop" /></div>
                    </div>

                </div>

            </div>
            <p>© 2019 ДАЙВИНГ КЛУБ ИСКАТЕЛИ МОРСКИХ СОКРОВИЩ. Технический и рекреационный дайвинг с Виктором Озаренко. Одесса (Украина).</p>
        </div>;
    }
}


