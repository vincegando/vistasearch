/*
 *
 *  Struct for type of social media
 *
 */
var SocialMediaType = {
  All: ["Twitter", "Instagram"],
  Twitter: ["Twitter"],
  Instagram: ["Instagram"]
};




/*
 *
 *  Class for keeping track of the current seach filter
 *
 */
var SocialMediaManager = SocialMediaManager || {
  currentFilter: SocialMediaType.All,

// function to change the filter depending on  what the user chooses on the Search Bar
  setFilter: function(filter) {
    SocialMediaManager.currentFilter = filter;
  }
};

