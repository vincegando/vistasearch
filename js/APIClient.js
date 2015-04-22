
/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
	request: function(socialMediaObject, callback) {
		socialMediaObject.search(callback);
	}
};


/*
 *
 * Class for making twitter api requests
 *
 */

var Twitter = function(params, auth) {
	// TODO: Pass auth as json with app_id and app_secret for twitter
	this.params = params;
	this.auth = auth;
};

// Interface with twitter search endpoint
Twitter.prototype.search = function(callback) {
	var uri = "https://api.twitter.com/1.1/search/tweets.json?q=";
	for (var i = 0; i < this.params.length; i++) {
		var query = "%23" + this.params[i];
		if (i < this.params.length-1) {
			query += "+";
		}
		uri += query;
	}

	// Set headers

	// Possibly make an option for user to choose
	uri += "&result_type=popular";

	$.ajax({
		url: uri,
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			callback(data);
		},
		failure: function(error) {
			console.log(error);
		}
	});
	

};

// Example usage
//
// var t = new Twitter(["ucsb", "rowing"], {"app_id" : "90u598435yruieqh", "app_secret" : "9382452ytiuewjkhf"});
//
// APIClient.request(t, function(data) {
//
// });