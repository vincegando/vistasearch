/**
	Class to grab whatever is entered in the Search bar and parse it into an array of words. The words are split by spaces.
*/
var Parser = function(keyword) {
  this.keyword = keyword;    // this is the phrase 
 };

 Parser.prototype.parseArray = function (keyword)  {
  return keyword.split(" ");
  }

 

