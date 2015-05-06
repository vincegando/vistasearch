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

function getOEmbedInstagram(link, callback) {
    $.ajax({
      url: "http://api.instagram.com/oembed?url=" + link + "",
      type: 'GET',
      success: function(data) {
        callback(data);
      },
      failure: function(error) {
        console.log(error);
      }
    });
}

var UI = UI || {
  layoutData: function(data) {
    var list = [];
    for (var i = 0; i < data.length; i++) {
     var stuff = data[i];
     if (stuff instanceof Tweet) {
        var dataHTML = '<blockquote class="twitter-tweet" lang="en"><a href="https://twitter.com/'+stuff.username+'/status/'+stuff.id+'"></a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'
        list.push(dataHTML);
      } else if(stuff instanceof Gram) {
        var dataHTML = stuff['link'];
        list.push(dataHTML);
      }     
    }
    shuffle(list);
    for (var i = 0; i < list.length; i++) {
      $('.main-content-list').append(list[i]);
    }
  }
};


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

