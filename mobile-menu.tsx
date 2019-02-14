import * as React from 'react';
import { makeMenu } from './menu';

export interface MobileMenuState {
    isToOpenDropDownMenu: boolean;
    isToSwitchToCloseButton: boolean;
}
export class MobileMenu extends React.Component<{}, MobileMenuState> {
    state = {
        isToOpenDropDownMenu: false,
        isToSwitchToCloseButton: false
    }
    render() {
        return <>
            <div className="dropdown" onClick={e => {
                this.setState({ isToOpenDropDownMenu: true, isToSwitchToCloseButton: true })
            }}></div>
            <div className="close" onClick={e => {
                this.setState({ isToOpenDropDownMenu: false, isToSwitchToCloseButton: false })
            }}></div>
            {
                this.state.isToOpenDropDownMenu
                    ? makeMenu("mobile-menu")
                    : null
            }
        </>
    }
}
