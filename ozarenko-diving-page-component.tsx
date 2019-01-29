import * as React from 'react';
import { map } from './utils';
import { mainPageLinkElements } from './main-page-elements';
import { enableClient } from './client';

export class OzarenkoDivingPage extends React.Component {
    render() {
        return <>
            <div className="main-page-link-elements">
                {map(mainPageLinkElements, (elements, index) => {
                    return <div className="main-page-link-element" key={index.toString()}>
                        <div className="main-page-link-element-image">
                            <a href={elements.buttonLink}>
                                <img src={elements.image} alt={elements.imageAlt} />
                            </a>
                        </div>
                        <div className="main-page-link-element-text">
                            <h2>{elements.title}</h2>
                            <h4>{elements.subtitle}</h4>
                            <h3><span>{elements.price}</span></h3>
                            <p>{elements.description}</p>
                            <a
                                className="button"
                                href={elements.buttonLink}>{elements.buttonText}</a>
                        </div>
                    </div>
                })}
            </div>
        </>

    }
}

declare var window: any;
if (typeof window !== 'undefined') {
    enableClient(OzarenkoDivingPage);
}

