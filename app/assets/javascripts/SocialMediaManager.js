/*
 *
 *  Struct for type of social media
 *
 */
var SocialMediaType = {
  All: 0,
  Twitter: 1,
  Instagram: 2
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

