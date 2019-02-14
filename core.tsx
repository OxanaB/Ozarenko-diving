import * as React from "react";
import { MobileMenu, MobileMenuProps } from "./mobile-menu";
import { DesktopMenu, DesktopMenuProps } from "./desktop-menu";

export interface CoreProps {
    menu: DesktopMenuProps | MobileMenuProps;
}

export class Core extends React.Component<CoreProps> {
    render() {
        const { menu: { mainMenus, activeMainMenuIndex, className } } = this.props;
        const desktopMenuProps: DesktopMenuProps = {
            mainMenus, className,
            activeMainMenuIndex,
            when: () => { }
        };
        const mobileMenuProps: MobileMenuProps = {
            mainMenus, className,
            activeMainMenuIndex,
            when: () => { }
        };
        return <>
            <DesktopMenu {...desktopMenuProps} />
            <MobileMenu {...mobileMenuProps} />
            {this.props.children}
        </>
    }
}


// export interface CoreProps {
//     menu?: MenuProps;
// }

// const defaultMenu: MenuProps = {
//     mainMenus: mainMenu,
//     activeMainMenuIndex: null,
//     when: () => { }
// };
// export class Core extends React.Component<CoreProps> {

//     render() {
//         return <>
//             <MenuMobileChecker {...this.props.menu || defaultMenu} />
//             {this.props.children}
//         </>
//     }
// }
