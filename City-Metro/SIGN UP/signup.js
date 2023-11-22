document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[placeholder="Enter your name"]');
    const emailInput = document.querySelector('input[placeholder="Enter your email"]');
    const passwordInput = document.querySelector('input[placeholder="Create password"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm password"]');
    const checkbox = document.querySelector('input[type="checkbox"]');
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Validation logic
      if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || confirmPasswordInput.value === "" || !checkbox.checked) {
        alert("Please fill out all fields and accept the terms & conditions.");
      } else if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match. Please try again.");
      } else {
        // Form submission logic (you can send form data to the server here)
        alert("Form submitted successfully!");
        // You can use AJAX or fetch API to send form data to the server
        // Example using fetch API:
        /*
        fetch("your_server_endpoint", {
          method: "POST",
          body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => {
          // Handle server response here
          console.log(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
        */
      }
    });
  });