/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    // Empty list message
    if (!debits || debits.length === 0){
      return <p>No Debits yet.</p>
    }

    return (
      <ul>
        {debits.map((debit) => {  // Extract "id", "amount", "description" and "date"
          // yyyy-mm-dd, safe slice
          const date = (debit.date || '').slice(0, 10);
          // 2 decimals      
          const amount = Number(debit.amount).toFixed(2); 
          return (
            <li key={debit.id}>
              <strong>${amount}</strong> {debit.description} {date}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>Debits</h1>
      {typeof props.balance !== 'undefined' && (
        <div
          aria-label="Account Balance"
          style={{
            fontWeight: 700,
            color: Number(props.balance) < 0 ? '#b00020' : '#0a7d00',
            marginBottom: '0.5rem',
          }}
        >
          Balance: ${Number(props.balance).toFixed(2)}
        </div>
      )}

      {debitsView()}

      <form
  onSubmit={(e) => {
    e.preventDefault();
    const newDebit = {
      description: e.target.description.value,
      amount: Number(e.target.amount.value),
      // include today's date
      date: new Date().toISOString().slice(0, 10),
    };
    props.addDebit(newDebit);
    e.target.reset();
  }}
  style={{ marginTop: '1rem' }}
>
  <input type="text" name="description" placeholder="Description" required />
  <input type="number" name="amount" placeholder="Amount" step="0.01" required />
  <button type="submit">Add Debit</button>
</form>

      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;