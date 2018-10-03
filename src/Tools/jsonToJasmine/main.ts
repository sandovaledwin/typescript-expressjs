import * as express from "express";
import * as path    from "path";

const app  = express();
const port = 8081;

app.get( '/', ( request, response ) => {
  //response.send( 'Hello from Express!' );
  response.render( 'index', { title: 'Express' } );
});

app.listen( port, ( err : any ) => {

  if ( err ) {
    return console.log('something bad happened', err);
  }

  console.log( `server is listening on ${port}` );

});

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

// public folder setup for static files
app.use( express.static( path.join( __dirname, 'public' ) ) );