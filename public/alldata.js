function AllData() {
  const [data, setData] = React.useState('');

  React.useEffect(()=>{
    // fetch all accounts from API
    fetch('/account/all')
      .then(response =>response.json())
      .then(data=>{
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  return (<>
    <h5>All Data in Store</h5>
    {data}
  </>);
}
  /* const TableBody = () => {
    const userdata = ctx.users.filter((item) => item.name != "");
    const rows = userdata.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
    );
  };

  return (
    <Card
      bgcolor='warning'
      header="All User Data"
      body={
        <div className="table-responsive">
          <table className="table table-striped">
            <TableHeader />
            <TableBody />
          </table>
        </div>
      }
    />
  ); */
