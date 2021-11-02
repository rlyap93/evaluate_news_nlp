const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

projectData = {};

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

const textInput ='';

app.post('/getText', async (req,res) => {
    const resp = await fetch(`${baseUrl}${API_KEY}&of=json&txt=${req.body.text}lang=en`);
    console.log("success in index.js");
    try {
      const data = await resp.json();
      res.send(data);
    } catch (err) {
      console.log("error", err);
    }
})
