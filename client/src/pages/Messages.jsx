import DashboardLayout from "../components/DashboardLayout";

function Messages() {

  return (

    <DashboardLayout>

      {/*** Page header */}
      <div style= {{marginBotton:"30px", }}>

        <h1 style={{margin: 0 }}>
          Messages
        </h1>

        <p style={{color: "#94a3b8"}}>
          Communicate with your tutors and students
        </p>
        
      </div> {/**End of page header */}     

      {/**Message card */}
      <div style={{backgroundColor: "#03163d", padding: "25px", borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)"}}>

      </div>

      <h2 style={{margintop: 0,}}>
        Recent Messages
      </h2>

      <p style={{color: "#94a3b8" }}>
        No messages yet.
      </p>

    </DashboardLayout>

  );
}

export default Messages;