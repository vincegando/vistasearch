/*
 *
 * Class for interfacing with social media apis
 *
 */

var APIClient = APIClient || {
  request: function(socialMediaObject, callback) {
    socialMediaObject.search(callback);
  }
};




// AJAX example
// $.ajax({
//   url: uri,
//   type: 'GET',
//   dataType: 'json',
//   data: {q: "user input"},
//   success: function(data) {
//     callback(data);
//   },
//   failure: function(error) {
//     console.log(error);
//   }
// });
  
