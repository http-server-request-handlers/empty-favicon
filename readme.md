## http-server-request-handlers-empty-favicon
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

an http.Server request handler that handles requests for `/favicon.ico`.

when a request is made to `/favicon.ico` this middleware will return an empty favicon.

## table of contents
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## installation
```bash
npm install http-server-request-handlers-empty-favicon
```

## api
```javascript
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
function faviconRequestHandler( req, res, next )
```

## usage
### basic
```javascript
var express = require( 'express' )
var app = express()
var emptyFavicon = require( 'http-server-request-handlers-empty-favicon' )

app.use( emptyFavicon )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/http-server-request-handlers/empty-favicon/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/http-server-request-handlers/empty-favicon?branch=master
[mit-license]: https://raw.githubusercontent.com/http-server-request-handlers/empty-favicon/master/license.txt
[npm-image]: https://img.shields.io/npm/v/http-server-request-handlers-empty-favicon.svg
[npm-url]: https://www.npmjs.com/package/http-server-request-handlers-empty-favicon
[nsp-image]: https://nodesecurity.io/orgs/http-server-request-handlers/projects/c76b02e5-1a4b-45e5-9753-289653f1fbca/badge
[nsp-url]: https://nodesecurity.io/orgs/http-server-request-handlers/projects/c76b02e5-1a4b-45e5-9753-289653f1fbca
[travis-image]: https://travis-ci.org/http-server-request-handlers/empty-favicon.svg?branch=master
[travis-url]: https://travis-ci.org/http-server-request-handlers/empty-favicon
