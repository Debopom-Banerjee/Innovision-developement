import React, { useState } from "react";
export const Forms = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    year: "",
    collegeroll: "",
    phone: "",
    email: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">FullName:</label>
          <input
            type="text"
            value={userRegistration.name}
            onChange={handleInput}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            value={userRegistration.year}
            onChange={handleInput}
            name="year"
            id="year"
          />
        </div>
        <div>
          <label htmlFor="collegeroll">College RollNo.:</label>
          <input
            type="text"
            value={userRegistration.collegeroll}
            onChange={handleInput}
            name="collegeroll"
            id="collegeroll"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="number"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <button type="submit"> Register Now</button>
      </form>
    </>
  );
};
