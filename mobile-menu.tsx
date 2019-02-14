import * as React from 'react';
import { MainMenu } from './navigation';
import { MenuConcern, MenuProps, Menu } from './menu';

export interface MobileMenuProps {
    mainMenus: MainMenu[];
    className: string;
    activeMainMenuIndex: number | null;
    when: (concern: MenuConcern) => void;
}
export interface MobileMenuState {
    isToOpenDropDownMenu: boolean;
    isToSwitchToCloseButton: boolean;
}
export class MobileMenu extends React.Component<MobileMenuProps, MobileMenuState> {
    state = {
        isToOpenDropDownMenu: false,
        isToSwitchToCloseButton: false
    }
    render() {
        const { mainMenus, activeMainMenuIndex } = this.props;
        const menuProps: MenuProps = {
            mainMenus,
            className: 'mobile-menu',
            activeMainMenuIndex,
            when: () => { }
        };
        return <>
            <div className="dropdown" onClick={e => {
                this.setState({ isToOpenDropDownMenu: true, isToSwitchToCloseButton: true })
            }}></div>
            <div className="close" onClick={e => {
                this.setState({ isToOpenDropDownMenu: false, isToSwitchToCloseButton: false })
            }}></div>
            {
                this.state.isToOpenDropDownMenu ?
                    <Menu {...menuProps} /> : null
            }
        </>
    }
}
