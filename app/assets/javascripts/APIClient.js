/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
  request: function(userInput, filter, callback) {
  	$('.fa-spinner').css("visibility", "visible");
  	$('.fa-spinner').show("fast");
   	$.ajax({
	  //url: "http://vistasearch.herokuapp.com/api/v1/search",
	  url: "http://localhost:3000/api/v1/search",
	  type: 'GET',
	  dataType: 'json',
	  data: {
			q: userInput,
			filter: filter
		},
	  success: function(data) {
	  	console.log(data['posts']);
	    callback(createData(data['posts']));
	  },
	  failure: function(error) {
	    console.log(error);
	  }
	});
  }
};

function createData(json) {
	dataList = [];
	for (var i = 0; i < json.length; i++) {
		type = json[i]['type'];
		if (type == "Twitter") {
			dataList.push(new Tweet(json[i]));
		} else if (type == "Instagram") {
			dataList.push(new Gram(json[i]));
		}
	}

	return dataList;
}

// function getTwitterData(data){
// 	//Create an array to hold tweets
// 	tweetList = [];
// 	//Loop through data creating tweets
// 	for(var i=0; i<data.length; i++)
// 	{
// 	    var tweet = new Tweet(data[i]);
// 	    if(i === 0){
// 		tweetList.push(tweet);
// 	    }
// 	    for(var j=0; j<i; j++){
// 		if(data[j] === data[i]){
// 		    break;
// 		}
// 		else{
// 		    tweetList.push(tweet);
// 		}
// 	    }
// 	}
// 	return tweetList; 
// }

//UI.layout(tweet);
var Tweet = function(data){
	this.id = data.id;
	this.username = data.user;
}

// function getInstagramData(data){
// 		//create an array to hold instagram posts
// 		instagramList = [];
// 		//Loop through data creating grams
// 		for(var i=0; i<data.length;i++)
// 		{
// 				var gram = new Gram(data[i]);
// 				instagramList.push(gram)
// 		}
// 		return instagramList; 
// }	

var Gram = function(data){
	this.username = data.user;
	//this.id = data.caption.from.id;
	this.url = data.image_url
}



  
