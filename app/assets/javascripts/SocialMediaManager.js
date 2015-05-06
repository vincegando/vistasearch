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

  setFilter: function(filter) {
    SocialMediaManager.currentFilter = filter;
  }
};

