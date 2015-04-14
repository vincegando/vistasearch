/*
 *
 *	Class for interfacing with the search bar on the navbar
 *
 */

var SearchBar = SearchBar || {
	// Methods

	// Set filter for search
	filter: function(type) {
		SocialMediaManager.setFilter(type);
		alert(SocialMediaManager.currentFilter);
	},

	// Get text from the search bar and pass it to parser
	queryText: function() {
		var text = $('.form-control').val();
		var parser = new Parser();
		alert(parser.parseArray(text));

	}
}


// Deal with enter key being clicked
$(document).ready(function() {
	$(".form-control").keyup(function (e) {
	    if (e.keyCode == 13) {
	        SearchBar.queryText();
	    }
	});
});

