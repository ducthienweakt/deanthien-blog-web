//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// add this code
app.options('*', cors()) // include before other routes


// Serve only the static files form the dist directory
app.use(express.static('./dist/chaydi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/chaydi/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);