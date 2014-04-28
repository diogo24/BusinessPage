
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
 // added dependencies
  , config = require('./config.js')
  , mongoose = require('mongoose');

// connect db
mongoose.connect(config.db.mongodb);

// added dependencies
var models = require('./models') ({ mongoose: mongoose })
    , controllers = require('./controllers') ({ mongoose: mongoose });
     
var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpException: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
//app.get('/users', user.list);

routes.setup({
    'controllers': controllers,
    'app': app
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
