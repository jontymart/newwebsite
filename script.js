// Reusable include loader
function includeHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load includes on page load
document.addEventListener("DOMContentLoaded", () => {
  includeHTML('header', 'header.html');
  includeHTML('sidebar', 'sidebar.html');
  includeHTML('footer', 'footer.html');
});

// For sidebar toggle
function toggleSidebar() {
  const categoryList = document.getElementById('category-list');
  categoryList.classList.toggle('show');
}