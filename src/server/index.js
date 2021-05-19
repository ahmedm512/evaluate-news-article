const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081
const dotenv = require('dotenv');
dotenv.config();
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/getData', (req, res) =>{
const blogUrl = req.body.url;
fetch(`${baseUrl}${API_KEY}&of=json&txt&model=general&lang=auto&url=${blogUrl}`)
  .then(response => response.json())
  .then(data => {
     // console.log(data);
      return  blogData = {
        text: data.sentence_list[0].text,
        score_tag : data.score_tag,
        agreement : data.agreement,
        subjectivity : data.subjectivity,
        confidence : data.confidence,
        irony : data.irony
      }
    })
    .then(blogData => res.send(blogData))
    .catch(error => res.send('Invalid Data'))

})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;
