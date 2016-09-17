const apiPromise = (options, path) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', path);
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 401) {
                reject({error: '401', status: 'Invalid Username or Password'});
            } else if (req.status === 403) {
                reject({error: '403', status: 'expired token'});
            } else if (req.status < 500) {
                reject({error: '400', status: 'Network Error, Please Try Again'});
            } else {
                reject({error: '500', status: 'Server Error'});
            }
        };
        req.onerror = () => {
            reject({error: 'onError called', status: 'Network Error, Please Try Again'});
        };
        req.send(JSON.stringify(options));
    });
};

export default apiPromise;