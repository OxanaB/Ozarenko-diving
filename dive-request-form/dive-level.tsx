import * as React from 'react';
import { localizer } from './language';

export interface NewTagConcern {
    about: 'new-tag-added';
    level: string;
}

export interface LevelInputConcern {
    about: 'level-input';
    level: string;
}

export interface LevelPickedConcern {
    about: 'level-picked';
    level: string;
}

export interface HideLevelOptionsConcern {
    about: 'hide-options';
    isOptionToShow: boolean;
}

export interface PickedLevelToDeleteConcern {
    about: 'picked-level-to-delete';
    level: string;
}

export type DiveLevelConcern = LevelInputConcern | LevelPickedConcern
    | PickedLevelToDeleteConcern | NewTagConcern | HideLevelOptionsConcern;

export interface DiveLevelProps {
    language: string;
    level: string;
    option: string[] | null;
    isOptionToShow: boolean;
    pickedLevels: string[];
    when: (concern: DiveLevelConcern) => void;
}

export class DiveLevel extends React.Component<DiveLevelProps> {
    render() {
        const { level, option, isOptionToShow, pickedLevels, language } = this.props;

        return <>
            <label>
            <div>{localizer.useCorrectLanguage(language).form[3]}</div>
                <div><input type="text" value={level} placeholder="Сертификат (если есть)"
                    onChange={e => {
                        this.props.when({
                            about: 'level-input',
                            level: e.currentTarget.value
                        });
                    }}
                    onKeyDown={({ keyCode }) => {
                        if (keyCode === 13) {
                            this.props.when({
                                about: 'new-tag-added',
                                level
                            });
                        }
                        if (keyCode === 27) {
                            this.props.when({
                                about: 'hide-options',
                                isOptionToShow
                            });
                        }
                    }} /></div>
                {
                    option !== null && isOptionToShow
                        ? <div className="options">{option.map(machedOption => {
                            return <div key={machedOption}>
                                <a href="#" onClick={e => {
                                    e.preventDefault();
                                    this.props.when({
                                        about: 'level-picked',
                                        level: machedOption,
                                    });
                                }}>{machedOption}</a></div>;

                        })}</div>
                        : null
                }
                {pickedLevels.map(level => {
                    return <div className="tags" key={level}>
                        {level}
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            this.props.when({
                                about: 'picked-level-to-delete',
                                level
                            });
                        }}><sup>x</sup></a></div>;
                })}
            </label>
        </>;
    }
}
