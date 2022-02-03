const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.once('open', function(){
  console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');
