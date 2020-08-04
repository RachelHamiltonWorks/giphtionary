const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = 'mongodb+srv://MichaelP:Stringbean86@project3.fwi9o.mongodb.net/users?retryWrites=true&w=majority' 

mongoose.connect(uri).then(
    () => { 
       
        console.log('Connected to Mongo');
        
    },
    err => {
    
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
)

module.exports = mongoose.connection


