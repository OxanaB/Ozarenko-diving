import * as React from 'react';
import { MenuConcern, makeMenu } from './menu';

export interface DesktopMenuProps {
    activeMainMenuIndex: number | null;
    when: (concer: MenuConcern) => void;
}

export class DesktopMenu extends React.Component<DesktopMenuProps> {
    render() {
        return <>
            {
                this.props.activeMainMenuIndex === null
                    ? null
                    : <div className="backdrop" onClick={() => {
                        this.props.when({ about: 'sub-menu-hidden' });
                    }} />
            }
            {
                makeMenu("desktop-menu")
            }
        </>;
    }
}
