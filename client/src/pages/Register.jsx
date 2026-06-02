import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//This UI is better
function Register() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

const handleRegister = async (e) => {

  e.preventDefault();

  console.log({
    name,
    email,
    password,
    confirmPassword,
  });

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      alert(data.message);
      return;
    }

      localStorage.setItem(
      "token",
      data.token
      );

      navigate("/Dashboard");

  } catch (error) {

    console.error(error);
    alert(error.message);

  }
};

  // Shared styling for all input fields, form labels & submit button
  const inputStyle = {
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      border: "none",
      marginBottom: "12px",
      fontSize: "14px",
      boxSizing: "border-box",
    };
  const labelStyle = {
    color: "#e2e8f0",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  };
    const buttonStyle = {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "8px",
  };


  return (
    //may need fix the styling//

    // Fullscreen container that centers everything
    <div 
     style={{
        minHeight: "85vh",display: "flex", justifyContent: "center", alignItems: "center",
        background: "linear-gradient(135deg, #020f2b 0%, #07173a 100%)", }}>
    

       {/* Signing up card container */}
      <div style={{backgroundColor:"rgb(65, 94, 151)", padding: "30px",
       borderRadius: "18px", width: "300px", 
       background: "linear-gradient(180deg, #3f5fa2 0%, #415e97 100%)", 
       boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",}}>

        {/* Register title */}
        <h1 style={{color: "#dbeafe", textAlign: "center", marginBottom: "30px"}}> 
         Sign Up
        </h1>

        <p style={{color: "#dbeafe", textAlign: "center", marginBottom: "30px"}}> 
         Join us today and get started
        </p>

        {/* Registration form */}
        <form onSubmit={handleRegister}>

          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        
        
  
        {/** Email input **/}
        <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        

        {/*** Password input ***/}
        <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
       
        {/*** confirm Password input ***/}
        <label style={labelStyle}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />

        
        {/** Create Account Button ****/}
         <button type="submit" style={buttonStyle}>
            Create Account
          </button>
          
        </form>

        {/****bottom text****/}
        <div style={{display: "flex",justifyContent: "center", gap: "5px",marginTop: "20px",alignItems: "center",}}>
          <p  style={{ color: "white",margin: 0}}> 
            I have an account?
          </p>
          <Link 
          to= "/Login"
          style={{color: "#dbeafe", textDecoration: "none", fontWeight: "bold",}}>
            Sign in 
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Register;