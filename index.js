app.post('/issue-updated', addon.authenticate(), function (req, res) {
        var httpClient = addon.httpClient(req);
 
        var key = req.body.issue.key;
 
        var array = [];
        httpClient.get('/rest/api/2/issue/' + key + '/properties/myproperty', function(err, res, body){
 
            // Push properties in array
 
            var url = '/rest/api/2/issue/' + key + '/properties/myproperty';
            var args = {
                entities: array
            };
 
            console.log("TEST!");
 
            httpClient.put({url: url, json: args}, function(err, res, body) {
                console.log("Request");
                console.log(err);
                console.log(body);
            });
 
        });
    }
);