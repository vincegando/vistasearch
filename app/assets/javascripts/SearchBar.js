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
  },

  // Get text from the search bar and pass it to parser
  queryText: function() {
    var text = $('.form-control').val();
    var parser = new Parser();
    var userQuery = parser.parseArray(text);
    $('.main-content-list').empty();
    APIClient.request(userQuery, SocialMediaManager.currentFilter,function(data) {
      UI.layoutData(data);
      $('.fa-spinner').css("visibility", "hidden");
      $('.fa-spinner').hide("fast");
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