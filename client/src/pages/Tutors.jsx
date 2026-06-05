import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Tutors() {
const navigate = useNavigate();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tutors")
      .then((response) => response.json())
      .then((data) => {
        setTutors(data);
      })
      .catch((error) => {
        console.error("Error fetching tutors:", error);
      });

  }, 
  []);


const handleBookTutor = async (tutorId) => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    alert("Please login first");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          tutorId,
          sessionDate: new Date(),
          notes: "",
        }),
      }
    );


    const data = await response.json();

    if (response.ok) {
      alert("Session booked!");
    } else {

      alert(data.message);

    }

  } catch (error) {

    console.error(error);
    alert("Booking failed");

  }

};
  return (

    <DashboardLayout>

      {/* Page Header */}
      <div style={{ marginBottom: "30px" }}>

        <h1 style={{ margin: 0 }}>
          Browse Tutors
        </h1>

        <p style={{ color: "#94a3b8" }}>
          Find the perfect tutor for your learning goals.
        </p>

      </div>


      {/* Tutor Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >

        {/* Generate Tutor Cards */}
        {tutors.map((tutor, index) => (

          <div
            key={index}
            style={{
              backgroundColor: "#03163d",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
            }}
          >

            {/* Avatar */}
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
              {tutor.name.charAt(0)}
            </div>


            {/* Tutor Name */}
            <h2 style={{ marginTop: 0 }}>
              {tutor.name}
            </h2>


            {/* Subject */}
            <p style={{ color: "#60a5fa", marginTop: "-10px" }}>
              {tutor.subject}
            </p>


            <p>
               ${tutor.price}/hour
            </p>

            <p style={{ color: "#22c55e" }}>
              ● Available Now
            </p>


            {/* Experience */}
            <p style={{ color: "#94a3b8" }}>
              {tutor.experience}
            </p>


            {/* Bio */}
            <p style={{ lineHeight: "1.6" }}>
              {tutor.bio}
            </p>


            {/* Button */}
            <button
                onClick={() =>navigate(`/book/${tutor._id}`)}
              style={{width: "100%", padding: "12px", marginTop: "15px",
                backgroundColor: "#2563eb",color: "white", border: "none",borderRadius: "12px",
                cursor: "pointer",fontWeight: "bold",
              }}
            >
              Book Session
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );
}

export default Tutors;