window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
function toggleMenu() {
  document.getElementById("navList").classList.toggle("show");
}

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}
window.addEventListener('click', function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function loadPage(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("para").innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading page:", error);
      document.getElementById("para").innerHTML = "<p>⚠️ Failed to load page.</p>";
    });
}

// Load home page by default on first load
window.addEventListener("DOMContentLoaded", () => {
  loadPage("home.html");
});



