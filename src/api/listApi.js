let apiUrl = 'http://localhost:8000';

let loadUserData = (username, password) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('POST', apiUrl + '/auth/login');
        req.setRequestHeader('Content-Type', 'application/json');

        req.onload = () => {
            req.status >= 200 && req.status < 400 ?
                resolve(JSON.parse(req.responseText)) :
                req.status > 500 ?
                    reject('500 error in loadUser') :
                    reject('400 error in loadUser');
        };
        req.onerror = () => {
            reject('onerror called in loadUser');
        };

        let options = {username, password};
        req.send(JSON.stringify(options));
    });
};

let addItem = (item_name, list_name, comments) => {
    console.log('hit in listApi.js');
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
            console.log('onerror called in addItem');
        };

        let options = {
            username: 'ben',
            password: 'qweruio',
            item_name,
            list_name,
            comments,
            checked: 0
        };
        req.send(JSON.stringify(options));
    });
}

export {
    loadUserData,
    addItem
};