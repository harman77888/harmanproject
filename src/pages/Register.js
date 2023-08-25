import React, { useState, useRef } from "react";

const Register = () => {
  const formEl = useRef();
  let initialForm = {
    name: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
  };

  // initial data state

  let [formData, setFormData] = useState(initialForm);
  let [resMsg, setresMsg] = useState("")
  const [user,setuser]=useState([])

  // capture data when user input 
  let setdata = (e) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  console.log(formData)


  // data post to server
  let formSubmit = async (e) => {
    e.preventDefault();


    if(formData.name === "") { setresMsg("Please enter your name."); return}
    if(formData.email === "")  {setresMsg("Please enter your email."); return}
    if(formData.password === "") { setresMsg("Please enter your password."); return}
    if(formData.mobile === "") { setresMsg("Please enter your mobile."); return}
    if(formData.gender === "")  {setresMsg("Select your gender."); return}
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(emailFormat.test(formData.email)===false){
     alert("enter valid email")
     return
    };
    
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    };

    let request =  fetch("http://localhost:3000/productuser/productUsers", requestOptions)
      .then((response) => response.json())
      .then((result) => {
         formEl.current && formEl.current.reset(); // reset form data 
          setFormData(initialForm)
         setresMsg("Your aacount has been successfully created")
      })
      .catch((error) => {
        setresMsg("Opps! something went wrong..",)
      });

  };

let getData = async (e) =>{
e.preventDefault();
var requestOptions = {
  method: "GET",
  headers: {
    "Content-Type":"application/json"
  },

}
   
     let request = await fetch("http://localhost:3000/productuser/removeuser", requestOptions)
     .then((response) => response.json())
     .then((result) => {
   
      setuser(result.data)
    })
    
};


  return (
    <>
      {resMsg}
      <section className="register_form">
        <div className="container">
          <div className="form_main">
            <form method="post" ref={formEl} className="register_form">
              <h1 className="register_user_h1">Register Now</h1>
              <label htmlFor="">Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                autocomplete="off"
                className="user_register_input"
                onChange={(e) => setdata(e)}
              />{" "}
              <br />
              <label htmlFor="">Email :</label>
              <input
                type="text"
                name="email"
                placeholder="Type Your Email"
                autocomplete="off"
                className="user_register_input"
                onChange={(e) => setdata(e)}
              />
              <br />
              <label htmlFor="">Mob No. :</label>
              <input
                type="text"
                name="mobile"
                placeholder="Type Your Name"
                autocomplete="off"
                className="user_register_input"
                onChange={(e) => setdata(e)}
              />
              <br />
              <div className="radio_input">
                <label htmlFor="">Gender :</label>
                <input
                  type="radio"
                  name="gender"
                  id=""
                  value={"male"}
                  autocomplete="off"
                  onChange={(e) => setdata(e)}
                />
                <label htmlFor="">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id=""
                  value={"female"}
                  autocomplete="off"
                  onChange={(e) => setdata(e)}
                />
                <label htmlFor="">Female</label>
              </div>
              <br />
              <label htmlFor="">Password :</label>
              <input
                type="password"
                name="password"
                placeholder="Type Your Password"
                autocomplete="off"
                className="user_register_input"
                onChange={(e) => setdata(e)}
              />
              <br />
              <button
                type="submit"
                className="login_register"
                onClick={(e) => formSubmit(e)}
              >
                Register
              </button>
              <a href="/login" className="register_now">
                Already have Account ? Login
              </a>
            </form>
          </div>
          <button type="button"className="login_register" onClick={(e)=>getData(e)}>Get data</button>
          <table className="mydata"border="2px solid black">
            <thead>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>gender</th>
              <th>password</th>
              <th>Action</th>
            </thead>
            <tbody>
              {user.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.password}</td>
                  <td><button type="button"className="login_register"  >Delete</button> <button type="button" className="login_register" >Edit</button></td>
                </tr>
                
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Register;
