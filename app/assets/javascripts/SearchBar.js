/*
 *
 *  Class for interfacing with the search bar on the navbar
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
    var userQuery = parser.parseArray(text);
    APIClient.request(userQuery, function(data) {
      for(i = 0; i < data.length; i++) {
        UI.layoutTweet(data[i]);
      }
    });
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