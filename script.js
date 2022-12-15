// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Time section for variables
$(document).ready(function() {
  var currentDate = moment().format("MMMM Do, YYYY");
  var currentTime = moment().format("hh:mm:ss A");
  var currentHour;
  var possibleHours = {
    before: ["12AM","01AM","02AM","03AM","04AM","05AM","06AM","07AM","08AM"],
    business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM", "04PM", "05PM" ],
    after: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]


  }
}
function init() {
  // Display current date
  $("#date").text(currentDate);
  // Display current time
  $("#time").text(currentTime);
  // Set colors based on current time
  timeColor();
  // Update current date and time every second
  let currentTimer = setInterval(function() {
    currentDate = moment().format("MMMM Do, YYYY");
    $("#date").text(currentDate);
    currentTime = moment().format("hh:mm:ss A");
    $("#time").text(currentTime);
    timeColor();
  }, 1000);
}

