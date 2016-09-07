let apiUrl = 'http://localhost:8000';

let loadUserData = (username, password) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/auth/login');
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

        let options = {username, password};
        req.send(JSON.stringify(options));
    });
};

let signupDB = (username, password) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/auth/signup');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
           if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 403) {
                resolve({error: 'username is taken'});
            } else {
                req.status > 500 ? reject('500 err') : reject('400 err');
            }
        };
        req.onerror = () => {
            reject({error: 'onError called', status: 'network error'});
        };

        let options = {username, password};
        req.send(JSON.stringify(options));
    });
};

let addItemToDB = (token, item_name, list_name, comments) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/actions/addItem');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            req.status >= 200 && req.status < 400 ?
                resolve(JSON.parse(req.responseText)) :
                req.status > 500 ?
                    reject('500 error in addItem') :
                    reject('400 error in additem');
        };

        req.onerror = () => {
            reject('onerror called');
        };

        let options = {
            token,
            item_name,
            list_name,
            comments,
            checked: 0
        };
        req.send(JSON.stringify(options));
    });
}

let removeItemFromDB = (token, item_id) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/actions/removeItem');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            req.status >= 200 && req.status < 400 ?
                resolve(JSON.parse(req.responseText)) :
                req.status > 500 ?
                    reject('500 error') :
                    reject('400 error');
        };

        req.onerror = () => {
            reject('onError called');
        };

        let options = {
            token,
            item_id,
        };
        req.send(JSON.stringify(options));
    });
}

export function toggleCheckDB(token, item_id, newStatus) {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/actions/toggleCheck');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            req.status >= 200 && req.status < 400 ?
                resolve(JSON.parse(req.responseText)) :
                req.status > 500 ?
                    reject('500 err') :
                    reject('400 err');
        };

        req.onerror = () => {
            reject('onerror called');
        }

        let options = {
            token,
            item_id,
            newStatus,
        };
        req.send(JSON.stringify(options));
    });
}

let deleteListDB = (token, activeList) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/actions/removeList');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            req.status >= 200 && req.status < 400 ?
                resolve(JSON.parse(req.responseText)) :
                req.status > 500 ?
                    reject('500 err') :
                    reject('400 err');
        };

        req.onerror = () => {
            reject('oneror called');
        };

        let options = {
            token,
            activeList
        };
        req.send(JSON.stringify(options));
    });
};

let checkUsernameDB = (username) => {
    console.log(username, 'in checkUsernameDB');
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/auth/checkUsername');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            if (req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.responseText));
            } else if (req.status === 403) {
                resolve({error: 'username is taken'});
            } else {
                req.status > 500 ? reject('500 err') : reject('400 err');
            }
        };

        req.onerror = () => {
            reject('oneror called');
        };

        req.send(JSON.stringify({username}));
    });
}

export {
    loadUserData,
    addItemToDB,
    removeItemFromDB,
    toggleCheckDB,
    deleteListDB,
    signupDB,
    checkUsernameDB
};