import { mainMenu } from "./navigation";
import * as React from "react";
import { MenuProps } from "./menu";
import { MenuMobileChecker } from "./menu-mobile-checker";

export interface CoreProps {
    menu?: MenuProps;
}

const defaultMenu: MenuProps = {
    mainMenus: mainMenu,
    activeMainMenuIndex: null,
    when: () => { }
};
export class Core extends React.Component<CoreProps> {

    render() {
        return <>
            <MenuMobileChecker {...this.props.menu || defaultMenu} />
            {this.props.children}
        </>
    }
}


