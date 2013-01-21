var fs = require('fs'),
	async = require('async'),
	_ = require('underscore');

// APP
module.exports = (function(){
	var render = {};

	render.map = function(values, innerFunction, callback) {
	    var output = [];
	    var queue = _.map(values, function(value){
	    	return function(next){
	        	//console.log('remember to call next()', value);
	        	innerFunction(value, output, next);	            
	        };
	    });
	    async.waterfall(queue, function(){
	        callback(output);
	    });
	};

	render.static = function(folder, fileType, files, res) {
		render.map(files, function(value, output, next){
			fs.readFile(global.DIR + folder +'/'+ value +'.'+ fileType, 'utf8', function (err, data) {
                if (err) { console.log(err); callback(false); }
                else {
                    //console.log(data);
                    output.push(data);
                }
                next();
            });
		}, function(output){
			res.send(output.join(' '));
		});
	}

	render.css = function(files, res){
		res.header('Content-Type', 'text/css');
		render.static('/static/css', 'css', files, res);
	}

	render.js = function(files, res){
		res.header('Content-Type', 'text/javascript');
		render.static('/static/js', 'js', files, res);
	}

	return render;
})();