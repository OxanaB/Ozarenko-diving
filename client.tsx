import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Core } from './core';
import { mainMenu } from './navigation';
import { broke } from './utils';
import { MenuProps } from "./menu";

export function enableClient(Content: new (props: {}) => React.Component<{}, {}, any>) {
    function XXX(props: MenuProps) {
        return <Core menu={props}><Content /></Core>;
    }
    const rootElement = document.getElementById('root');
    let lastProps: MenuProps = {
        mainMenus: mainMenu,
        activeMainMenuIndex: null,
        when: concern => {
            switch (concern.about) {
                case 'main-menu-chosen': {
                    const newProps: MenuProps = {
                        ...lastProps,
                        activeMainMenuIndex: concern.mainMenuIndex
                    };
                    lastProps = newProps;
                    ReactDOM.render(<XXX {...newProps} />, rootElement);
                    break;
                }
                case 'sub-menu-hidden': {
                    const newProps: MenuProps = {
                        ...lastProps,
                        activeMainMenuIndex: null,
                    };
                    lastProps = newProps;
                    ReactDOM.render(<XXX {...newProps} />, rootElement);
                    break;
                }
                default: return broke(concern);
            }
        }
    };
    ReactDOM.hydrate(<XXX {...lastProps} />, rootElement);
}
