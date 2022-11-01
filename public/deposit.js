function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]   = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleDeposit(){
    if (!validate(deposit, 'Please enter a deposit amount.')) return;
    if(!validate(deposit>0, 'Please enter a positive amount.')) return;
    ctx.users[0].balance += parseInt(deposit);
    setShow(false);
  }     

  function clearForm(){
    setDeposit('');
    setShow(true);
  }
  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Balance: {ctx.users[0].balance}<br/>
              Deposit Amount<br/>
              <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>New Deposit</button>
              </>
            )}
    />
  )
}
