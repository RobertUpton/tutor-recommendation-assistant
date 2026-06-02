import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



function Login() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

        navigate("/dashboard");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.error(error);

    }
  };

  return (
    //may needs fix the styling//

    // Fullscreen container that centers everything
    <div style={{display: "flex", justifyContent:"center", alignItems: "center",height:"100vh"}}>

       {/* Login card container */}
      <div style={{backgroundColor:"rgb(65, 94, 151)", padding: "40px",
       borderRadius: "20px", width: "350px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",}}>

        {/* Login title */}
        <h1 style={{color: "white", textAlign: "center", marginBottom: "30px"}}> 
         Login
        </h1>
        <p style={{color: "white", textAlign: "center", marginBottom: "30px"}}> 
          Welcome! Please login to your account.
        </p>

        {/** Email input **/}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />

        {/*** Password input ***/}
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />

        {/**** Button ****/}
        <button
        onClick={handleLogin}
         style={{ width: "100%", padding: "12px",backgroundColor: "white", color: "rgb(65, 94, 151)", 
         border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", }}>
         Login
        </button>

        {/****bottom text****/}
        <div 
          style={{display: "flex",justifyContent: "center", gap: "5px",marginTop: "20px",alignItems: "center",}}>
          <p  style={{ color: "white",margin: 0}}> 
            Don't have account? 
          </p>
          <Link 
          to= "/register"
          style={{color: "#dbeafe", textDecoration: "none", fontWeight: "bold",}}>
            Sign Up 
          </Link>

        </div>

      </div>

    </div>

  );
}

export default Login;