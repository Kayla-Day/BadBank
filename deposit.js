function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const ctx = React.useContext(UserContext);
  let i = ctx.users.length - 1;

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Please enter " + label + " amount.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (deposit <= -1) {
      setStatus("Error: Amount entered needs to be a positive number.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (/\D/.test(deposit)) {
      setStatus("Input is not a number. Please try again.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handledeposit() {
    console.log(deposit);
    if (!validate(deposit, "deposit")) return;
    ctx.users[i].balance += parseInt(deposit);
    setShow(false);
    preventDefault();
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            <h5>Account Balance: ${ctx.users[i].balance}</h5>
            Deposit Amount
            <br />
            <input
              type="input"
              autocomplete="off"
              className="form-control"
              id="deposit"
              placeholder="Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!deposit}
              onClick={handledeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <h5>Account Balance: ${ctx.users[i].balance}</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make another deposit
            </button>
          </>
        )
      }
    />
  );
}
