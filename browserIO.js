'use strict';

// message format hash,cmd,addressId[,value][,addressId[,value]]...
// the hash will be signed with the arduino embedded key
// CTRLR - arduino responses, CTRLC - arduino commands
const CTRLR_ID = 1; // id do dispositivo que esta conectando
const CTRLR_HASH = 2; // hash de resposta ao desafio da chave
const CTRLR_RESP = 3; // lista pares endereco/valor atualizados
const CTRLC_SET = 10; // lista pares endereco/valor para se atualizar
const CTRLC_GET = 11; // lista de enderecos para serrem retornados

// trada das mensagems enviadas pelo/para o navegador
module.exports = function (client, ctrlNSP) {
    client.on('action', (action) => {
      if(action.type === 'MONITOR_UPDATE') {
        let msg = String(CTRLC_SET)+','+action.data.id+','+action.data.value
        console.log('SEND cmd=', msg)
        ctrlNSP.emit('cmd', {data: msg})
      }
    })
  }
