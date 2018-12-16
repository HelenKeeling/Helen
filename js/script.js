document.addEventListener("DOMContentLoaded", (function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  window.scroll(function () { 

    console.log(window.scrollTop());

    if (window.scrollTop() > 550) {
      document.getElementsByClassName('navbar').addClass('navbar-fixed-top');
    }

    if (window.scrollTop() < 551) {
      document.getElementsByClassName('navbar').removeClass('navbar-fixed-top');
    }
  });
}));

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}