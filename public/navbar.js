function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div title="Goes back to the home page">
        <a className="navbar-brand" href="#">BadBank</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div title="Create a new account with us!">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </div>
          </li>
          <li className="nav-item">
            <div title="Log into your account!">
              <a className="nav-link" href="#/login/">Login</a>
            </div>
          </li>
          <li className="nav-item">
            <div title="Deposit funds into your account">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </div>
          </li>
          <li className="nav-item">
            <div title="Withdraw funds from your account.">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </div>
          </li>
          <li className="nav-item">
            <div title="Check the balance of your account.">
              <a className="nav-link" href="#/balance/">Balance</a>
            </div>
          </li>
          <li className="nav-item">
            <div title="See all user accounts">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </div>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}