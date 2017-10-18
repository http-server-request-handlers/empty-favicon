/* eslint consistent-return: off */

'use strict'

/**
 * module dependencies
 */
var url = require( 'url' )

/**
 * @param {IncomingMessage} req
 * @param {string} [req.url]
 *
 * @param {ServerResponse} res
 * @param {Function} res.send
 * @param {Function} res.setHeader
 *
 * @param {Function} next
 *
 * @returns {*}
 */
function faviconRequestHandler( req, res, next ) {
  var icon = ''

  if ( typeof req.url !== 'string' ) {
    return next()
  }

  if ( url.parse( req.url ).pathname !== '/favicon.ico' ) {
    return next()
  }

  res.setHeader( 'content-length', icon.length )
  res.setHeader( 'content-type', 'image/x-icon' )
  res.send( icon )
}

module.exports = faviconRequestHandler
