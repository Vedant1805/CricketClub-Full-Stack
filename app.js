const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const {
    Schema
} = mongoose;
const fs = require('fs')
const port = 300
var http = require('http')

mongoose.connect('mongodb://localhost/contact', {
    useNewurlParser: true
});

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname + '/index.html', ))
})

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

const Contact = mongoose.model('contact', contactSchema);

app.post('/', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        // res.status(200).sendFile(path.join(__dirname + '/index.html'))
        res.send("This item has been saved to database")
    }).catch(() => {
        res.status(400).send("Item was not saved to database becuase of incomplete details")
    })
})


app.listen(port, () => {
    console.log(`This express module file is running on port ${port}`);
})