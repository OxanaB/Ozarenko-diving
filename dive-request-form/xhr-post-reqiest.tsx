import { DiveRequest } from "./dive-requests";

export function sendNewDiveRequest(request: DiveRequest): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = 'https://q5bou17el5.execute-api.us-east-1.amazonaws.com/default/send-email-from-webform';
        const data = JSON.stringify({ request })
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
