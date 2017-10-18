/* eslint global-require: off */

'use strict'

var faviconRequestHandler = require( '../src' )
var sinon = require( 'sinon' )
var tap = require( 'tap' )

tap.test( 'emptyFavicon no url',
  function ( t ) {
    var req = require( './fixtures/req-minimum' )
    var res = require( './fixtures/res-minimum' )
    var next = sinon.spy()

    faviconRequestHandler( req, res, next )

    t.true( next.called, 'next() called' )
    t.end()
  }
)

tap.test( 'emptyFavicon url not /favicon.ico',
  function ( t ) {
    var req = require( './fixtures/req-url-not-favicon' )
    var res = require( './fixtures/res-minimum' )
    var next = sinon.spy()

    faviconRequestHandler( req, res, next )

    t.true( next.called, 'next() called' )
    t.end()
  }
)

tap.test( 'emptyFavicon url is /favicon.ico',
  function ( t ) {
    var req = require( './fixtures/req-url-favicon' )
    var res = require( './fixtures/res-minimum' )
    var next = sinon.spy()

    faviconRequestHandler( req, res, next )

    t.true( next.notCalled, 'next() not called' )

    t.equal(
      'content-length:0;content-type:image/x-icon;',
      res.header,
      'res.header equals the expected header `content-length:0;content-type:image/x-icon;`'
    )

    t.end()
  }
)
