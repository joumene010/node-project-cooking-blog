const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://joe:joe@cluster0.thblp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');