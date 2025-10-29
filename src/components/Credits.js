/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

// --- 1. DEFINE A STYLES OBJECT ---
// We define all our styles here to keep the JSX clean
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '20px auto', // Center the component
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  balanceBox: {
    backgroundColor: '#28a745', // Green background
    color: 'white',
    padding: '15px 20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  balanceLabel: {
    fontSize: '1.1em',
    fontWeight: 'normal',
    margin: 0,
  },
  balanceAmount: {
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '5px 0 0 0',
  },
  list: {
    listStyleType: 'none', // Remove bullet points
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  itemDescription: {
    flex: 2, // Description takes up more space
    color: '#333',
  },
  itemAmount: {
    flex: 1,
    fontWeight: 'bold',
    color: '#28a745', // Green for credits
    textAlign: 'right',
  },
  itemDate: {
    flex: 1,
    color: '#777',
    textAlign: 'center',
    fontSize: '0.9em',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '2px solid #eee',
  },
  input: {
    flex: 1, // Let inputs grow
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#007bff',
  }
};


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
      //let date = new Date(credit.date).toLocaleDateString();
      let formattedDate = credit.date.substring(0, 10);
      return (
        <li key={credit.id} style={styles.listItem}>
          <span style={styles.itemDescription}>{credit.description}</span>
          <span style={styles.itemDate}>{formattedDate}</span>
          <span style={styles.itemAmount}>${credit.amount.toFixed(2)}</span>
        </li>
      );
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Credits</h1>
      
      <div style={styles.balanceBox}>
        <h2 style={styles.balanceLabel}>Account Balance: {props.accountBalance}</h2>
        <p style={styles.balanceAmount}>${parseFloat(props.accountBalance).toFixed(2)}</p>
      </div>
      <hr/>

      <ul>
        {creditsView()}
      </ul>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Description: </label>
        <input 
          type="text" 
          name="description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <label>Amount: </label>
        <input 
          type="number" 
          name="amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Credit</button>
      </form>
      <br/>

      <Link to="/">Return to Home</Link>
    </div>
  );
}


export default Credits;