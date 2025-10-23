/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
  //==================================================================
  // 1. ADD THIS FUNCTION TO CREATE THE LIST OF CREDITS
  //==================================================================
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
      
      {/*=============================================================
        2. ADD THIS SECTION TO DISPLAY THE ACCOUNT BALANCE
      =============================================================*/}
      <div style={{fontWeight: 'bold'}}>
        Account Balance: {props.accountBalance}
      </div>
      <hr/>

      {/*=============================================================
        3. ADD THIS SECTION TO RENDER THE LIST OF CREDITS
      =============================================================*/}
      <ul>
        {creditsView()}
      </ul>

      {/*=============================================================
        4. ADD THIS SECTION FOR THE "ADD CREDIT" FORM
           (You will make this functional in a later step)
      =============================================================*/}
      <form>
        <label>Description: </label>
        <input type="text" name="description" />
        <label>Amount: </label>
        <input type="number" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
      <br/>

      <Link to="/">Return to Home</Link>
    </div>
  );
}


export default Credits;