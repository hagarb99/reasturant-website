var count = 0;
var cartCount = document.getElementById("cart-count");
var buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
  });
});

// submit
function submitForm() {
  alert("Your order has been sent successfully!");
}

function validation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var address = document.getElementById("address").value;

  if (name === "" || email === "" || mobile === "" || address === "") {
    alert("Please fill in all fields.");
    return false;
  }

  submitForm(); 
  return true;
}