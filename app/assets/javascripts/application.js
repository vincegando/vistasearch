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



var UI = UI || {
  layoutTweet: function(tweet) {
    var tweetHTML = '<a href="https://twitter.com/'+ tweet.username +'/status/' + tweet.id + '" target="_blank"><li class=".main-content-list-item"><h1 class="tweet-name">' + tweet.username + '<i class="fa fa-twitter"></i></h1><p class="tweet-text">' + tweet.text + '</p></li></a>';
    $('.main-content-list').append(tweetHTML);
  }
};


