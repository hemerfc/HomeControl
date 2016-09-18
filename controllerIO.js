'use strict'

// message format hash,cmd,addressId[,value][,addressId[,value]]...
// the hash will be signed with the arduino embedded key
// CTRLR - arduino responses, CTRLC - arduino commands
const CTRLR_ID = 1; // id do dispositivo que esta conectando
const CTRLR_HASH = 2; // hash de resposta ao desafio da chave
const CTRLR_RESP = 3; // lista pares endereco/valor lidos
const CTRLC_SET = 10; // lista pares endereco/valor para se atualizar
const CTRLC_GET = 11; // lista de enderecos para serrem retornados

// trada das mensagems enviadas pelo/para o arduino
module.exports = function (ctrl, browserNSP) {
  ctrl.on('cmd', (msg) => {
    console.log('MSG from (', ctrl.id,'):', msg)
    const cparts = msg.data.split(",")
    let cmd = parseInt(cparts[0], 10)
    let port = parseInt(cparts[1], 10)
    let val = parseInt(cparts[2], 10)

    if (cparts !== undefined) {
      switch (cmd) {
        case CTRLR_ID:

        break
        case CTRLR_HASH:

        break
        case CTRLR_RESP:
          // TODO: atualizar o banco de dados
          // encaminha para todos os browsers, arrumar isso aki
          console.log('SEND action: ', {type: 'MONITOR_UPDATE', data: { id:port, value:val } })
          browserNSP.emit('action', {type: 'MONITOR_UPDATE', data: { id:port, value:val } } )
        break
      }
    }
  })
}
