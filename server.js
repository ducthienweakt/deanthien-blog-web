//Install express server
const express = require('express');
var cors = require('cors')
const path = require('path');

const app = express();
app.use(cors())
// Serve only the static files form the dist directory
app.use(express.static('./dist/chaydi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/chaydi/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);