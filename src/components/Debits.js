/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import './Debits.css'

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    // Empty list message
    if (!debits || debits.length === 0){
      return <p>No Debits yet.</p>
    }

    return (
      <ul className='debits-list'>
        {debits.map((debit) => {  // Extract "id", "amount", "description" and "date"
          // yyyy-mm-dd, safe slice
          const date = (debit.date || '').slice(0, 10);
          // 2 decimals      
          const amount = Number(debit.amount).toFixed(2); 
          return (
            <li key={debit.id} className='debits-item'>
             <div className="debits-item__top">
                <span className="debits-item__desc">{debit.description}</span>
                <span className="debits-item__amount">${amount}</span>
              </div>
              <div className="debits-item__meta">Date: {date}</div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="debits-page">
      <h1 className="debits-title">Debits</h1>

      {typeof props.balance !== 'undefined' && (
        <div
          className={
            'balance ' +
            (Number(props.balance) < 0 ? 'balance--neg' : 'balance--pos')
          }
          aria-label="Account Balance"
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
            date: new Date().toISOString().slice(0, 10),
          };
          props.addDebit(newDebit);
          e.target.reset();
        }}
        className="debits-form"
      >
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
          className="debits-input"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          step="0.01"
          required
          className="debits-input"
        />
        <button type="submit" className="debits-button">
          Add Debit
        </button>
      </form>

      <br />
      <Link to="/" className="back-link">
        Return to Home
      </Link>
    </div>
  );
};

export default Debits;