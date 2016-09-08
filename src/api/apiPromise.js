const apiPromise = (options, path) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', path);
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 401) {
                reject({error: 'auth error', status: 'ok'});
            } else if (req.status < 500) {
                reject({error: 'request error', status: 'network error'});
            } else {
                reject({error: 'server error', status: 'network error'});
            }
        };
        req.onerror = () => {
            reject({error: 'onError called', status: 'network error'});
        };

        req.send(JSON.stringify(options));
    });
};

export default apiPromise;