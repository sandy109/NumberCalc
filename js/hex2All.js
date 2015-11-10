function hex2All() {
  var x = document.getElementById("hex").value;
  if ((/[^0-9a-fA-f]/g.test(x)) || x == "") {
    var error = "Please, enter a hexadecimal decimal number...";
    document.getElementById("error").innerHTML = error;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("hex").focus();
    return false;
  }
  document.getElementById("error").innerHTML = "";
  var bin = parseInt(x,16).toString(2);
  var oct = parseInt(x,16).toString(8);
  var deci = parseInt(x,16).toString(10);
  var figs = "The equivelant binary of " + x + " is " + bin + "<br />";
  var figs2 = "<br />" + "The equivelant octal of " + x + " is " + oct + "<br />";
  var figs3 = "<br />" + "The equivelant decimal of " + x + " is " + deci + "<br />";
  document.getElementById("result").innerHTML = figs;
  document.getElementById("result2").innerHTML = figs2;
  document.getElementById("result3").innerHTML = figs3;
  document.getElemetnById("hex").value = "";
}
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("body").css("display","none");
  $("body").fadeIn(500);
});
