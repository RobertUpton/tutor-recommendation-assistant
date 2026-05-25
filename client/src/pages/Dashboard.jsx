function Dashboard() {
  return (

    // Main dashboard container
    <div
      style={{display: "flex", height: "100vh", backgroundColor: "#020f2b", }}>

      {/* Sidebar */}
      <div
        style={{ width: "250px", backgroundColor: "#03163d", padding: "20px", color: "white",}} >
        <h2>TutorMatch AI</h2>

        <div style={{ marginTop: "40px" }}>
          <p>Dashboard</p>
          <p>Browse Tutors</p>
          <p>My Bookings</p>
          <p>Messages</p>
          <p>Settings</p>

        </div>

      </div>

      {/* Top Header */}
      <div style={{display: "flex",justifyContent: "space-between", alignItems: "center",marginBottom: "40px",}}>

      </div>

      {/* Right side */}
      <div style={{ display: "flex",alignItems: "center",gap: "20px",}}>

      </div>

      {/* Main content area */}
      <div
        style={{ flex: 1, padding: "40px", color: "white", }}>
        <h1>Welcome back </h1>

        <p>
          Here's what's happening with your tutoring sessions.
        </p>

      </div>


    {/* Notification icon */}
    <div
      style={{
        color: "white",
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      🔔
    </div>
    {/* Profile section */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    ></div>
      
 {/* Avatar */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#2563eb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        R
      </div>

       {/* Username */}
      <p style={{ color: "white", margin: 0 }}>
        R
      </p>

    </div>
  );

}

export default Dashboard;