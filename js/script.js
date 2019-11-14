function init()
{
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  
  alert("Thank You " +name+ " for your order we will send you at message to "+email+"");

}
 function validate() {
	var x = document.forms["myForm"]["fname"].value;
	if(x == "") {
		alert("your must be filled out!");
		return false;
	}
/*  var belt = document.getElementById("belt_length").value;
  var design = document.getElementById("design_layout").value;
  alert("Thank You " +fullname+ " for your order of " +design+ " at the length of " +belt+ " we will send you at message to "+email+ " or phone you at " +phone+ ".");
*/
