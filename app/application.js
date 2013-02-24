var express = require('express'),
    connect = require('connect'),
    app = global.app = express.createServer(),
    render = require(global.DIR + '/app/render.js');

// APP
app.configure(function(){

    // middleware
    //app.use(express.logger());
    //app.use(express.cookieParser());
    //app.use(express.session({ secret: "12345" })); //Warning: connection.session() MemoryStore is not
    app.use(express.bodyParser());
    
    // STATIC
    app.use('/css',express.static(global.DIR + '/static/css'));
    app.use('/js',express.static(global.DIR + '/static/js'));
    app.use('/content',express.static(global.DIR + '/static/content'));
    
    require(global.DIR + '/app/static.js');

    app.get('/css/', function(req, res) {
        var files = ['style', 'Lane/styles', 'layout', 'forms' ];
        render.css(files, res);
    });
    app.get('/js/', function(req, res) {
        var files = ['jquery-1.8.3.min', 'jquery.scrollTo-min'];
        render.js(files, res);
    });

    // views
    app.set('view engine', 'ejs');
    app.register('.html', require('jade'));
    app.set('view options', { layout: false });

});

module.exports = app;