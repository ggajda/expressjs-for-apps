const
    express = require('express'),
    path = require('path'),
    client = path.join(__dirname, 'dist/'),
    port = process.env.PORT || 5000;

app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(client));

app.get('/', (req, res) => {
    res.sendFile(client + 'index.html');
});

app.listen(port, () => console.log('server listening at http://localhost:' + port));