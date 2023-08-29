import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    <div class="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const DisplayMember = () => {
  return (
    <div class="members">
      <h2>Registered Members</h2>
      <div class="member">John Doe (john@example.com)</div>
      <div class="member">Jane Smith (jane@example.com)</div>
    </div>
  );
};

export default App;
