import DashboardLayout from "../components/DashboardLayout";

function Tutors() {

  // Fake tutor data for now
  const tutors = [

    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      rating: "4.9",
      experience: "5 years experience",
      bio: "Helping students master algebra and calculus.",
    },

    {
      name: "David Lee",
      subject: "Physics",
      rating: "4.8",
      experience: "4 years experience",
      bio: "SAT and college physics specialist.",
    },

    {
      name: "Emily Carter",
      subject: "Programming",
      rating: "5.0",
      experience: "6 years experience",
      bio: "Frontend and JavaScript tutor.",
    },

  ];


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


            {/* Rating */}
            <p>
              ⭐ {tutor.rating}
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
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
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