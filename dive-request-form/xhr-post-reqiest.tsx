import { DiveRequest } from './dive-requests';

export function sendNewDiveRequest(request: DiveRequest): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://diverequest.ozarenko-diving.com';
        const data = JSON.stringify({ request });
        console.log(data);
        xhr.onload = function () {
            const json = xhr.responseText;
            const body = JSON.parse(json);
            resolve(body);
        };
        xhr.onerror = function (error) {
            console.error(error);
            reject(error);
        };
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
    });
}
