import { Menu, MenuProps } from "./menu";
import ReactDOM = require("react-dom");
import React = require("react");
import { mainMenu } from "./navigation";

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
                rerender(newProps);
                break;
            }
        }
    }
};

rerender(lastProps);

function rerender(props: MenuProps) {
    lastProps = props;
    ReactDOM.render(
        <Menu {...props} />,
        document.getElementById('root')
    );
}