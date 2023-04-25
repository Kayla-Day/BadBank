function Home() {
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Bad Bank"
      title="Welcome to Bad Bank!"
      text="Security-Free Banking for the BOLD, BRAVE and FREE!"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
