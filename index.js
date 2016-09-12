'use strict';
let express  = require('express')
   ,socketIO = require('socket.io')
   ,path     = require('path')
   ,db       = require('./models')
   ,ioEvents = require('./ioEvents')

let app = express()
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/public'),
                       {'index': ['index.html']}))

// create database
db.sequelize.sync().then(function() {
  // start http server
  let server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ app.get('port') }`)
  })

  // create socket io
  global.io = socketIO(server)
  // subscribe socket io events
  ioEvents(global.io)
});
