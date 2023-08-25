import React, { useState, useRef } from "react";

const User = () => {
  const formEl = useRef();

  let initialForm = {
    username: "",
    password: "",
  };

  let [formData, setFormData] = useState(initialForm);
  let [resMsg, setresMsg] = useState("");

  let setdata = (e) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  let formSubmit = async (e) => {
    e.preventDefault();
    if (formData.username === "") {
      setresMsg("Please enter your user name");
    }
    if (formData.password === "") {
      setresMsg("Please enter your password");
    }

    console.log(formData)

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }

    let request =  fetch("http://localhost:3000/productuser/getdatabackend", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          formEl.current && formEl.current.reset(); // reset form data
          setFormData(initialForm);
          setresMsg(alert(result.message));
        }
      )
  }; 

  return (
    <>
     {resMsg}
      <section className="user_login">
        <div className="container">
          <div className="user_main">
            <form action="" className="user_info" ref={formEl} onSubmit={(e)=> formSubmit(e)} >
              <h1 className="register_user_h1">Login</h1>
              <input
                type="text"
                placeholder="Username or mobile"
                className="user_register_input"
                onChange={(e)=> setdata(e) }
                name="username"
              />
              <input
                type="text"
                placeholder="Password"
                className="user_register_input"
                name="password"
                onChange={(e)=> setdata(e) }
              />
              <button type="submit" className="login_register">
                Login
              </button>
              <a href="/register" className="register_now">
                Don't have Account ? RegisterNow
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;