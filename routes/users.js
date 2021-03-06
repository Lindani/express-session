
/*exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * from Users', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'sign_up', {
    			users : results
    		});
      });
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err){ 
			return next(err);
		}
		
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
            		Username : input.username,
                        Password : input.password
                    
        	};
		connection.query('insert into Users set ?', data, function(err, results) {
        		if (err){
              			console.log("Error inserting : %s ",err );
				return res.redirect("/error?error=" + err)
         		}
          		res.redirect('/');
      		});
	});
};

exports.get = function(req, res, next){
	req.getConnection(function(err, connection){
                var input = JSON.parse(JSON.stringify(req.body));
		var name = {
            		username : input.username,
                        password : input.password
                    
        	};
		connection.query('SELECT * FROM Users WHERE username = ?', [name], function(err,rows,results){
			if(err){
    				console.log("Error Selecting : %s ",err );
			}
                   if (name.username === results.Username && name.password === results.Password ) {
                        console.log(results);
   	               res.render('/hi',{page_title:"Edit Customers - Node.js", data : rows[0]});
  }
		}); 
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
    	var Id = req.params.Id;
    	req.getConnection(function(err, connection){
    		connection.query('UPDATE Users SET ? WHERE Id = ?', [data, Id], function(err, rows){
    			if (err){
              			console.log("Error Updating : %s ",err );
    			}
          		res.redirect('/sign_up');
    		});
    		
    });
};

exports.delete = function(req, res, next){
	var Id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM Users WHERE Id = ?', [Id], function(err,rows){
			if(err){
    				console.log("Error Selecting : %s ",err );
			}
			res.redirect('/sign_up');
		});
	});
};
*/
exports.userCheck = function (req, res, next) {
   
    
    console.log(req.path);
    if (req.session.user){
         next(); 
    }
    else{
         res.redirect("/")
    }
   
}
