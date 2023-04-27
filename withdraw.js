function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);
  let i = ctx.users.length - 1;

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Please enter " + label + " amount.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (withdraw <= 0) {
      setStatus(
        "Error: Amount entered needs to be a positive number. Please try again."
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (/\D/.test(withdraw)) {
      setStatus("Input is not a number. Please try again.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (ctx.users[i].balance < withdraw) {
      setStatus("Insufficient funds");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handlewithdraw() {
    console.log(withdraw);
    if (!validate(withdraw, "withdraw")) return;
    ctx.users[i].balance += parseInt(-withdraw);
    setShow(false);
    preventDefault();
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            <h5>Account Balance: ${ctx.users[i].balance}</h5>
            Withdraw Amount
            <br />
            <input
              type="input"
              autocomplete="off"
              className="form-control"
              id="withdraw"
              placeholder="Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!withdraw}
              onClick={handlewithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <h5>Account Balance: ${ctx.users[i].balance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make another withdraw
            </button>
          </>
        )
      }
    />
  );
}
