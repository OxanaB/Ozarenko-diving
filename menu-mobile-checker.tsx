import * as React from 'react';
import { Menu, MenuProps } from './menu';
import { to, broke } from './utils';

type Mode = 'nothing' | 'desktop' | 'mobile';

export interface MenuMobileChekerState {
    mode: Mode;
    isMenuOpened: boolean;
}

export class MenuMobileChecker extends React.Component<MenuProps, MenuMobileChekerState> {

    state = to<MenuMobileChekerState>({
        mode: 'nothing',
        isMenuOpened: false
    })

    componentDidMount() {
        const { mode } = this.state;
        const screenWidth = document.body.clientWidth;
        const isMobile = screenWidth < 450;
        switch (mode) {
            case 'nothing': {
                this.setState({ mode: isMobile ? 'mobile' : 'desktop' });
                break;
            }
            case 'mobile': break;
            case 'desktop': break;
            default: return broke(mode);
        }

    }

    render() {
        const { mode, isMenuOpened } = this.state;
        switch (mode) {
            case 'mobile': return isMenuOpened
                ? <>
                <Menu {...this.props} />
                <div className="close" onClick={e => {
                    this.setState({ isMenuOpened: !this.state.isMenuOpened})
                }}>
                </div></>
                : <div className="mobile-menu" onClick={e => {
                    this.setState({ isMenuOpened: !this.state.isMenuOpened })
                }}>

                    <div className="mobile-button"></div>

                </div>;
            case 'desktop': return <Menu {...this.props} />;
            case 'nothing': return null;
            default: return broke(mode);
        }
    }
}