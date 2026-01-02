# User Profile & Booking Management Setup

## Overview
This feature adds user profile management and booking history functionality to the car rental application.

## Features Added
- ✅ User Profile Page with personal details
- ✅ Booking History Management
- ✅ Backend API for booking storage
- ✅ MongoDB integration
- ✅ Authentication-protected routes
- ✅ Booking status tracking (Upcoming, Ongoing, Completed)

## Setup Instructions

### 1. Backend Setup
```bash
cd server
npm install
```

### 2. Environment Configuration
Create a `.env` file in the server directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/carrental
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For Windows (if MongoDB is installed)
mongod

# For macOS with Homebrew
brew services start mongodb-community

# For Ubuntu/Linux
sudo systemctl start mongod
```

### 4. Start the Backend Server
```bash
cd server
npm run dev
```

### 5. Start the Frontend
```bash
cd client
npm run dev
```

## API Endpoints

### Bookings
- `GET /api/bookings/user/:userId` - Get all bookings for a user
- `POST /api/bookings` - Create a new booking

## Usage

1. **Login/Register**: Users must be authenticated to access profile features
2. **Make a Booking**: Go to Models → Select a car → Fill booking details → Confirm
3. **View Profile**: Click Account dropdown → Profile
4. **View Bookings**: In Profile page, click "My Bookings" tab

## Database Schema

### Booking Model
```javascript
{
  userId: String (Firebase UID),
  carId: Number,
  carName: String,
  startDate: Date,
  endDate: Date,
  location: String,
  totalPrice: Number,
  status: String (Upcoming/Ongoing/Completed),
  createdAt: Date,
  updatedAt: Date
}
```

## File Structure
```
server/
├── models/Booking.js
├── routes/bookings.js
├── index.js
└── .env

client/src/
├── Pages/Profile.jsx
├── components/Profile/MyBookings.jsx
└── (updated existing files)
```

## Notes
- Bookings are automatically saved when users confirm a booking
- Profile page shows user details from Firebase Authentication
- Booking status is currently set to "Upcoming" by default
- The system calculates total price based on daily rate and booking duration