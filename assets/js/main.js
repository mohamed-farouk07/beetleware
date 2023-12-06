document.addEventListener('DOMContentLoaded', function () {
    const originalDiv = document.getElementById('myProduct');
  
    for (let i = 1; i <= 19; i++) {
      // Clone the original div
      const clonedDiv = originalDiv.cloneNode(true);
  
      // Update the ID of the cloned div to make it unique
      clonedDiv.id = `myProduct${i}`;
  
      // Append the cloned div to the container
      originalDiv.parentNode.appendChild(clonedDiv);
    }
  });