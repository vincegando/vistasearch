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
	    instagramList = getInstagramData(data[?]); //to be filled in, and add an if statement
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
	this.username = data.user;
	//this.hashtags = data.hashtags.text;
	this.text = data.text;
	//this.result_type = data.metadata.result_type;
	//this.retweet_counter = data.statuses.retweet_count;
	this.id = data.id;
	//this.name = data.user.name;
	//this.profile_image = data.statuses.user.profile_image_url; //url
}

function getInstagramData(data){
		//create an array to hold instagram posts
		instagramList = [];
		//Loop through data creating grams
		for(var i=0; i<data.length;i++)
		{
				var gram = new Gram(data[i]);
				instagramList.push(gram)
		}
		return instagramList; 
}	

var Gram = function(data){
	this.username = data.user.username;
	this.id = data.caption.from.id;
	this.text = data.caption.text; 
}



  
