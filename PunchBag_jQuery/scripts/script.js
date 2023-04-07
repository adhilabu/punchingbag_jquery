var health = 11;
var widInitial = parseInt($("#bag-health").css("width"), 10);
$("#bag-burst").hide();
//Punch function
function punchfunc() {
  health -= 1;
  //health loss in each punch
  var final =
    ((health - 1) / health) * parseInt($("#bag-health div").css("width"), 10);
  $("#bag-health div").css("width", final);
  console.log(final);
  //condition for zero health
  if (health <= 1) {
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
