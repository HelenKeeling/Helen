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

window.onload = function() {
    var form = document.getElementById("formid");
    form.onsubmit = submitted.bind(form);
}

function submitted(event) {
    event.preventDefault(); //Stop standard form behavior
    
    var firstNameValue = document.getElementById("fname").value;   
    var lastNameValue = document.getElementById("lname").value;
    var emailValue = document.getElementById("ename").value;
    var subjectValue = document.getElementById("subject").value;
    
    var formContent = { firstName: firstNameValue, lastName: lastNameValue, email: emailValue, subject: subjectValue };
    
    
    console.log(formContent);
}