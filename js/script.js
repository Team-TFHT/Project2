function init()
{
  var fname = document.getElementById("first_name").value;
  var lname = document.getElementById("last_name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone_Number").value;
  var belt = document.getElementById("belt_length").value;
  var design = document.getElementById("design_layout").value;
  
  alert("Thank You " +fname+ "" +lname+ " for your order of " +design+ " at the length of " +belt+ " we will send you at message to "+email+ " or phone you at " +phone+ ".");

}

