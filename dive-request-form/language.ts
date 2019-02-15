interface Localization {
    days: string[];
    months: string[];
    form: string[];
}

interface Languages {
    [name: string]: Localization;
}

class Localizer {
    constructor(
        private languages: Languages,
        private defaultLocalization: Localization
    ) {
    }
    useCorrectLanguage(name: string): Localization {
        const found = this.languages[name];
        if (found !== undefined) { return found; }
        return this.defaultLocalization;
    }
}

const ru: Localization = {
    days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'],
    form: ['Имя, фамилия', 'E-mail', 'Номер телефона', 'Ваш дайверский уровень',
        'Дата приезда', 'Отель', 'Ваше сообщение', 'Отправить заявку', 'обязательно к заполнению']
};

const en: Localization = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'],
    form: ['Name', 'E-mail', 'Phone number', 'Dive level (certification)',
        'Arrival date', 'Hotel', 'Your message', 'Submit', 'required']
};

const languages: Languages = {
    'ru-RU': ru,
    'en-US': en
};

export const localizer = new Localizer(languages, en);
