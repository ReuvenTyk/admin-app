import { useEffect, useState } from "react";

interface Customer {
  id: string;
  name: string;
  city: string;
  phone: string;
}

function Customers() {
  const [customers, setCustomers] = useState<Array<Customer>>([]);

  function getCustomers() {
    const token = localStorage.getItem("token");
    if (!token || token.length === 0) {
      return;
    }

    fetch("http://localhost:3000/customers", {
      method: "GET",
      headers: { "x-auth-token": token },
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }

  useEffect(getCustomers, []);

  return (
    <>
      <h2>Customers</h2>

      {customers.length === 0 ? <div>No Customers yet</div> : null}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.city}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <div>
        <input type="text" placeholder="ID" />
      </div>
      <div>
        <input type="text" placeholder="name" />
      </div>
      <div>
        <input type="text" placeholder="city" />
      </div>
      <div>
        <input type="text" placeholder="phone" />
      </div>

      <button className="btn btn-primary">edit</button>

      <hr />

      <div>
        <input type="text" placeholder="ID" />
      </div>
      <button className="btn btn-primary">Delete</button>
    </>
  );
}

export default Customers;
