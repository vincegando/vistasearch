/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
  request: function(userInput, callback) {
   	$.ajax({
	  url: "http://localhost:3000/api/v1/twitter",
	  type: 'GET',
	  dataType: 'json',
	  data: {q: userInput},
	  success: function(data) {
	    callback(data);
	  },
	  failure: function(error) {
	    console.log(error);
	  }
	});
  }
};





  
