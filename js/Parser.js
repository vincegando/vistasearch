// we are making a class to grab the words in search box 



var Parser = function(keyword) {
  this.keyword = keyword;    // this is the phrase 
 };

 Parser.prototype.parseArray = function (keyword)  {
 	return keyword.split(" ");
 	}

 

