var toastMessage = "Donation Request Successful!";

document.getElementById("myButton").addEventListener("click", function() {
  var options = {
    text: toastMessage,
    duration: 3000
  };
  
  // Show the toast
  Toastify(options).showToast();
});

// Change the toast message
function changeToastMessage(message) {
  toastMessage = message;
}