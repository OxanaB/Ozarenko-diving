import { mainMenu } from "./navigation";
import * as React from "react";
import { Menu, MenuProps } from "./menu";

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
            <Menu {...this.props.menu || defaultMenu} />
            {this.props.children}
        </>
    }
}


