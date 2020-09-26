/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

$(document).ready(function() {
  var idx = 1;
  var slider = $("#container");
  function slide_next() {
    if (idx < 3) {
      slider.animate({ left: "-=100%" }, 1000);
      idx++;
    } else {
      slider.animate({ left: "0px" }, 1500);
      idx = 1;
    }
  }
  setInterval(slide_next, 5000);
});
