import * as React from 'react';
import { mainPageLinkElements } from './main-page-elements';
import { map } from './utils';

export class MainPageComponent extends React.Component {
    render() {
        return <div className="page">
            <div className="slider-main-page">

            </div>

            <div className="main-page-link-elements">
                {map(mainPageLinkElements, (elements) => {
                    return <div className="main-page-link-element">
                        <div className="main-page-link-element-image">
                            <a href={elements.buttonLink}>
                                <img src={elements.image} alt={elements.imageAlt} />
                            </a>
                        </div>
                        <div className="main-page-link-element-text">
                            <h2>{elements.title}</h2>
                            <h3>{elements.subtitle}</h3>
                            <h3>{elements.price}</h3>
                            <p>{elements.description}</p>
                            <a
                                className="button-go-to-page"
                                href={elements.buttonLink}>{elements.buttonText}</a>
                        </div>
                    </div>
                })}
            </div>

            <div className="news-feed">

            </div>
        </div>
    }
}