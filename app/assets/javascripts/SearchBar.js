/*
 *  Class for interfacing with the search bar on the navbar
 */
var SearchBar = SearchBar || {
  // Methods

  // Set filter for search
  // @param type is either All, Twitter, or Instagram
  // @param index the index of the button
  filter: function(type, index) {
    $('.plain-button').css('color', 'black');
    SocialMediaManager.setFilter(type);
    if (index < 3) {
      $('.plain-button:eq('+index+')').css('color', 'red');
    }
  },
  // Get text from the search bar and pass it to parser
  // Parse the input and pass the userQuery to the APIClient
  // Call the request data functionfrom Social Media APIs
  // Also call the User Interface layout data function and
  // @param parser is of type Parser

  queryText: function() {
    var text = $('.form-control').val();
    var parser = new Parser();
    var userQuery = parser.parseArray(text);
    $('.main-content-list').empty();
    APIClient.request(userQuery, SocialMediaManager.currentFilter, function(data) {
      UI.layoutData(data);
      
      // This is the animated spinner that appears
      // when a search is run. Here it is being hidden
      $('.fa-spinner').css("visibility", "hidden");
      $('.fa-spinner').hide("fast");
    });
  }

};


// Deal with enter key being clicked
$(document).ready(function() {
  $(".form-control").keyup(function (e) {
      if (e.keyCode == 13) {
          SearchBar.queryText();
      }
  });
});
