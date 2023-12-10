// Function to get the ordinal suffix for a number
function getOrdinalSuffix(number) {
  // Define an array of ordinal suffixes for different cases
  const suffixes = ["th", "st", "nd", "rd"];
  
  // Extract the last digit and the second last digit of the number
  const lastDigit = number % 10;
  const secondLastDigit = Math.floor((number % 100) / 10);

  // Determine the appropriate ordinal suffix based on the last two digits of the number
  if (secondLastDigit === 1 || lastDigit > 3 || lastDigit === 0) {
      return suffixes[0]; // Use "th" for numbers ending in 11, 12, 13, and 0, or for any other cases
  } else {
      return suffixes[lastDigit]; // Use the corresponding suffix for other cases
  }
}

// Event listener for the DOMContentLoaded event
window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

  // Perform the API GET request
  fetch('https://40uv29vya2.execute-api.us-east-1.amazonaws.com/production/Counter')
      .then(response => response.json())
      .then(data => {
          // Log the entire API response to the console for debugging
          console.log('API Response:', data);

          try {
              // Parse the body as JSON
              const body = JSON.parse(data.body);

              // Check if the response has a valid data property
              if (body && body.data !== undefined) {
                  // Get the ordinal suffix for the counter value
                  const suffix = getOrdinalSuffix(body.data);

                  // Update the page content with the parsed counter value and suffix
                  const outputElement = document.getElementById('counter-output');
                  outputElement.textContent = `Welcome to my page! You are the ${body.data}${suffix} visitor.`;
              } else {
                  // Handle the case where the response is missing the expected data property
                  const outputElement = document.getElementById('counter-output');
                  outputElement.textContent = 'Welcome to my page! Visitor count is currently unavailable.';
              }
          } catch (error) {
              console.error('Error parsing JSON:', error);
              // Handle errors related to JSON parsing, e.g., display a default message
              const outputElement = document.getElementById('counter-output');
              outputElement.textContent = 'Welcome to my page! Visitor count is currently unavailable.';
          }
      })
      .catch(error => {
          console.error('Error:', error);
          // Handle other errors, e.g., display a default message
          const outputElement = document.getElementById('counter-output');
          outputElement.textContent = 'Welcome to my page! Visitor count is currently unavailable.';
      });
});
