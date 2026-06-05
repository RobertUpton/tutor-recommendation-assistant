import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";

function BookTutor() {

  const { id } = useParams();

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [tutor, setTutor] =
    useState(null);

  const [sessionDate,
    setSessionDate] =
    useState("");

  const [selectedTime,
    setSelectedTime] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [availableTimes,
    setAvailableTimes] =
    useState([]);

  useEffect(() => {

    fetch(
      `http://localhost:5000/api/tutors/${id}`
    )
      .then((res) => res.json())
      .then((data) => {

        setTutor(data);

        generateTimeSlots();

      });

  }, []);

  const generateTimeSlots = () => {

    const slots = [];

    const startHour =
      Math.floor(
        Math.random() * 5
      ) + 9;

    for (let i = 0; i < 5; i++) {

      slots.push(
        `${startHour + i}:00`
      );

    }

    setAvailableTimes(slots);
  };

  const handleBooking =
    async () => {

      if (
        !sessionDate ||
        !selectedTime
      ) {
        alert(
          "Select date and time"
        );
        return;
      }

      const bookingDate =
        `${sessionDate} ${selectedTime}`;

      const response =
        await fetch(
          "http://localhost:5000/api/bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              userId: user.id,
              tutorId: tutor._id,
              sessionDate:
                bookingDate,
              notes,
            }),
          }
        );

      if (response.ok) {

        alert(
          "Session booked!"
        );

        navigate("/bookings");

      }
    };

  if (!tutor) {

    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <h1>
        Book Session
      </h1>

      <h2>
        {tutor.name}
      </h2>

      <p>
        {tutor.subject}
      </p>

      <div
        style={{
          backgroundColor:
            "#03163d",
          padding: "25px",
          borderRadius: "20px",
          maxWidth: "500px",
        }}
      >

        <label>
          Session Date
        </label>

        <input
          type="date"
          value={sessionDate}
          onChange={(e) =>
            setSessionDate(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <label>
          Available Times
        </label>

        <select
          value={selectedTime}
          onChange={(e) =>
            setSelectedTime(
              e.target.value
            )
          }
          style={inputStyle}
        >

          <option value="">
            Select Time
          </option>

          {availableTimes.map(
            (time) => (
              <option
                key={time}
                value={time}
              >
                {time}
              </option>
            )
          )}

        </select>

        <label>
          Notes
        </label>

        <textarea
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
          style={{
            ...inputStyle,
            height: "100px",
          }}
        />

        <button
          onClick={handleBooking}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            backgroundColor:
              "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>

      </div>

    </DashboardLayout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "12px",
};

export default BookTutor;