function init(){
  var name = document.getElementById("fullname").value;
  var addr = document.getElementById("addre").value;
  

  alert("Thank You " +name+ " we will send your order to "+addr+" ");
}
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
