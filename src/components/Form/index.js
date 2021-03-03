import React, { useState, useEffect, useRef } from "react";

const Form = () => {
  //const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [clicked, setClicked] = useState(false);
  //const [welcome, setWelcome] = useState("");

  const isMounted = useRef(false);

  let dataToPass = "";

  let name = "";
  let email = "";
  let phoneNumber = "";
  let password = "";
  let gender = "";

  useEffect(() => {
    if (error === "") {
      showUserName();
    }
  }, [error]);
  const showUserName = () => {
    //console.log(email.value);
    //hello();
    for (let i = 0; i < emailValue.length; i++) {
      if (emailValue.charAt(i) === "@") {
        break;
      }
      dataToPass += emailValue.charAt(i);
    }
    //console.log("hello");
    setUserName(dataToPass);
  };
  const handleSubmit = () => {
    let flag = 0;
    name = document.querySelector('[data-testid="name"]');
    email = document.querySelector('[data-testid="email"]');
    phoneNumber = document.querySelector('[data-testid="phoneNumber"]');
    password = document.querySelector('[data-testid="password"]');
    gender = document.querySelector('[data-testid="gender"]');
    //console.log(email.value)

    if (password.value.length < 6) {
      setError("Password must contain atleast 6 letters");
      flag = 1;
    }
    for (let i = 0; i < phoneNumber.value.length; i++) {
      if (
        !(phoneNumber.value.charAt(i) >= 0 && phoneNumber.value.charAt(i) <= 9)
      ) {
        setError("Phone Number must contain only numbers");
        flag = 1;
      }
    }
    if (email.value.indexOf("@") === -1) {
      setError("Email must contain @");
      flag = 1;
    }
    for (let i = 0; i < name.value.length; i++) {
      if (
        !(name.value.charAt(i) >= 0 && name.value.charAt(i) <= 9) &&
        !(name.value.charAt(i) >= "A" && name.value.charAt(i) <= "Z") &&
        !(name.value.charAt(i) >= "a" && name.value.charAt(i) <= "z")
      ) {
        setError("Name is not alphanumeric");
        flag = 1;
      }
    }

    if (!name.value || !email.value || !phoneNumber.value || !password.value) {
      setError("All fields are mandatory");
      flag = 1;
    }
    setEmailValue(email.value);
    if (flag === 0) {
      setError("");
      setClicked(true);
      name.value = "";
      email.value = "";
      phoneNumber.value = "";
      password.value = "";
    }

    //setError("no");
  };
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" data-testid="name" />
        <br />
        <label>Email:</label>
        <input type="email" data-testid="email" />
        <br />
        <label>Gender:</label>
        <select data-testid="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <br />
        <label>Phone No.:</label>
        <input type="text" data-testid="phoneNumber" />
        <br />
        <label>Password:</label>
        <input type="password" data-testid="password" />
        <br />
        {}
        <button type="button" onClick={handleSubmit} data-testid="submit">
          Submit
        </button>
      </form>
      <div>{error}</div>
      {/* {clicked === true ? <div>Hello {userName}</div> : ""} */}
    </div>
  );
};

export default Form;
