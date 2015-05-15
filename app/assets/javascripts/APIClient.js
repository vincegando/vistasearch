/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
  request: function(userInput, filter, callback) {
  	$('.fa-spinner').css("visibility", "visible");
  	$('.fa-spinner').show("fast");
  	// @param url type string
  	// @param type of type string
  	// @param dataType of type string
  	// @param data of type array
  	// success is a function that runs createData on a successfull ajax request 
  	// failure is a function that logs the error if the request fails
   	$.ajax({
		  url: "http://vistasearch.herokuapp.com/api/v1/search",
		  //url: "http://localhost:3000/api/v1/search",
		  type: 'GET',
		  dataType: 'json',
		  data: {
				q: userInput,
				filter: filter
			},
		  success: function(data) {
		    callback(createData(data['posts']));
		  },
		  failure: function(error) {
		    console.log(error);
		  }
		});
  }
};
/**
	This function creates
*/
function createData(json) {
	dataList = [];
	var truth = false;
	for (var i = 0; i < json.length; i++) {
		type = json[i]['type'];
		truth = false;
		if (type == "Twitter") {
			possibleTweet = new Tweet(json[i]);
			for (var j=0; j < i; j++){
				if(possibleTweet.id === dataList[j].id){
					truth = true;
				}
			}
			if(truth === false){
				dataList.push(possibleTweet);
			}
		}

		if (type == "Instagram") {
			dataList.push(new Gram(json[i]));
		}
	}
	return dataList;
}


//UI.layout(tweet);
var Tweet = function(data){
	this.id = data.id;
	this.username = data.user;
}

var Gram = function(data){
	this.link = data.link;
}



  
