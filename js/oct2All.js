function oct2All() {
  var x = document.getElementById("oct").value;
  if ((/[^0-7]/g.test(x)) || x == "") {
    var error = "Please, enter a valid octal number...";
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("oct").focus();
    return false;
  }
  document.getElementById("error").innerHTML = "";
  x = parseInt(x);
  var bin = parseInt(x,8).toString(2);
  var deci = parseInt(x,8).toString(10);
  var hex = parseInt(x,8).toString(16);
  var figs = "The equivelant binary of " + x + " is " + bin + "<br />";
  var figs2 = "<br />" + "The equivelant decimal of " + x + " is " + deci + "<br />";
  var figs3 = "<br />" + "The equivelant hexadecimal of " + x + " is " + hex + "<br />";
  document.getElementById("result").innerHTML = figs;
  document.getElementById("result2").innerHTML = figs2;
  document.getElementById("result3").innerHTML = figs3;
  document.getElemetnById("oct").value = "";
}
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("body").css("display","none");
  $("body").fadeIn(500);
});
