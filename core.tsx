import { MainMenu, SubMenu } from "./navigation";
import * as React from "react";
import { map } from "./utils";
import { Menu, MenuProps } from "./menu";

export interface CoreProps {
    menu: MenuProps;
}

export class Core extends React.Component<CoreProps> {

    render() {
        return <>
            <Menu {...this.props.menu} />
            {this.props.children}
        </>
    }
}


