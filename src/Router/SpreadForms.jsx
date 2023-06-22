import React, { useState } from "react";
const SpreadForms = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const onSubmits = (event) => {
    event.preventDefault();
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    //    console.log(event.target.placeholder);
    // const value = event.target.value;

    //   const name = event.target.name;

    const { value, name } = event.target;

    setFullName((prevValue) => {
      console.log(prevValue);

      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="containers">
      <div className="boxs">
        <form onSubmit={onSubmits}>
          <h1>
            
          
            {/* {fullName.fname} {fullName.lname} */}
          </h1>
          {/* <p>{fullName.email}</p>
          <p>{fullName.phone}</p> */}
          <input
            className="inputbox"
            type="text"
            placeholder="Enter your name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            //   autoComplete="off"
          />
          <input
            type="number"
            placeholder="Enter Number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
          />

          <button type="submit" className ="contactBtn">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default SpreadForms;
