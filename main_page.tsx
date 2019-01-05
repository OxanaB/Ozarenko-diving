import * as React from "react";
import * as ReactDOM from "react-dom";
import { Menu, MenuProps } from "./menu";
import { mainMenu } from "./navigation";
import { Footer } from "./footer";



let lastProps:
    MenuProps = {
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
    ReactDOM.render(<>
        <Menu {...props} />
        <Footer
            mainMenus={mainMenu}
        />
    </>,
        document.getElementById('root')
    );
}

