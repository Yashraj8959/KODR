document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".friend-btn");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const statusText = button.previousElementSibling.querySelector(".status");
  
        if (button.textContent === "Add Friend") {
          button.textContent = "Remove Friend";
          button.style.backgroundColor = "#dc3545"; // Change button color to red
          statusText.innerHTML = "<strong>Status:</strong> Friends";
        } else {
          button.textContent = "Add Friend";
          button.style.backgroundColor = "#007bff"; // Change button color back to blue
          statusText.innerHTML = "<strong>Status:</strong> Stranger";
        }
      });
    });
  });
  