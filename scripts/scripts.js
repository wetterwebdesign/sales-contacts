

// Change password field to text field
document.getElementById('showPass').addEventListener('click', function() {
  const passInput = document.getElementById("pass");
  const showPassText = document.getElementById('showPass');
  if (passInput.type === "password") {
    passInput.type = "text";
    showPassText.textContent = 'Hide Password';
  } else {
    passInput.type = "password";
    showPassText.textContent = 'Show Password';
  }
})
