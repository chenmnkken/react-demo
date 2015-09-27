var koa = require( 'koa' );
var logger = require( 'koa-logger' );
var router = require( 'koa-router' )();
var indexRoute = require( './route/index' );

var app = koa();

app.use( logger() );

indexRoute( router );

app.use(router.routes());

app.listen( 3002, '127.0.0.1' );
