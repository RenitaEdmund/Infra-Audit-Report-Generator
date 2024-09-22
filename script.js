function validateForm(event) {
  event.preventDefault(); 

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if (username === 'admin' && password === 'admin_pass') {
      window.location.href = './admin.html'; 
  } else {
    if(username==='user' && password==='user_pass')
    {
      window.location.href = './user.html';
    }
    else{
      alert('Invalid credentials');
    }
  }
}

function signInWithGoogle() {
  // Add your Google sign-in logic using Google API
  alert('Google Sign-In'); // Placeholder alert message
}
