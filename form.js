    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    fetch('https://formspree.io/f/mqkorkgl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Oops! Something went wrong.');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('Oops! Something went wrong.');
    });
  });
  