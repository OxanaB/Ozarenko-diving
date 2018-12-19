import React = require("react");
import { MainMenu as MainMenu } from "./navigation";
import { map } from "./utils";

export interface MainMenuChosenConcern { 
    about: 'main-menu-chosen'; 
    mainMenuIndex: number; 
}

export interface MenuProps {
    mainMenus: MainMenu[];
    activeMainMenuIndex: number | null;
    when: (concern: MainMenuChosenConcern) => void;
}

export class Menu extends React.Component<MenuProps> {
    render() {
        return <div className='main-menus'>
            {map(this.props.mainMenus, (mainMenu, mainMenuIndex) => {
                return <div className="main-menu" onClick={() => {
                    this.props.when({ about: 'main-menu-chosen', mainMenuIndex });
                }}>
                    {mainMenu.name}
                    {
                        mainMenuIndex === this.props.activeMainMenuIndex
                            ? <div className='sub-menus'>{
                                map(mainMenu.subMenus, subMenu => {
                                    return <div className="sub-menu">{subMenu.name}</div>;
                                })
                            }</div>
                            : null
                    }
                </div>;
            })}
        </div>
    }
}