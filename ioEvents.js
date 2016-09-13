'use strict';

module.exports = function (io) {
  io.on('connection', (socket) => {
    console.log('Client connected')
    socket.on('disconnect', () => console.log('Client disconnected'))

    // actions são enviadas pelo/para o navegador
    socket.on('action', (mon) => {
      console.log('received action', mon)

      if(mon.data.value == 'on')
        io.emit('cmd', { on: '13'})
      else
        io.emit('cmd', { off: '13'})
    })

    /*      */

    // commands são enviadas pelo/para o arduino
    socket.on('cmd', (mon) => {
      console.log('received cmd', mon)

      let action = {type: 'MONITOR_UPDATE', data: { id: mon.id , value: mon.value}}
      io.emit('action', action)

      io.emit('cmd', action)
      console.log('emit action', action)
    })
  })
}


      /*monitors.each((mon) => {
        let action = {type: 'MONITOR_UPDATE', data: { id: mon.id , value: mon.value}}
        io.broadcast.emit('action', action)
        /*
        // TODO: Validação de segurança
        db.Monitor.upsert({
              name: mon.name,
              value: mon.value,
              controllerId: value.controllerId
            }).then(function(test){
                //test returned here as true or false how can i get the inserted id here so i can insert data in other tables using this new id?
            })*/
      //})

/*
  // setInterval(() => io.emit('time', new Date().toTimeString()), 1000)
  let state = []
  let i = 0
  setInterval(() =>
    let id = (++i % 4) + 1
    state[id] = (state[id]==="on")?"off":"on"
    let action = {type: 'MONITOR_UPDATE_VALUE', data: { id:id , value: state[id]}}
    console.log(action)
    io.emit('action', action)
  }, 1000)*/
