import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

function Bookings() {

  const [bookings, setBookings] =
    useEffect(() => {

  fetch(
    "http://localhost:5000/api/bookings"
  )
    .then((response) =>
      response.json()
    )
    .then((data) => {

      setBookings(data);

    });

}, []);

  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) return;

    fetch(
      `http://localhost:5000/api/bookings/user/${user.id}`
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <DashboardLayout>

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1>
          My Bookings
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          View and manage your
          tutoring sessions.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >

        {bookings.length === 0 && (

          <div
            style={{
              backgroundColor:
                "#03163d",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            No bookings found.
          </div>

        )}

        {bookings.map((booking) => (

          <div
            key={booking._id}
            style={{
              backgroundColor:
                "#03163d",
              padding: "25px",
              borderRadius: "20px",
            }}
          >

            <h2>
              {
                booking.tutorId?.name
              }
            </h2>

            <p
              style={{
                color:
                  "#60a5fa",
              }}
            >
              {
                booking.tutorId
                  ?.subject
              }
            </p>

            <p>
              💰 $
              {
                booking.tutorId
                  ?.price
              }
              /hour
            </p>

            <p>
              📅
              {" "}
              {new Date(
                booking.sessionDate
              ).toLocaleDateString()}
            </p>

            <p>
              Status:
              {" "}
              {booking.status}
            </p>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
}

export default Bookings;