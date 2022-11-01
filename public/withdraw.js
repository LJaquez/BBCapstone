function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleWithdraw(){
    if (!validate(withdraw, 'Please enter a withdrawl amount.')) return;
    if (!validate(withdraw < ctx.users[0].balance, 'Transaction failed. Cannot overdraw your account.')) return;
    ctx.users[0].balance -= parseInt(withdraw);
    setShow(false);
  }   

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }
  return (
    <Card
      bgcolor="info"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Balance: {ctx.users[0].balance}<br/>
              Withdraw Amount<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter Withdraw amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New Withdrawl</button>
              </>
            )}
    />
  )
}
