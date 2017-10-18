'use strict'

var res = {
  header: '',
  send: function ( msg ) {
    return msg
  },
  setHeader: function ( header, value ) {
    this.header += header + ':' + value + ';'
  }
}

module.exports = res
