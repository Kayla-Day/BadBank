function AllData() {
  const ctx = React.useContext(UserContext);
  const userList = ctx.users.map((user, index) => (
    <tr key={index}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.balance}</td>
    </tr>
  ));

  return (
    <>
      <div className="col-lg-8 grid-margin stretch-card">
        <div className="card">
          <div className="text-center">
            <div className="card-body">
              <h4 className="card-title">Bad Bank - AllData</h4>
              <p className="card-description">
                Current Bad Bank Members' Account Information
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name:</th>
                      <th>Email:</th>
                      <th>Password:</th>
                      <th>Balance:</th>
                    </tr>
                  </thead>
                  <tbody>{userList}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
