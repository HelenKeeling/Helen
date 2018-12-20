document.addEventListener("DOMContentLoaded", function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  window.scroll(function() {
    console.log(window.scrollTop());

    if (window.scrollTop() > 550) {
      document.getElementsByClassName("navbar").addClass("navbar-fixed-top");
    }

    if (window.scrollTop() < 551) {
      document.getElementsByClassName("navbar").removeClass("navbar-fixed-top");
    }
  });
});

window.onload = function() {
  var form = document.getElementById("formid");
  form.onsubmit = submitted.bind(form);
};

function submitted(event) {
  event.preventDefault(); //Stop standard form behavior

  var formContent = getFormContent(); //Get form values

  var formContentAsJson = JSON.stringify(formContent);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "POST",
    "https://rcf5xftu7d.execute-api.eu-west-1.amazonaws.com/prod/contact"
  );
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xmlhttp.onload = function(e) {
    console.log(xmlhttp.status);

    if (xmlhttp.status === 200) {
      alert("Thanks!!");
    } else {
      alert("Opps, try again");
    }
  };

  xmlhttp.send(formContentAsJson);
}

function getFormContent() {
  var firstNameValue = document.getElementById("fname").value;
  var lastNameValue = document.getElementById("lname").value;
  var emailValue = document.getElementById("ename").value;
  var subjectValue = document.getElementById("subject").value;

  return {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    message: subjectValue
  };
}
