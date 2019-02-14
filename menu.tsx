import * as React from 'react';
import { MainMenu as MainMenu } from "./navigation";
import { map } from "./utils";

export interface MainMenuChosenConcern {
    about: 'main-menu-chosen';
    mainMenuIndex: number;
}
export interface SubMenuHiddenConcern {
    about: 'sub-menu-hidden';
}

export type MenuConcern = MainMenuChosenConcern | SubMenuHiddenConcern;

export interface MenuProps {
    mainMenus: MainMenu[];
    activeMainMenuIndex: number | null;
    when: (concern: MenuConcern) => void;
}
export interface MenuState {
    isToOpenDropDownMenu: boolean;
    isToSwitchToCloseButton: boolean;
}
export function makeMenu(className: string) {
    return class Menu extends React.Component<MenuProps> {
        state = {
            isToOpenDropDownMenu: false,
            isToSwitchToCloseButton: false
        }
        render() {
            return <>
                {
                    this.props.activeMainMenuIndex === null
                        ? null
                        : <div className="backdrop" onClick={() => {
                            this.props.when({ about: 'sub-menu-hidden' });
                        }} />
                }
                <div className={className}>
                    {map(this.props.mainMenus, (mainMenu, mainMenuIndex) => {
                        return <div className="main-menu" key={mainMenu.name}
                            onClick={() => {
                                this.props.when({
                                    about: 'main-menu-chosen',
                                    mainMenuIndex
                                });
                            }}>
                        {mainMenu.name}
                            {
                                mainMenuIndex === this.props.activeMainMenuIndex
                                    ? <div className="sub-menu" key={mainMenu.subMenus.toString()}>{
                                        map(mainMenu.subMenus, subMenu => {
                                            return <a href={subMenu.url} className="sub-menu-item" key={subMenu.url}>
                                                {subMenu.name}
                                            </a>
                                        })
                                    }</div>
                                    : null
                            }
                        </div>
                    })}
                </div>
            <div className="dropdown" onClick={() => {
                    this.setState({ isToOpenDropDownMenu: true, isToSwitchToCloseButton: true })
                }}></div>
                <div className="close" onClick={() => {
                    this.setState({ isToOpenDropDownMenu: false, isToSwitchToCloseButton: false })
                }}></div>
                {
                    this.state.isToOpenDropDownMenu ?
                        <div className={className}>
                            {map(this.props.mainMenus, (mainMenu, mainMenuIndex) => {
                                return <div className="main-menu" key={mainMenu.name}
                                    onClick={() => {
                                        this.props.when({
                                            about: 'main-menu-chosen',
                                            mainMenuIndex
                                        });
                                    }}>
                        {mainMenu.name}
                                    {
                                        mainMenuIndex === this.props.activeMainMenuIndex
                                            ? <div className="sub-menu" key={mainMenu.subMenus.toString()}>{
                                                map(mainMenu.subMenus, subMenu => {
                                                    return <a href={subMenu.url} className="sub-menu-item" key={subMenu.url}>
                                                        {subMenu.name}
                                                    </a>
                                                })
                                            }</div>
                                            : null
                                    }
                                </div>
                            })}
                        </div> : null
                }
            </>
        }
    }
}
