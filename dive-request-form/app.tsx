import * as React from 'react';
import { Form, FormProps, FormConcern } from './form';
import { matchOptions, to, broke, minus } from './utils';
import { diveLevelOptions } from './type-ahead-options';
import { sendNewDiveRequest } from './xhr-post-reqiest';

export class App extends React.Component<{}, FormProps> {

    private when = (concern: FormConcern) => {
        switch (concern.about) {
            case 'name': {
                switch (concern.name.about) {
                    case 'field-input': {
                        const { value } = concern.name;
                        const isValid = value !== '';
                        this.setState({
                            name: { value, isValid }
                        });
                        break;
                    }
                    default: return broke(concern.name.about);
                }
                break;
            }
            case 'email': {
                switch (concern.email.about) {
                    case 'field-input': {
                        const { value } = concern.email;
                        const isValid = /([+a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(value) && value !== '';
                        this.setState({
                            email: { value, isValid }
                        });
                        break;
                    }
                    default: return broke(concern.email.about);
                }
                break;
            }
            case 'telephone': {
                switch (concern.telephone.about) {
                    case 'field-input': {
                        const { value } = concern.telephone;
                        const isValid = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(value) && value !== '';
                        this.setState({
                            phone: { value, isValid }
                        });
                        break;
                    }
                    default: return broke(concern.telephone.about);
                }
                break;
            }
            case 'level-input': {
                const { pickedLevels } = this.state;
                if (pickedLevels.length === 0) {
                    const matchedOptions = matchOptions(diveLevelOptions, concern.level);
                    this.setState({
                        level: concern.level,
                        option: matchedOptions,
                        isOptionToShow: true
                    });
                } else {
                    const noPicked = minus(diveLevelOptions, pickedLevels);
                    const matchedOptions = matchOptions(noPicked, concern.level);
                    this.setState({
                        level: concern.level,
                        option: matchedOptions,
                        isOptionToShow: true
                    });
                }
                break;
            }
            case 'level-picked': {
                const { level } = concern;
                const { pickedLevels } = this.state;
                const newPickedLevels = pickedLevels.concat(level);
                this.setState({
                    pickedLevels: newPickedLevels,
                    isOptionToShow: false,
                    level: ''
                });
                break;
            }
            case 'hide-options': {
                this.setState({
                    isOptionToShow: false
                });
                break;
            }
            case 'picked-level-to-delete': {
                const { level } = concern;
                const { pickedLevels } = this.state;
                const newPickedLevels = pickedLevels.filter(oldLevel => oldLevel !== level);
                this.setState({
                    pickedLevels: newPickedLevels,
                    level: ''
                });
                break;
            }
            case 'new-tag-added': {
                const { pickedLevels } = this.state;
                const { level } = concern;
                const addTagLevel = pickedLevels.concat(level);
                this.setState({
                    pickedLevels: addTagLevel
                });
                break;
            }
            case 'hotel-input': {
                this.setState({
                    hotel: concern.hotel
                });
                break;
            }
            case 'message-input': {
                this.setState({
                    message: concern.message
                });
                break;
            }
            case 'show-calendar': {
                this.setState({
                    isCalendarToShow: concern.isCalendarToShow
                });
                break;
            }
            case 'date-is-picked': {
                this.setState({
                    pickedDate: concern.pickedDate,
                    isCalendarToShow: false
                });
                break;
            }
            case 'change-language': {
                this.setState({
                    language: concern.language
                });
                break;
            }
            case 'send-new-requiest': {
                const { newDiveRequest } = concern;
                async function upload() {
                    await sendNewDiveRequest(newDiveRequest);
                }
                this.setState({
                    newDiveRequest: concern.newDiveRequest,
                });
                upload();
                break;
            }
            default: return broke(concern);
        }
    }

    state = to<FormProps>({
        language: 'ru-RU',
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        phone: { value: '', isValid: false },
        level: '',
        option: null,
        isOptionToShow: false,
        pickedLevels: [],
        pickedDate: new Date(),
        isCalendarToShow: false,
        hotel: '',
        message: '',
        when: this.when,
        newDiveRequest: undefined
    });
    render() {
        const { state } = this;
        return <Form {...state} />;
    }
}
