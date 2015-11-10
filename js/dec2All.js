function dec2All() {
  var x = document.getElementById("deci").value;
  if ((/[^0-9]/g.test(x)) || x == "") {
    var error = "Please, enter a valid decimal number...";
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("deci").focus();
    return false;
  }
  document.getElementById("error").innerHTML = "";
  x = parseInt(x);
  var bin = x.toString(2);
  var oct = x.toString(8);
  var hex = x.toString(16);
  var figs = "The equivelant binary of " + x + " is " + bin + "<br />";
  var figs2 = "<br />" + "The equivelant octal of " + x + " is " + oct + "<br />";
  var figs3 = "<br />" + "The equivelant hexadecimal of " + x + " is " + hex + "<br />";
  document.getElementById("result").innerHTML = figs;
  document.getElementById("result2").innerHTML = figs2;
  document.getElementById("result3").innerHTML = figs3;
  document.getElemetnById("deci").value = "";
}
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("body").css("display","none");
  $("body").fadeIn(500);
});
