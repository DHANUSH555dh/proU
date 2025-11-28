# QUICK START GUIDE

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies (Run in Command Prompt)

```cmd
cd d:\proU\hotel-booking-system
install.bat
```

**OR manually:**
```cmd
cd backend
npm install
```

### 2. Create .env File

In the `backend` folder, create a file named `.env` and add:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/hotel-booking?retryWrites=true&w=majority
JWT_SECRET=myHotelBookingSecretKey2024!@#$
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5500
```

**⚠️ IMPORTANT:** You must paste your MongoDB Atlas URI in the .env file!

### 3. Start Backend Server

```cmd
cd backend
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on port 5000
```

### 4. Start Frontend

**Option A - VS Code:**
1. Open `frontend/index.html`
2. Right-click and select "Open with Live Server"

**Option B - Command Line:**
```cmd
cd frontend
python -m http.server 5500
```

### 5. Access the Application

Open browser and go to: `http://localhost:5500`

## 🎯 First Time Setup

### Register Admin Account
1. Go to Register page
2. Fill in your details
3. ✅ Check "Register as Admin"
4. Click Register

### Add Sample Rooms
1. Login as admin
2. Go to Admin Dashboard
3. Click "Add Room"
4. Add room details:
   - Room Number: 101
   - Type: Deluxe
   - Price: 150
   - Capacity: 2
   - Description: Luxurious room with ocean view
5. Click "Add Room"

### Make a Booking (as Customer)
1. Logout
2. Register new customer account (without admin checkbox)
3. Go to Rooms page
4. Click "Book Now" on any room
5. Select dates and guests
6. Confirm booking
7. View in "My Bookings"

## 📝 MongoDB Atlas Setup (If you don't have it)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new cluster (M0 Free tier)
4. Create a database user:
   - Click "Database Access"
   - Add new database user
   - Set username and password
   - Grant "Atlas Admin" role
5. Whitelist your IP:
   - Click "Network Access"
   - Add IP Address
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
6. Get connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `myFirstDatabase` with `hotel-booking`

## ❓ Common Issues

### "Cannot find module" error
```cmd
cd backend
npm install
```

### "MongoDB connection error"
- Check your .env file
- Verify MongoDB URI is correct
- Ensure IP is whitelisted in MongoDB Atlas
- Check internet connection

### Frontend can't connect to backend
- Make sure backend is running (http://localhost:5000)
- Check console for errors
- Verify API_URL in script.js is `http://localhost:5000/api`

### PowerShell script execution error
- Use Command Prompt (CMD) instead
- OR run: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

## 🎉 You're All Set!

Your hotel booking system is ready to use. Enjoy! 🏨
