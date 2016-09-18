'use strict'

let express       = require('express')
   ,socketIO      = require('socket.io')
   ,path          = require('path')
   ,db            = require('./models')
   ,browserIO     = require('./browserIO')
   ,controllerIO  = require('./controllerIO')

let app = express()
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/public'),
                       {'index': ['index.html']}))

// create database
//db.sequelize.sync().then(function() {
  // start http server
  let server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ app.get('port') }`)
  })

  // create socket io
  let io = socketIO(server)

  // get reference to namespace arduino
  let controllerClients = []
  //let controllerNSP = io.of('/ctrl');

  // get reference to namespace browser
  let browserClients = []
  let browserNSP = io.of('/browser');

  browserNSP.on('connection', function(browser){
    console.info('BrowserNSP connected (id=' + browser.id + ').')
    browserClients.push(browser)

    browser.on('disconnect', function() {
      // remove client from array
      var index = browserClients.indexOf(browser)

      if (index != -1) {
        browserClients.splice(index, 1);
        console.info('BrowserNSP disconnected (id=' + browser.id + ').')
      }
    })

    // subscribe socket io events
    browserIO(browser, io)
  })

  io.on('connection', function(ctrl){
    console.info('Controller connected (id=' + ctrl.id + ').')
    controllerClients.push(ctrl)

    ctrl.on('disconnect', function() {
      // remove client from array
      var index = controllerClients.indexOf(ctrl)

      if (index != -1) {
        controllerClients.splice(index, 1);
        console.info('Controller disconnected (id=' + ctrl.id + ').')
      }
    })

    // subscribe socket io events
    controllerIO(ctrl, browserNSP)
  })

//})
