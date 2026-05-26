import DashboardLayout from "../components/DashboardLayout";

function Dashboard() {
  return (

    <DashboardLayout>

      {/* Welcome Section */}
      <div style={{ marginBottom: "30px" }}>

        <h1 style={{ margin: 0 }}>
          Welcome back, User 
        </h1>

        <p style={{ color: "#94a3b8" }}>
          Here's what's happening with your tutoring sessions.
        </p>

      </div>


      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "20px",
            borderRadius: "20px",
            flex: 1,
          }}
        >
          <p style={{ color: "#94a3b8" }}>
            Upcoming Sessions
          </p>

          <h1 style={{ margin: 0 }}>
            2
          </h1>
        </div>


        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "20px",
            borderRadius: "20px",
            flex: 1,
          }}
        >
          <p style={{ color: "#94a3b8" }}>
            Saved Tutors
          </p>

          <h1 style={{ margin: 0 }}>
            5
          </h1>
        </div>


        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "20px",
            borderRadius: "20px",
            flex: 1,
          }}
        >
          <p style={{ color: "#94a3b8" }}>
            Completed Sessions
          </p>

          <h1 style={{ margin: 0 }}>
            14
          </h1>
        </div>

      </div>

    </DashboardLayout>

  );
}

export default Dashboard;