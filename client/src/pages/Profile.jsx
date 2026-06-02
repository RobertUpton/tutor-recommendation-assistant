import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

function Profile() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );
if (!user) {
  return (
    <DashboardLayout>
      <h2>Please login again.</h2>
    </DashboardLayout>
  );
}


  const [profile, setProfile] =
    useState(null);

  const [editing, setEditing] =
    useState(false);

  useEffect(() => {

  if (!user?.id) return;

  fetch(
    `http://localhost:5000/api/users/${user.id}`
  )
      .then((response) =>
        response.json()
      )
      .then((data) =>
        setProfile(data)
      );

  }, []);

  const saveProfile = async () => {

    const response = await fetch(
      `http://localhost:5000/api/users/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(profile),
      }
    );

    const updated =
      await response.json();

    setProfile(updated);

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        name: updated.name,
        email: updated.email,
      })
    );

    setEditing(false);

    alert("Profile Updated");
  };

  if (!profile) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div
        style={{
          backgroundColor:
            "#03163d",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "850px",
        }}
      >

        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            backgroundColor:
              "#2563eb",
            display: "flex",
            justifyContent:
              "center",
            alignItems: "center",
            fontSize: "34px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {profile.name
            .charAt(0)
            .toUpperCase()}
        </div>

        {editing ? (
          <>
            <input
              value={profile.name}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  name:
                    e.target.value,
                })
              }
            />

            <input
              value={profile.email}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  email:
                    e.target.value,
                })
              }
            />
          </>
        ) : (
          <>
            <h2>
              {profile.name}
            </h2>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              {profile.email}
            </p>
          </>
        )}

        <hr
          style={{
            margin: "25px 0",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "20px",
          }}
        >

          <div>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Phone
            </p>

            {editing ? (
              <input
                value={
                  profile.phone
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    phone:
                      e.target.value,
                  })
                }
              />
            ) : (
              <p>
                {profile.phone ||
                  "Not Added"}
              </p>
            )}

          </div>

          <div>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Location
            </p>

            {editing ? (
              <input
                value={
                  profile.location
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location:
                      e.target.value,
                  })
                }
              />
            ) : (
              <p>
                {profile.location ||
                  "Not Added"}
              </p>
            )}

          </div>

          <div>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Education Level
            </p>

            {editing ? (
              <input
                value={
                  profile.educationLevel
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    educationLevel:
                      e.target.value,
                  })
                }
              />
            ) : (
              <p>
                {profile.educationLevel ||
                  "Not Added"}
              </p>
            )}

          </div>

          <div>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Favorite Subject
            </p>

            {editing ? (
              <input
                value={
                  profile.favoriteSubject
                }
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    favoriteSubject:
                      e.target.value,
                  })
                }
              />
            ) : (
              <p>
                {profile.favoriteSubject ||
                  "Not Added"}
              </p>
            )}

          </div>

        </div>

        <h3
          style={{
            marginTop: "30px",
          }}
        >
          About Me
        </h3>

        {editing ? (
          <textarea
            value={profile.bio}
            onChange={(e) =>
              setProfile({
                ...profile,
                bio:
                  e.target.value,
              })
            }
            rows="5"
            style={{
              width: "100%",
            }}
          />
        ) : (
          <p>
            {profile.bio ||
              "No bio added yet"}
          </p>
        )}

        <button
          onClick={() =>
            editing
              ? saveProfile()
              : setEditing(true)
          }
          style={{
            marginTop: "25px",
            padding:
              "12px 20px",
            backgroundColor:
              "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          {editing
            ? "Save Profile"
            : "Edit Profile"}
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Profile;