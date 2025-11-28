# Hotel Room Booking System

A complete full-stack hotel room booking system built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

## 🚀 Features

### Customer Features
- User registration and login with JWT authentication
- Browse available rooms with filtering options
- View detailed room information
- Book rooms with date selection
- View and manage personal bookings
- Cancel bookings

### Admin Features
- Admin dashboard with statistics
- Add new rooms
- Edit existing rooms
- Delete rooms
- View all bookings
- Manage room availability

## 📁 Project Structure

```
hotel-booking-system/
├── frontend/
│   ├── index.html              # Home page
│   ├── styles.css              # Global styles
│   ├── script.js               # JavaScript functionality
│   ├── pages/
│   │   ├── rooms.html          # Room listing page
│   │   ├── login.html          # Login page
│   │   ├── register.html       # Registration page
│   │   └── my-bookings.html    # User bookings page
│   └── admin/
│       ├── admin-dashboard.html    # Admin dashboard
│       ├── add-room.html          # Add room form
│       └── manage-bookings.html   # Manage all bookings
│
└── backend/
    ├── server.js               # Express server
    ├── package.json            # Dependencies
    ├── vercel.json            # Vercel deployment config
    ├── .env.example           # Environment variables template
    ├── models/
    │   ├── User.js            # User model
    │   ├── Room.js            # Room model
    │   └── Booking.js         # Booking model
    └── routes/
        ├── auth.js            # Authentication routes
        ├── rooms.js           # Room routes
        └── bookings.js        # Booking routes
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git (optional)

### Step 1: Install Backend Dependencies

Open Command Prompt (CMD) or PowerShell and run:

```bash
cd backend
npm install
```

This will install:
- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
- nodemon (dev dependency)

### Step 2: Configure Environment Variables

1. Navigate to the `backend` folder
2. Create a new file named `.env` (without any extension)
3. Copy the contents from `.env.example` and paste into `.env`
4. Replace the placeholder values with your actual values:

```env
MONGODB_URI=your_mongodb_atlas_uri_here
JWT_SECRET=your_random_secret_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5500
```

**Getting MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up/Login
3. Create a new cluster (free tier available)
4. Click "Connect" > "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `<database>` with `hotel-booking` or your preferred name

**JWT Secret:**
Use any random string. Example: `myHotelBooking2024SecretKey!@#$`

### Step 3: Start the Backend Server

```bash
cd backend
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The server will start at `http://localhost:5000`

### Step 4: Start the Frontend

1. Install Live Server extension in VS Code, or
2. Use any local web server

**Using VS Code Live Server:**
1. Right-click on `frontend/index.html`
2. Select "Open with Live Server"
3. The app will open at `http://localhost:5500` (or similar)

**Alternative - Using Python:**
```bash
cd frontend
python -m http.server 5500
```

**Alternative - Using Node http-server:**
```bash
npm install -g http-server
cd frontend
http-server -p 5500
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get single room
- `POST /api/rooms` - Create room (admin only)
- `PUT /api/rooms/:id` - Update room (admin only)
- `DELETE /api/rooms/:id` - Delete room (admin only)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/user/:id` - Get user bookings
- `GET /api/bookings` - Get all bookings (admin only)
- `GET /api/bookings/:id` - Get single booking
- `DELETE /api/bookings/:id` - Cancel booking

## 👤 Demo Accounts

After registering users, you can use these credentials:

**Admin Account:**
- Create during registration by checking "Register as Admin"
- Email: admin@hotel.com
- Password: admin123

**Customer Account:**
- Register normally (default role)
- Email: customer@hotel.com
- Password: customer123

## 🚀 Deployment

### Deploy Backend to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd backend
vercel
```

3. Add environment variables in Vercel dashboard

### Deploy Frontend to Vercel/Netlify

1. Update `API_URL` in `frontend/script.js` to your deployed backend URL
2. Deploy the `frontend` folder to Vercel, Netlify, or GitHub Pages

## 🔧 Troubleshooting

**Backend won't start:**
- Check if MongoDB URI is correct
- Ensure `.env` file exists in `backend` folder
- Verify all npm packages are installed

**Frontend can't connect to backend:**
- Check if backend is running on port 5000
- Verify CORS settings in `backend/server.js`
- Update `API_URL` in `frontend/script.js` if needed

**MongoDB connection error:**
- Verify MongoDB Atlas cluster is active
- Check if IP address is whitelisted in MongoDB Atlas
- Ensure connection string format is correct

## 📦 Technologies Used

### Frontend
- HTML5
- CSS3 (with custom responsive design)
- Vanilla JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected routes with middleware
- Role-based access control (admin/customer)
- Input validation
- CORS protection

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the API documentation
3. Ensure all dependencies are installed correctly

---

**Enjoy your Hotel Booking System! 🏨**
