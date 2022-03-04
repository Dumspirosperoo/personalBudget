const { response } = require('express');
const express = require('express') ;
const app = express() ;
const PORT = 3000 ;
bodyparser = require('body-parser');

const envelopes = require('envelopes.js');
app.use('/envelopes', envelopes);




app.get('/', (req,res,next) =>{
    res.send('Hello World')
})



app.listen(PORT, () => {
    console.log('server is running successfully seanna')
}) ;