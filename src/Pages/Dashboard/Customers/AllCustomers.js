import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  //showing ordered items in cart
  useEffect(() => {
    fetch(`https://e-commerce-server-three.vercel.app/customers`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  // console.log(customers);
  return (
    <div className="overflow-x-auto">
      <table className="table w-3/4 mx-auto my-10 table-compact">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Detailse</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((cus, i) => (
            <tr key={i} cus={cus}>
              <th>{i + 1}</th>
              <td>{cus?.name}</td>
              <td>{cus?.email}</td>
              <td>
                <button className="btn btn-sm bg-slate-400 hover:bg-slate-500 text-white px-2 py-1 rounded-lg">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-9/12 mx-auto">
        <Link to="/dashboard/addcustomer">
          <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg ">
            Add Customer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllCustomers;
