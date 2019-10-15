//--------------------------SETUP SECTION 
//External Modules
const express = require('express');
const bodyparser = require('body-parser');
//internal modules
const db = require('./models');
//instanced module
const app = express();

//---------------------------MIDDLEWARE SECTION 


//---------------------------CONFIGURATION VARIABLES SECTION 
const PORT = process.env.PORT || 3000;

//---------------------------ROUTES SECTION 

//--------------View Routes

//--------------HTML Routes

//Home Route
app.get('/home', (req, res) => {
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

//--------------API Routes

//Index Route

app.get('/api/v1/subscribers'), (req, res) => {
    db.Subs.find({}, (err, allSubs) => {
        if(err) console.log(err);
        res.json({
            status: 200,
            count: allSubs.length,
            data: allSubs,
            dateRequested: new Date().toLocaleString(),
        })
    })
}

app.get('api/v1/subscribers/:name', (req, res) => {
    db.Subs.findOne({name:req.params.name}, (err, foundSub) => {
        if(err) return console.log(err)
        res.json({
            status: 200,
            data: foundSub,
            dateRequested: new Date().toLocaleString(),
        })
    })
})

//---------------------------START SERVER SECTION 
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));