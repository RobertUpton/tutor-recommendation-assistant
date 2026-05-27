import DashboardLayout from "../components/DashboardLayout";

function Settings() {

  return (

    <DashboardLayout>

      {/* Page Header */}
      <div style={{ marginBottom: "30px" }}>

        <h1 style={{ margin: 0 }}>
          Settings
        </h1>

        <p style={{ color: "#94a3b8" }}>
          Manage your account settings and preferences.
        </p>

      </div>


      {/* Settings Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >

        {/* Account Settings */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          }}
        >

          <h2 style={{ marginTop: 0 }}>
            Account Settings
          </h2>


          {/* Username */}
          <div style={{ marginBottom: "20px" }}>

            <p style={{ marginBottom: "8px", color: "#94a3b8" }}>
              Username
            </p>

            <input
              type="text"
              placeholder="Enter username"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#07173a",
                color: "white",
              }}
            />

          </div>


          {/* Email */}
          <div>

            <p style={{ marginBottom: "8px", color: "#94a3b8" }}>
              Email
            </p>

            <input
              type="email"
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#07173a",
                color: "white",
              }}
            />

          </div>

        </div>


        {/* Security Settings */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          }}
        >

          <h2 style={{ marginTop: 0 }}>
            Security
          </h2>


          {/* Password */}
          <div style={{ marginBottom: "20px" }}>

            <p style={{ marginBottom: "8px", color: "#94a3b8" }}>
              Password
            </p>

            <input
              type="password"
              placeholder="Enter new password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#07173a",
                color: "white",
              }}
            />

          </div>


          {/* Confirm Password */}
          <div>

            <p style={{ marginBottom: "8px", color: "#94a3b8" }}>
              Confirm Password
            </p>

            <input
              type="password"
              placeholder="Confirm password"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#07173a",
                color: "white",
              }}
            />

          </div>

        </div>


        {/* Preferences */}
        <div
          style={{
            backgroundColor: "#03163d",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          }}
        >

          <h2 style={{ marginTop: 0 }}>
            Preferences
          </h2>


          {/* Notification Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >

            <p style={{ margin: 0 }}>
              Email Notifications
            </p>

            <input type="checkbox" />

          </div>


          {/* Dark Mode Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            <p style={{ margin: 0 }}>
              Dark Mode
            </p>

            <input type="checkbox" defaultChecked />

          </div>

        </div>

      </div>


      {/* Save Button */}
      <button
        style={{
          marginTop: "30px",
          padding: "14px 24px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "14px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Save Changes
      </button>

    </DashboardLayout>

  );
}

export default Settings;