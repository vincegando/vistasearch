/*
 *  Class for interfacing with the search bar on the navbar
 */
var SearchBar = SearchBar || {
  // Methods

  // Set filter for search
  // @param type is either All, Twitter, or Instagram
  filter: function(type) {
    SocialMediaManager.setFilter(type);
  },

  // Get text from the search bar and pass it to parser
  // Parse the input and pass the userQuery to the APIClient
  // Call the request data functionfrom Social Media APIs
  // Also call the User Interface layout data function and
  queryText: function() {
    var text = $('.form-control').val();
    var parser = new Parser();
    var userQuery = parser.parseArray(text);
    $('.main-content-list').empty();
    APIClient.request(userQuery, SocialMediaManager.currentFilter, function(data) {
      UI.layoutData(data);

      $('.fa-spinner').css("visibility", "hidden");  // This is the animated spinner that appears
						     // when a search is run. Here it is being hidden
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
