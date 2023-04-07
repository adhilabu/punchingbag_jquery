var health = 11;
var widInitial = parseInt($("#bag-health").css("width"), 10);
$("#bag-burst").hide();
//Punch function
function punchfunc() {
  health -= 1;
  //value of health after health loss in each punch
  var final =
    ((health - 1) / health) * parseInt($("#bag-health div").css("width"), 10);
  $("#bag-health div").css("width", final);
  //condition for zero health
  if (final <= 0) {
    $("#punch, #bag").hide();
    $("#bag-burst").show();
  }
}
//restart function
function restartfunc() {
  health = 11;
  $("#bag-health div").css("width", widInitial);
  $("#punch, #bag").show();
  $("#bag-burst").hide();
}
