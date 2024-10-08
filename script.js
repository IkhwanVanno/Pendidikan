  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Toggle navigation visibility when hamburger button is clicked
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility by adding/removing "active" class
  });
