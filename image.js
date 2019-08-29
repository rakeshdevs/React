import {getApiUrl} from "../config";

export function getSecureImage(token, url) {

    if(!url) return;

    var headers = {
        'Authorization': 'Bearer ' + token,
        'Accept': '*.*',
    };

    const fetchOptions = { method: 'GET', headers: headers };
    return fetch(`${getApiUrl()}api/file?url=${encodeURIComponent(url.split('/').slice(3).join('/'))}`, fetchOptions)
        .then(response => response.blob());
}