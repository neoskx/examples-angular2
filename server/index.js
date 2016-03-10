import http from 'http';
import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import logger from 'morgan';
import compression from 'compression';
import path from 'path';
import middleware from './middleware';

var app = express();
app.server = http.createServer(app);

// Open CORS.
// origin: '*',
// methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// preflightContinue: false
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public'), {maxAge: process.env.PUBLICCACHE||31557600000}));

//mongoose.connect(process.env.MONGODB);
//mongoose.connection.on('error', function () {
//  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
//  process.exit(1);
//});

let MongoClient = mongodb.MongoClient;
let url = process.env.MONGODB || "mongodb://localhost:27017/examples-angular2";

console.log(url);

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // Get the documents collection
  }
});

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function () {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});


export default app;