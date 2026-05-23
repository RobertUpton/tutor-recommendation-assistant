import { Link } from "react-router-dom";
function Login() {
  return (
    //may need fix the styling//

    // Fullscreen container that centers everything
    <div style={{display: "flex", justifyContent:"center", alignItems: "center",height:"100vh"}}>

       {/* Signing up card container */}
      <div style={{backgroundColor:"rgb(65, 94, 151)", padding: "40px",
       borderRadius: "20px", width: "350px", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",}}>

        {/* Register title */}
        <h1 style={{color: "white", textAlign: "center", marginBottom: "30px"}}> 
         Sign Up
        </h1>

         <input
          type="Full name"
          placeholder="Enter your Full name"
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />
        {/**<p style={{color: "white", textAlign: "center", marginBottom: "30px"}}> 
         
        </p>**/}

        {/** Email input **/}
        <input
          type="email"
          placeholder="Enter your email"
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />

        {/*** Password input ***/}
        <input
          type="Password"
          placeholder="Enter your Password"
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />
        {/*** confirm Password input ***/}
        <input
          type=" Confirm Password"
          placeholder="Confirm your Password"
          style={{width: "100%",padding: "12px",marginBottom: "20px",borderRadius: "10px", border: "none",}}
        />

        {/** Create Account Button ****/}
         <button
         style={{ width: "100%", padding: "12px",backgroundColor: "white", color: "rgb(65, 94, 151)", 
         border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", }}>
         Sign up
        </button>

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

export default Login;