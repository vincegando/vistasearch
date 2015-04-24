/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
  request: function(userInput, callback) {
   	$.ajax({
	  //url: "http://enigmatic-spire-7549.herokuapp.com/api/v1/twitter",
	  url: "http://localhost:3000/api/v1/twitter",
	  type: 'GET',
	  dataType: 'json',
	  data: {
			q: userInput
			
		  },
	  success: function(data) {
			tweetList = getTwitterData(data['tweets']); // add if statement later
	    callback(tweetList);
	  },
	  failure: function(error) {
	    console.log(error);
	  }
	});
  }
};

function getTwitterData(data){
	//Create an array to hold tweets
	tweetList = []; 
	//Loop through data creating tweets
	for(var i=0; i<data.length; i++)
	{
		var tweet = new Tweet(data[i]);
		tweetList.push(tweet);
	}
	return tweetList; 
}

//UI.layout(tweet);
var Tweet = function(data){
	console.log(data);
	this.username = data.user;
	//this.hashtags = data.hashtags.text;
	this.text = data.text;
	//this.result_type = data.metadata.result_type;
	//this.retweet_counter = data.statuses.retweet_count;
	this.id = data.id;
	//this.name = data.user.name;
	//this.profile_image = data.statuses.user.profile_image_url; //url
}

	




  
