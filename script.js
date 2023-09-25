$(function () {
    // Datepicker initialization
    $("#checkin").datepicker();
    $("#checkout").datepicker();
  
    // Registration Form Validation
    $("#registrationForm").on("submit", function (event) {
      event.preventDefault();
      // Implement registration form validation logic here
      const username = $("#username").val().trim();
      const email = $("#email").val().trim();
      const password = $("#password").val().trim();
  
      if (username === "") {
        alert("Please enter a username.");
        return;
      }
  
      if (email === "" || !isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (password === "" || !isValidPassword(password)) {
        alert("Password should be at least 8 characters and contain uppercase, lowercase, and special characters.");
        return;
      }
  
      // All validations passed, proceed with registration
      // For example, submit the form to a server via AJAX or handle it with server-side code
      alert("Registration successful!");
      // Clear the form after successful registration
      $("#registrationForm")[0].reset();
    });
  
    // User Login Form Validation
    $("#loginForm").on("submit", function (event) {
      event.preventDefault();
      // Implement user login form validation logic here
      const loginEmail = $("#loginEmail").val().trim();
      const loginPassword = $("#loginPassword").val().trim();
  
      if (loginEmail === "") {
        alert("Please enter your email/username.");
        return;
      }
  
      if (loginPassword === "") {
        alert("Please enter your password.");
        return;
      }
  
      // Perform user authentication checks
      // If valid credentials, handle user login
      // Otherwise, display appropriate error messages
      // For simplicity, we are not handling actual authentication in this example
      alert("Login successful!");
      // Clear the form after successful login
      $("#loginForm")[0].reset();
    });
  
    // User Profile Form Validation
    $("#profileForm").on("submit", function (event) {
      event.preventDefault();
      // Implement user profile form validation logic here
      const profileEmail = $("#profileEmail").val().trim();
      const profilePassword = $("#profilePassword").val().trim();
  
      if (profileEmail === "" || !isValidEmail(profileEmail)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (profilePassword === "" || !isValidPassword(profilePassword)) {
        alert("Password should be at least 8 characters and contain uppercase, lowercase, and special characters.");
        return;
      }
  
      // All validations passed, proceed with updating user profile
      // For example, submit the form to a server via AJAX or handle it with server-side code
      alert("User profile updated successfully!");
      // Clear the form after successful update
      $("#profileForm")[0].reset();
    });
  
    // Payment Form Validation
    $("#paymentForm").on("submit", function (event) {
      event.preventDefault();
      // Implement payment form validation logic here
      const cardNumber = $("#cardNumber").val().trim();
      const expirationDate = $("#expirationDate").val().trim();
      const cvv = $("#cvv").val().trim();
  
      if (cardNumber === "" || !isValidCardNumber(cardNumber)) {
        alert("Please enter a valid credit card number.");
        return;
      }
  
      if (expirationDate === "" || !isValidExpirationDate(expirationDate)) {
        alert("Please enter a valid expiration date (MM/YY).");
        return;
      }
  
      if (cvv === "" || !isValidCVV(cvv)) {
        alert("Please enter a valid CVV.");
        return;
      }
  
      // All validations passed, proceed with payment
      // For example, submit the form to a server via AJAX or handle it with server-side code
      alert("Payment successful!");
      // Clear the form after successful payment
      $("#paymentForm")[0].reset();
    });
  
    // Sample functions for validation checks
  
    function isValidEmail(email) {
      // Implement email validation using regular expressions or other methods
      // Return true if valid, otherwise false
      // For example:
      const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  
    function isValidPassword(password) {
      // Implement password strength validation
      // Return true if strong, otherwise false
      // For example:
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
  
    function isValidCardNumber(cardNumber) {
      // Implement credit card number validation
      // You can use the Luhn algorithm to check for validity
      // Return true if valid, otherwise false
    }
  
    function isValidExpirationDate(expirationDate) {
      // Implement expiration date validation
      // Check if the date is in the future and in the correct format (MM/YY)
      // Return true if valid, otherwise false
    }
  
    function isValidCVV(cvv) {
      // Implement CVV validation
      // Check the format and length of the CVV based on the credit card provider
      // Return true if valid, otherwise false
    }
  });
  