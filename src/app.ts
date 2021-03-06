import "reflect-metadata"; // this shim is required
import * as bodyParser from "body-parser";
import * as logger     from "morgan";
import * as express    from "express";
import { useExpressServer } from "routing-controllers";
import { UserController   } from "./Controllers/UserController";

const app : any = express();

app.use( logger( "dev", {
    skip: function (req, res) { return res.statusCode < 400 }
  }) 
);

//enable CORS: OPTIONS response
app.options( "/*", function( req : any, res : any, next : any ){
  res.header( 'Access-Control-Allow-Origin',  '*' );
  res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS' );
  res.header( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With' );
  res.sendStatus( 200 );
});

//use json form parser middlware
app.use( bodyParser.json() );

//use query string parser middlware
app.use( bodyParser.urlencoded({
  extended: true
}));

// creates express app, registers all controller routes and returns you express app instance
useExpressServer( app, {
  controllers: [ UserController ] // we specify controllers we want to use
});

// run express application on port 3000
app.listen( 3000 );