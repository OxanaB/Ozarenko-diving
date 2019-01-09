import { MainMenu, SubMenu, mainMenu } from "./navigation";
import * as React from "react";
import { map } from "./utils";
import { Menu, MenuProps } from "./menu";

export interface CoreProps {
    menu?: MenuProps;
}

const defaultMenu: MenuProps = {
    mainMenus: mainMenu,
    activeMainMenuIndex: 0,
    when: () => { }
};
export class Core extends React.Component<CoreProps> {

    render() {
        return <>
            <Menu {...this.props.menu || defaultMenu} />
            {this.props.children}
        </>
    }
}


