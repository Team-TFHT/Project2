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

function copyDate() {
  var cpyrt = document.getElementById(“copyright”)
  if (cpyrt) {
     cpyrt.firstChild.nodeValue = (new Date()).getFullYear();
  }
}

window.onload = copyDate;
