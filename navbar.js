function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link hovertext"
                data-hover="Home Page"
                href="#/"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link hovertext"
                data-hover="Not yet a member? Join us!"
                href="#/CreateAccount/"
              >
                Create Account
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link hovertext"
                data-hover="Make a Deposit"
                href="#/deposit/"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hovertext"
                data-hover="Make a Withdrawal"
                href="#/withdraw/"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hovertext"
                data-hover="Account Details"
                href="#/alldata/"
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
