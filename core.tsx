import * as React from "react";
import { MenuProps, makeMenu } from "./menu";
import { mainMenu } from "./navigation";

export interface CoreProps {
    menu?: MenuProps;
}
const defaultMenu: MenuProps = {
    mainMenus: mainMenu,
    activeMainMenuIndex: null,
    when: () => { }
};
export const MenuForMobile = makeMenu('mobile-menu');
export const MenuForDesktop = makeMenu('desktop-menu');

export class Core extends React.Component<CoreProps> {
    state = {
        isToOpenDropDownMenu: false,
        isToSwitchToCloseButton: false
    }
    render() {
        return <>
            <MenuForDesktop {...this.props.menu || defaultMenu} />
            <MenuForMobile {...this.props.menu || defaultMenu} />
            {this.props.children}
        </>
    }
}
