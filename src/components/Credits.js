/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {useState} from 'react';


const Credits = (props) => {

  // --- 2. ADD useState hooks for the form inputs ---
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  // --- 3. ADD the handleSubmit function ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from reloading

    // Create a new credit object with data from the form
    const newCredit = {
      id: (new Date()).getTime(), // Simple unique ID
      description: description,
      amount: parseFloat(amount), // Convert amount to a number
      date: (new Date()).toISOString() // Get current date
    };

    // Call the addCredit function from props
    props.addCredit(newCredit);

    // Reset the form fields
    setDescription('');
    setAmount(0);
  };

  const creditsView = () => {
    // The .map() function loops through every credit object in the props.credits array
    return props.credits.map((credit) => {
      // For each credit, we return a list item element showing the data
      // The 'key' is a unique ID required by React for lists
      let date = new Date(credit.date).toLocaleDateString();
      return <li key={credit.id}>{date} {credit.description} {credit.amount}  </li>;
    });
  };

  return (
    <div>
      <h1>Credits</h1>
      
      <div style={{fontWeight: 'bold'}}>
        Account Balance: {props.accountBalance}
      </div>
      <hr/>

      <ul>
        {creditsView()}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>Description: </label>
        <input 
          type="text" 
          name="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Amount: </label>
        <input 
          type="number" 
          name="amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Credit</button>
      </form>
      <br/>

      <Link to="/">Return to Home</Link>
    </div>
  );
}


export default Credits;