const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, './english-word/dist/english-word')));



//this route to handling all the request above <3
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, './english-word/dist/english-word/index.html')))
});
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Hello world listening on port : ${PORT}`);
});