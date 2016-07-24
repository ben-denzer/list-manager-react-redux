let express = require('express');
let app = express();
let path = require('path');
let port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendfile('./dist/index.html');
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
});