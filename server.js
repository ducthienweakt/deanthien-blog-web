//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Cors Configuration - Start
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })
  //Cors Configuration - End


// Serve only the static files form the dist directory
app.use(express.static('./dist/chaydi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/chaydi/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);