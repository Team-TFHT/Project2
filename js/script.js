function init(){
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  alert("Thank You " +name+ " for your order we will send you at message to "+email+"");
}

function validate() {
 var x = document.forms["myForm"]["cno"].value;
 if(x == "") {
   alert("your card number must be filled out!");
   return false;
   }
}

function validate() {
  var x = document.forms["myForm"]["fname"].value;
  if(x == "") {
    alert("your name must be filled out!");
    return false;
  }
}


