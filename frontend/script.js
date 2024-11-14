// Function to handle login and show appropriate dashboard
function login(role) {
  // Hide login section
  document.getElementById('loginSection').style.display = 'none';

  // Show corresponding dashboard
  if (role === 'admin') {
    document.getElementById('adminDashboard').style.display = 'block';
  } else if (role === 'salesManager') {
    document.getElementById('salesManagerDashboard').style.display = 'block';
  } else if (role === 'labour') {
    document.getElementById('labourDashboard').style.display = 'block';
  } else if (role === 'hr') {
    document.getElementById('hrDashboard').style.display = 'block';
  }
}

// Logout function to return to login screen
function logout() {
  // Hide all dashboards
  const dashboards = document.querySelectorAll('.dashboard');
  dashboards.forEach(dashboard => dashboard.style.display = 'none');

  // Show login section again
  document.getElementById('loginSection').style.display = 'flex';
}
