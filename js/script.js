function init(){
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  
<<<<<<< HEAD
=======
  alert("Thank You " +name+ " for your order we will send you at message to "+email+"");
>>>>>>> be981403258cd46a3d54811310d3c0fe16e62e02

  alert("Thank You " +name+ " we will send your order to "+addr+" ");
}
<<<<<<< HEAD
 function validate() {
	var x = document.forms["myForm"]["cno"].value;
	if(x == "") {
		alert("your card number must be filled out!");
		return false;
	}
/*  var belt = document.getElementById("belt_length").value;
  var design = document.getElementById("design_layout").value;
  alert("Thank You " +fullname+ " for your order of " +design+ " at the length of " +belt+ " we will send you at message to "+email+ " or phone you at " +phone+ ".");
*/
=======

function validate() {
  var x = document.forms["myForm"]["fname"].value;
  if(x == "") {
    alert("your must be filled out!");
    return false;
  }

function copyDate() {
  var cpyrt = document.getElementById(“copyright”);
  cpyrt = dt.getYear();
}

window.onload = copyDate;
>>>>>>> be981403258cd46a3d54811310d3c0fe16e62e02
