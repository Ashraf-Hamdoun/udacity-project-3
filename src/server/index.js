// Variables
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const PORT = 8081;
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})


// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`);
})

/****************************************** */

// Routes & Requests
/** POST route */
app.post('/adds', addData);

function addData(req, res) {
    
    mockAPIResponse.text = req.body.text;
    mockAPIResponse.agreement = req.body.agreement;
    mockAPIResponse.confidence = req.body.confidence;
    mockAPIResponse.scoreTag = req.body.scoreTag;
    mockAPIResponse.irony = req.body.irony;
    mockAPIResponse.subjectivity = req.body.subjectivity;
    
    // See it in the terminal
    console.log(mockAPIResponse);
}

/** GET route */
// Data whitch client requested it
app.get('/get', sendData);

/* when the client ask for data, the app send this*/
function sendData(req, res) {
    res.send(mockAPIResponse);
}

module.exports = { app } ;