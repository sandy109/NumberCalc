function bin2All() {
  var x = document.getElementById("bin").value;
  if ((/[^0-1]/g.test(x)) || x == "") {
    var error = "Please, enter a valid binary number...";
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("bin").focus();
    return false;
  }
  document.getElementById("error").innerHTML = "";
  x = parseInt(x);
  var oct = parseInt(x,2).toString(8);
  var deci = parseInt(x,2).toString(10);
  var hex = parseInt(x,2).toString(16);
  var figs = "The equivelant ocatal of " + x + " is " + oct + "<br />";
  var figs2 = "<br />" + "The equivelant decimal of " + x + " is " + deci + "<br />";
  var figs3 = "<br />" + "The equivelant hexadecimal of " + x + " is " + hex + "<br />";
  document.getElementById("result").innerHTML = figs;
  document.getElementById("result2").innerHTML = figs2;
  document.getElementById("result3").innerHTML = figs3;
  document.getElemetnById("bin").value = "";
}
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("body").css("display","none");
  $("body").fadeIn(500);
});
