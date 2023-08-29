import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

const RunningForm = () =>{
  return (
    <div>
      <h1>Enter Data</h1>
      <form id="data-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br /><br />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" /><br /><br />

      <label for="weight">Weight:</label>
      <input type="number" id="weight" name="weight" /><br /><br />

      <label for="running">Current Running (Minutes):</label>
      <input type="number" id="running" name="running" /><br /><br />

      <button type="button" onClick="addData()">Add Data</button>
      </form>
  </div>
  );
};

const TableDisplay = () =>{
  return(
  <div>
    <h1>Entered Data</h1>
    <table id="data-table" border="1" width="100%">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Current Running (Minutes)</th>
        <th>Good Running</th>
      </tr>
    </table>
  </div>
  )
}

export default App;
