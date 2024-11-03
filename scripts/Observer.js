// General function to count up from a specific start number to a target number
function countUp(element, start, targetNumber, duration) {
  let current = start; // Start counting from this number
  const increment = (targetNumber - start) / (duration / 10); // Increment to reach the target in the given duration

  const counterInterval = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      element.textContent = targetNumber;
      clearInterval(counterInterval);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 10); // Update every 10 milliseconds
}

// Initialize Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;
      const start = parseInt(targetElement.getAttribute("data-start"), 10) || 0; // Get start number
      const targetNumber = parseInt(
        targetElement.getAttribute("data-target"),
        10
      ); // Get target number
      const duration =
        parseInt(targetElement.getAttribute("data-duration"), 10) || 2000; // Get duration

      countUp(targetElement, start, targetNumber, duration); // Start counting up
      observer.unobserve(targetElement); // Stop observing after the count-up is done
    }
  });
});

// Attach observer to all elements with the class 'counter'
document.querySelectorAll(".counter").forEach((element) => {
  observer.observe(element);
});
