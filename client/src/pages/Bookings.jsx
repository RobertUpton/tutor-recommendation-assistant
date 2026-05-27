import DashboardLayout from "../components/DashboardLayout";

function Bookings() {

  // Fake booking data for now
  const bookings = [

    {
      tutor: "Sarah Johnson",
      subject: "Mathematics",
      date: "March 12, 2026",
      time: "4:00 PM",
      status: "Upcoming",
    },

    {
      tutor: "David Lee",
      subject: "Physics",
      date: "March 15, 2026",
      time: "2:30 PM",
      status: "Upcoming",
    },

    {
      tutor: "Emily Carter",
      subject: "Programming",
      date: "March 2, 2026",
      time: "6:00 PM",
      status: "Completed",
    },

  ];


  return (

    <DashboardLayout>

      {/* Page Header */}
      <div style={{ marginBottom: "30px" }}>

        <h1 style={{ margin: 0 }}>
          My Bookings
        </h1>

        <p style={{ color: "#94a3b8" }}>
          View and manage your tutoring sessions.
        </p>

      </div>


      {/* Booking Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >

        {/* Generate Booking Cards */}
        {bookings.map((booking, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "#03163d",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            }}
          >

            {/* Tutor Avatar */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "20px",
              }}
            >
              {booking.tutor.charAt(0)}
            </div>


            {/* Tutor Name */}
            <h2 style={{ marginTop: 0 }}>
              {booking.tutor}
            </h2>


            {/* Subject */}
            <p style={{ color: "#60a5fa" }}>
              {booking.subject}
            </p>


            {/* Date */}
            <p>
              📅 {booking.date}
            </p>


            {/* Time */}
            <p>
              ⏰ {booking.time}
            </p>


            {/* Status */}
            <p
              style={{
                color:
                  booking.status === "Upcoming"
                    ? "#22c55e"
                    : "#94a3b8",
                fontWeight: "bold",
              }}
            >
              {booking.status}
            </p>


            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
              }}
            >

              {/* Join Session */}
              <button
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Join Session
              </button>


              {/* Cancel */}
              <button
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: "#07173a",
                  color: "#ef4444",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );
}

export default Bookings;