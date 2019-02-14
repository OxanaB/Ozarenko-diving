import * as React from 'react';
import { MainMenu } from './navigation';
import { MenuConcern, MenuProps, Menu } from './menu';

export interface DesktopMenuProps {
    mainMenus: MainMenu[];
    className: string;
    activeMainMenuIndex: number | null;
    when: (concer: MenuConcern) => void;
}

export class DesktopMenu extends React.Component<DesktopMenuProps> {
    render() {
        const { mainMenus, activeMainMenuIndex } = this.props;
        const menuProps: MenuProps = {
            mainMenus,
            className: 'desktop-menu',
            activeMainMenuIndex,
            when: () => { }
        };
        return <>
            {
                this.props.activeMainMenuIndex === null
                    ? null
                    : <div className="backdrop" onClick={e => {
                        this.props.when({ about: 'sub-menu-hidden' });
                    }} />

            }
            <Menu {...menuProps} />
        </>
    }
}
