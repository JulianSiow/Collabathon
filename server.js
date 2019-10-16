//--------------------------SETUP SECTION 
//External Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//internal modules
const db = require('./models');
//instanced module
const app = express();

//---------------------------MIDDLEWARE SECTION 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//---------------------------CONFIGURATION VARIABLES SECTION 
const PORT = process.env.PORT || 3000;

//---------------------------ROUTES SECTION 

//--------------View Routes

//--------------HTML Routes

//Home Route
app.get('/', (req, res) => {
    res.sendFile('views/home.html', {
      root: __dirname,
    });
  });

//Subscribe Route
app.get('/subscribe', (req, res) => {
    res.sendFile('views/subscribe.html', {
      root: __dirname,
    });
  });

//Subscribe Success Route
app.get('/subscribe/success', (req, res) => {
    res.sendFile('/views/success.html', {
      root: __dirname,
    });
});

//Owner Dashboard
app.get('/owner', (req, res) => {
    res.sendFile('/views/owner.html', {
      root: __dirname,
    });
});

// app.get('/api/v1/subscribers')

//--------------API Routes

//Index Route

app.get('/api/v1/subscribers', (req, res) => {
    db.Sub.find({}, (err, allSubs) => {
        if(err) console.log(err);
        res.json({
            status: 200,
            count: allSubs.length,
            data: allSubs,
            dateRequested: new Date().toLocaleString(),
        })
    })
})

//Show Route
app.get('/api/v1/subscribers/:name', (req, res) => {
    db.Sub.findOne({name:req.params.name}, (err, foundSub) => {
        if(err) return console.log(err)
        res.json({
            status: 200,
            data: foundSub,
            dateRequested: new Date().toLocaleString(),
        })
    })
})

//Create Route
app.post('/api/v1/new-subscriber', (req, res) => {
    db.Sub.create(req.body, (err, createSub)=>{
        if(err) return console.log(err);
        res.json({
            status: 201,
            data: createSub,
            dateRequested: new Date().toLocaleString(),
        })
    })
})

//---------------------------START SERVER SECTION 
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));