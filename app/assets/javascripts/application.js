// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  //$('.fa-spinner').hide('fast'); 
});

/*
*	A class for interacting with the UI to display the embedded tweets and instagram posts.
*	
*/
var UI = UI || {

//  Function to push the HTML for each respective tweet and gram to the main-content-list
//  @param list to accept strings of HTML text
//  @param stuff is an item from the data array and is either an instance of Tweet or Gram
//  @param dataHTML is a string that is added to the list varaible to
  layoutData: function(data) {
    var list = [];
    for (var i = 0; i < data.length; i++) {
     var stuff = data[i];
     if (stuff instanceof Tweet) {
        var dataHTML = '<blockquote class="twitter-tweet" lang="en"><a href="https://twitter.com/'+stuff.username+'/status/'+stuff.id+'"></a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
        if (list.indexOf(dataHTML) <= -1) {
          list.push(dataHTML);
        }
      } else if(stuff instanceof Gram) {
        var dataHTML = stuff['link'];
        if (list.indexOf(dataHTML) <= -1) {
          list.push(dataHTML);
        }
      }     
    }
    shuffle(list);

    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
      var f = document.getElementsByClassName("main-content-list")[0];

      $('.main-content-list').append(list[i]);
    }
  }
};

// Shuffle function shuffles the list that is passed to the main-content-list so that it is displayed
// in mixed order on the UI
// @params currentIndex an int and the length of the array
// @params temporaryValue holds the object from the array
// @params randomIndex int that is picked randomly
// @return array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

