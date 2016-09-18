'use strict'

let expect = require('chai').expect
let io = require('socket.io-client');

let arduinoURL = 'http://0.0.0.0:3000/ctrl';
let browserURL = 'http://0.0.0.0:3000/browser';

let options = {
  transports: ['websocket'],
  'force new connection': true
};

describe("Socket Server",function(){

  it('Should received connection on ctrl and browser namespaces', function(done) {
    var count = 0
    var arduino = io.connect(arduinoURL, options)
    var browser = io.connect(browserURL, options)

    arduino.on('connect', function (data){
      count = count + 1;
      if(count == 2) {
        arduino.disconnect()
        browser.disconnect()
        done()
      }
    })

    browser.on('connect', function (data){
      count = count + 1;
      if(count == 2) {
        arduino.disconnect()
        browser.disconnect()
        done()
      }
    })
  })

  it('Should pass cmd CTRLR_RESP to respective connected client as MONITOR_UPDATE', function(done) {
    var msg = '3,1,1'
    var arduino = io.connect(arduinoURL, options)
    var browser = io.connect(browserURL, options)
    // TODO: validate if response reached only the owner of arduino of origin
    browser.on('action', function(action) {
      expect(action.type).to.equal('MONITOR_UPDATE')
      expect(action.data).to.equal(msg)
      arduino.disconnect()
      browser.disconnect()
      done()
    })

    arduino.emit('cmd', msg)
  })

  it('Should pass action MONITOR_UPDATE to respective arduino as CMD', function(done) {
    var arduino = io.connect(arduinoURL, options)
    var browser = io.connect(browserURL, options)

    // TODO: validate if response reached only the owner of arduino of origin
    arduino.on('cmd', function(cmd) {
      console.log('RECV cmd=',  cmd)
      expect(cmd).to.equal('10,1,0') // CTRLC_SET,id,value
      arduino.disconnect()
      browser.disconnect()
      done()
    })

    let action = {type: 'MONITOR_UPDATE', data: { id:1 , value: 0}}
    browser.emit('action', action)
  })

})

var stop = new Date().getTime();
while(new Date().getTime() < stop + 1000) { }
