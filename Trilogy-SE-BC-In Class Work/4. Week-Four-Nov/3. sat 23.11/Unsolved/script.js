var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storgage
  var email = localStorage.getItem("email");
  var password = localStorage.getitem("password");

  if (email &&password === null) {
    return;
    
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
  }

}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  localStorage.setItem(email, count);
  localStorage.setItem(password, count);  
  // Save email and password to localStorage and render the last registered.
  }

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  // add to id user-email
  // add to id user-password

  if(email) === "") {
    displayMessage ("email", function (#user-email)
    displayMessage ("password", function (#user-password))
    
  }
}
});
