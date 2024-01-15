import React, { useState } from "react";

export const SessionForm = () => {
  const [info, setInfo] = useState({
    fname: "",
    email: "",
    psw: "",
    add: "",
    mno: ""
  });
  const [array, setArray] = useState(
    JSON.parse(sessionStorage.getItem("Array")) || []
  );

  const Handlechange = (e) => {
    console.log(e.target);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    console.log(e.target);
    setArray([...array, info]);
    sessionStorage.setItem("Array", JSON.stringify([...array, info]));
  };

  const HandleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    sessionStorage.setItem("Array", JSON.stringify(newArray));
  };

  return (
    <>
      <div>
        <h1>
          <p>Session Storage Registration</p>
        </h1>
        <form action="" className="text-center mt-5 text-primary">
          <label htmlFor="fname" className="pe-3 fw-bold">
            <b> Name : </b>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter Your Name"
            value={info.fname}
            onChange={Handlechange}
          />
          <br />
          <br />
          <label htmlFor="email" className="pe-3 fw-bold">
            <b> Email : </b>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={info.email}
            onChange={Handlechange}
          />
          <br />
          <br />
          <label htmlFor="psw" className="pe-3 fw-bold">
            <b>Password : </b>
          </label>
          <input
            type="password"
            name="psw"
            id="psw"
            placeholder=" Enter Your Password"
            value={info.psw}
            onChange={Handlechange}
          />
          <br />
          <br />
          
          <button
            type="submit"
            onClick={HandleSubmit}
            className="p-2 px-5 text-center bg-primary fw-bold text-light border-0 "
          >
            Submit
          </button>
        </form>
      </div>
      <hr />
      <hr />
      <table
        className="table table-bordered border-primary w-75 mt-5 ms-5"
        border={3}
      >
        <thead>
          <th className="ps-5 border border-primary">Name</th>
          <th className="ps-5 border border-primary">Email</th>
          <th className="ps-5 border border-primary">Password</th>
          <th className="ps-5 border border-primary">Action</th>

          
        </thead>
        <tbody>
          {array.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.email}</td>
                <td>{item.psw}</td> 
                <td>
                  <button
                    onClick={() => HandleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SessionForm;
