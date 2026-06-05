<h2>Tutor Recommendation Assistant</h2>

A full-stack tutor matching and booking platform built with React, Node.js, Express, and MongoDB.

The application allows students to create accounts, browse tutors, book tutoring sessions, manage their profiles, and track bookings through a personalized dashboard.

---
<h3>Features</h3>

**Authentication**

- User Registration
- User Login
- JWT Authentication
- Session Persistence using Local Storage
- Automatic Login After Registration
- Secure Logout Functionality

**Dashboard**
- Personalized Welcome Message
- Dynamic User Avatar
- Dashboard Statistics
- Responsive Sidebar Navigation

### **Tutor Management**
- Browse Available Tutors
- Dynamic Tutor Data from MongoDB
- Tutor Subjects, Pricing, Experience, and Biography
- Tutor Booking Functionality

### **Bookings**
- Create New Tutoring Sessions
- View Existing Bookings
- Booking Status Tracking
- MongoDB Booking Storage
- Tutor Information Population

### **User Profiles**
- View Profile Information
- Edit Personal Details
- Update Education Information
- Update Favorite Subject
- Update Bio
- Update Contact Information

### **Settings**
- Account Settings
- Password Management
- Notification Preferences
- Dark Mode Preferences
- Account Information
- Account Deletion

### **Messages**
- Messaging Interface Foundation
- Future Real-Time Chat Support

---
<h2>Tech Stack</h2>

### **Frontend**
- React
- React Router
- JavaScript
- CSS Inline Styling

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB
- Mongoose

### **Authentication**
- JWT (JSON Web Tokens)
- bcryptjs

---

<h2>Project Structure</h2>

```text
client/
├── src/
│   ├── pages/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx

server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js
```
<h2>Database Models</h2>

### **User**

- Name
- Email
- Password
- Phone Number
- Location
- Education Level
- Favorite Subject
- Bio
- Notification Settings
- Dark Mode Preferences

### **Tutor**
- Name
- Subject
- Hourly Rate
- Experience
- Biography

### **Booking**
- User ID
- Tutor ID
- Session Date
- Notes
- Booking Status

<h2>Installation</h2>
### **Clone Repository**
```bash
git clone https://github.com/yourusername/tutor-recommendation-assistant.git
```

### **Install Client Dependencies**
```bash
cd client
npm install
```

### **Install Server Dependencies**
```bash
cd server
npm install
```

### **Create Environment Variables**

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

<h2>Running the Application</h2>
Start Backend
cd server
node server.js

Backend runs on:

http://localhost:5000
Start Frontend
cd client
npm run dev

Frontend runs on:

http://localhost:5173

<h2>API Endpoints</h2>
### **Authentication**
- `POST /api/auth/register`
- `POST /api/auth/login`

### **Users**
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `PUT /api/users/settings/:id`
- `DELETE /api/users/:id`

### **Tutors**
- `GET /api/tutors`

### **Bookings**
- `GET /api/bookings`
- `POST /api/bookings`

<h2>Future Improvements</h2>

- Real-Time Messaging
- Tutor Reviews and Ratings
- AI Tutor Recommendations
- Calendar Scheduling
- Email Notifications
- Payment Integration
- Tutor Availability System
- Admin Dashboard
- Video Session Integration
