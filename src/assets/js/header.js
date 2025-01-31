// Search overlay
document.getElementById('search-trigger').onclick = function() {
    document.getElementById('search-overlay').style.display = 'block';
  }

  document.getElementById('search-overlay').onclick = function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  }