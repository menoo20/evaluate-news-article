var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
var cors = require('cors')

dotenv.config();
const { detect } = require('./detect');
const app = express()


//things used for the backend server
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'))
app.use(cors());
app.use(express.json());




app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})


app.post('/detect', detect)

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, (error) => {
    if (error) throw new Error(error)
    console.log("Server listening on port 8081")
})


module.exports = {
    app
}
