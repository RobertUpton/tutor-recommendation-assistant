import { useState } from "react";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (

    // Full page container
    <div style={{ minHeight: "100vh", backgroundColor: "#020f2b", color: "white" }}>

      {/* Topbar */}
      <div style={{ backgroundColor: "#03163d", display: "flex", justifyContent: "space-between",
      alignItems: "center", padding: "18px 25px", borderBottom: "1px solid #0f172a" }}>

        {/* Left side */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

          {/* Logo */}
          <h2 style={{ margin: 0, fontSize: "26px", fontWeight: "bold" }}>
            TutorMatch <span style={{ color: "#3b82f6" }}>AI</span>
          </h2>


          {/* Menu Icon */}
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            style={{ fontSize: "20px", cursor: "pointer" }}>

            ☰
          </div>

        </div>


        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>

          {/* Notification */}
          <div style={{ fontSize: "20px", cursor: "pointer" }}>
            🔔
          </div>

          {/* Profile */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

            {/* Avatar */}
            <div style={{ width: "38px", height: "38px", borderRadius: "50%",
            backgroundColor: "#2563eb", display: "flex", justifyContent: "center",
            alignItems: "center", fontWeight: "bold" }}>
              U
            </div>

            {/* Username */}
            <p style={{ margin: 0 }}>
              User
            </p>

          </div>

        </div>

      </div>


      {/* Dashboard Body */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 73px)" }}>

        {/* Sidebar */}
        <div style={{  width: sidebarOpen ? "165px" : "0px", backgroundColor: "#03163d", padding: "25px",
        borderRight: "1px solid #0f172a", borderRight: "1px solid #0f172a", }} > 

          {/* Sidebar Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            
            <p style={{ backgroundColor: "#07173a", padding: "14px",
            borderRadius: "14px", fontWeight: "500", margin: 0, cursor: "pointer" }}>
              {sidebarOpen && "Dashboard"}
            </p>

            {/* Other Links */}
            <p style={{ padding: "14px", borderRadius: "14px", margin: 0,
            cursor: "pointer", color: "#cbd5e1" }}>
              {sidebarOpen && "Browse Tutors"}
              
            </p>

            <p style={{ padding: "14px", borderRadius: "14px", margin: 0,
            cursor: "pointer", color: "#cbd5e1" }}>
              {sidebarOpen && " My Bookings"}
            </p>

            <p style={{ padding: "14px", borderRadius: "14px", margin: 0,
            cursor: "pointer", color: "#cbd5e1" }}>
              {sidebarOpen && "Messages"}
            </p>

            <p style={{ padding: "14px", borderRadius: "14px", margin: 0,
            cursor: "pointer", color: "#cbd5e1" }}>
              {sidebarOpen && "Profile"}
            </p>

            <p style={{ padding: "14px", borderRadius: "14px", margin: 0,
            cursor: "pointer", color: "#cbd5e1" }}>
              {sidebarOpen && "Settings"}
            </p>

          </div>

        </div>


        {/* Main content area */}
        <div style={{ flex: 1, padding: "30px" }}>
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;