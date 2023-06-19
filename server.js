//Install express server
const express = require('express');
const path = require('path');

const app = express();



// Serve only the static files form the dist directory
app.use(express.static('./dist/chaydi'));



app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/chaydi/'}),
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    res.header("Access-Control-Allow-Origin", '*')
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);