const { response } = require('express');
const express = require('express') ;
const app = express() ;
const envelopes = express.Router(); 
module.export = envelopes;


envelopes.use(':/id',(req,res,next) => {
res.send()
})






const env = [ 
    {
      name:'food',
      budget: 500, 
      spend: 0, 
      remaining: function(){return this.budget - this.spend ; },
    }, 
    {
      name: 'clothes',
      budget: 200, 
      spend: 0, 
      remaining: function(){return this.budget - this.spend ; },
    },
    {
      name: 'utilities',
      budget: 200, 
      spend: 2, 
      remaining: function(){return this.budget - this.spend ; },
    }
]

let value = env[2].remaining();
console.log(value);