---
layout: post
title: API create 
permalink: /api/create
show_reading_time: false 
---

<div style="background: #f0f0f0; padding: 10px; margin-bottom: 20px; border-radius: 5px;">
  <strong>Debug Info:</strong><br>
  API URL: <span id="apiUrl"></span><br>
  Connection Status: <span id="debugStatus">Testing...</span>
</div>

<h3>Add a New User to InfoDB</h3>
<form id="addUserForm" style="max-width: 500px;">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" required><br><br>
  
  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" required><br><br>
  
  <label for="dob">Date of Birth:</label>
  <input type="text" id="dob" name="dob" required placeholder="e.g., October 21"><br><br>
  
  <label for="residence">Residence:</label>
  <input type="text" id="residence" name="residence" required><br><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br><br>
  
  <label for="cars">Cars (optional, comma separated):</label>
  <input type="text" id="cars" name="cars" placeholder="e.g., 2015-Fusion, 2011-Ranger"><br><br>
  
  <button type="submit">Add User</button>
</form>
<div id="addUserResult"></div>

<script type="module">
import { pythonURI } from '{{site.baseurl}}/assets/js/api/config.js';

// Display API URL
document.getElementById('apiUrl').textContent = pythonURI;

// Test connection on page load
async function testConnection() {
  try {
    const response = await fetch(`${pythonURI}/api/data`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
    
    if (response.ok) {
      document.getElementById('debugStatus').innerHTML = '<span style="color:green">✓ Connected</span>';
      console.log('✓ Flask connection successful');
    } else {
      document.getElementById('debugStatus').innerHTML = '<span style="color:red">✗ Error ' + response.status + '</span>';
    }
  } catch (err) {
    document.getElementById('debugStatus').innerHTML = '<span style="color:red">✗ Failed: ' + err.message + '</span>';
    console.error('Connection failed:', err);
  }
}

testConnection();

document.getElementById('addUserForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const residence = document.getElementById('residence').value;
  const email = document.getElementById('email').value;
  const carsInput = document.getElementById('cars').value;
  
  // Convert cars to array, default to ['None'] if empty
  const cars = carsInput ? carsInput.split(',').map(car => car.trim()) : ['None'];
  
  const data = {
    FirstName: firstName,
    LastName: lastName,
    DOB: dob,
    Residence: residence,
    Email: email,
    Owns_Cars: cars
  };
  
  console.log('Sending data:', data);
  
  try {
    const response = await fetch(`${pythonURI}/api/data`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('Response data:', result);
    
    if (response.ok) {
      document.getElementById('addUserResult').innerHTML = '<span style="color:green">✓ User added successfully!</span>';
      document.getElementById('addUserForm').reset();
      
      // Redirect to read page after 2 seconds
      setTimeout(() => {
        window.location.href = '{{site.baseurl}}/api/read';
      }, 2000);
    } else {
      document.getElementById('addUserResult').innerHTML = '<span style="color:red">Error: ' + (result.error || 'Failed to add user') + '</span>';
    }
  } catch (err) {
    console.error('Network error:', err);
    document.getElementById('addUserResult').innerHTML = '<span style="color:red">Network error: ' + err.message + '<br><small>Is Flask running?</small></span>';
  }
});
</script>