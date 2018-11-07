const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
let Dictionary = require('oxford-dictionary-api');
let app_id = 'b3034efd'
let app_key = '88640a6777aa9e71d848c677602515f7'
let dict = new Dictionary(app_id, app_key);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, './english-word/dist/english-word')));

app.post('/Definition', (req, res) => {
    const { Definition } = req.body;
    console.log(Definition)
    dict.find(Definition, (err, data) => {
        if (err) {
            res.sendStatus(404) //if the word doesn't exist
            return;
        }
        res.send(data)
    })
})

//this route to handling all the request above <3
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, './english-word/dist/english-word/index.html')))
});
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Hello world listening on port : ${PORT}`);
});