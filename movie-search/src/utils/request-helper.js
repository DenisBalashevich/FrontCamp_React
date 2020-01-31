const apiEndpoint = 'https://reactjs-cdp.herokuapp.com/';

export function GET(url, params) {
    const endPoint = getTargetUrl(url, params);
    return fetch(endPoint)
        .then(response => response.json())
        .catch(ex => console.log(ex));
}

function getTargetUrl(path, params) {
    let url = apiEndpoint;
    if (path) {
        url += path;
    }
    if (params) {
        url += '?' + Object.entries(params).map(param => `${param[0]}=${param[1]}`).join('&');
    }

    return url;
}