var fs = require('fs'),
	JSON = require('JSON'),
	_ = require('underscore'),
	render = require(global.DIR + '/app/render.js'),
	crypto = require('crypto');

// File System Database
module.exports = (function(){
	var database = {};

	database.get = function(path, callback){
		fs.readFile(global.DIR + '/data/' + path + '.json', 'utf8', function (err, data) {
			if (err) { console.log(err); callback(false); }
			else {
				//console.log('get', data);
				data = JSON.parse(data);
				if (data) { callback(data); }
				else { callback(false); };
			};
		});
	};

	database.list = function(path, callback){
		fs.readdir(global.DIR + '/data/' + path, function(err, files){
			if(err){ callback(false); }
			else { 
				files = _.map(files, function(v){ return v.replace('.json', ''); })
				callback(files); 
			}
		});
	}

	database.save = function(path, data, callback){
		fs.writeFile(global.DIR + '/data/' + path + '.json', JSON.stringify(data), function (data) {
			//console.log('save', data);
			callback(data); 
		});
	};

	database.update = function(type, res, key){
		key = key || 'name';
		database.list(type, function(files){
        //console.log('list files', type, files);
	       	render.map(files, function(file, output, next){
				var path = type + '/' + file;
	            database.get(path, function(data){
	                //console.log('get path', path, data, typeof data);
                    var name = data[key];
	                sha = crypto.createHash('sha1');  
	                sha.update(name);
	                data.sha = sha.digest('hex');
	                if (file !== data.sha){
		                // TODO: delete the old file
		                path = type +'/'+ data.sha;
	                }
	                database.save(path, data, function(response){
	                    console.log('save file', path, response);
	                    var nameObject = {};
	                    nameObject[name] = type +'/'+ data.sha +'.json';
	                    output.push(nameObject);
	                	next();
	                });                
	            })
			}, function(output){
				res.send(output);
			});
	    });
	}


	return database;
})();