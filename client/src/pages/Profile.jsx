import DashboardLayout from "../components/DashboardLayout";

function Profile() {
  return (
    <DashboardLayout>

      {/* Page Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ margin: 0 }}>
          My Profile
        </h1>

        <p style={{ color: "#94a3b8" }}>
          View and manage your profile information.
        </p>
      </div>

      {/* Profile Card */}
      <div
        style={{
          backgroundColor: "#03163d",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "800px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        }}
      >

        {/* Avatar */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#2563eb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          U
        </div>

        {/* User Info */}
        <h2 style={{ marginTop: 0 }}>
          User Name
        </h2>

        <p style={{ color: "#94a3b8" }}>
          user@email.com
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #1e293b",
            margin: "25px 0",
          }}
        />

        {/* Details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >

          <div>
            <p style={{ color: "#94a3b8", marginBottom: "5px" }}>
              Education Level
            </p>
            <p>University Student</p>
          </div>

          <div>
            <p style={{ color: "#94a3b8", marginBottom: "5px" }}>
              Favorite Subject
            </p>
            <p>Computer Science</p>
          </div>

          <div>
            <p style={{ color: "#94a3b8", marginBottom: "5px" }}>
              Upcoming Sessions
            </p>
            <p>2</p>
          </div>

          <div>
            <p style={{ color: "#94a3b8", marginBottom: "5px" }}>
              Completed Sessions
            </p>
            <p>14</p>
          </div>

        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #1e293b",
            margin: "25px 0",
          }}
        />

        {/* About Me */}
        <div>
          <h3>About Me</h3>

          <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
            I'm a student using TutorMatch AI to improve my programming,
            mathematics, and problem-solving skills.
          </p>
        </div>

        {/* Button */}
        <button
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Profile;