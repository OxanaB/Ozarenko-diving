import * as React from 'react';
import { MenuProps, makeMenu } from './menu';
import { mainMenu } from './navigation';

export interface CoreProps {
    menu?: MenuProps;
}
const defaultMenu: MenuProps = {
    mainMenus: mainMenu,
    activeMainMenuIndex: null,
    when: () => { }
};
export interface CoreState {
    isToOpenDropDownMenu: boolean;
    isToSwitchToCloseButton: boolean;
}
export const MenuForMobile = makeMenu('mobile-menu');
export const MenuForDesktop = makeMenu('desktop-menu');

export class Core extends React.Component<CoreProps, CoreState> {
    state = {
        isToOpenDropDownMenu: false,
        isToSwitchToCloseButton: false
    };
    render() {
        return <>
            <MenuForDesktop {...this.props.menu || defaultMenu} />
            {
                !this.state.isToSwitchToCloseButton ?
                    <div className="dropdown" onClick={() => {
                        this.setState({ isToOpenDropDownMenu: true, isToSwitchToCloseButton: true });
                    }}></div>
                    : <div className="close" onClick={() => {
                        this.setState({ isToOpenDropDownMenu: false, isToSwitchToCloseButton: false });
                    }}></div>
            }
            {
                this.state.isToOpenDropDownMenu ?
                    <MenuForMobile {...this.props.menu || defaultMenu} />
                    : null
            }
            {this.props.children}
        </>;
    }
}
