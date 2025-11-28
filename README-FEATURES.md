# 🏨 Hotel Room Booking System - Enhanced Version 2.0

A complete full-stack hotel booking application with **advanced features** including JWT authentication, dark mode, availability calendar, admin dashboard with charts, and more!

---

## 🆕 NEW FEATURES IN VERSION 2.0

### ✅ Feature 1: JWT Authentication
- **Secure Login/Register** with bcrypt password hashing
- **JWT tokens** stored in localStorage (7-day expiry)
- **Protected routes**: 
  - Customers must login to book rooms
  - Admins can add/edit/delete rooms
- **Automatic token refresh** and session management
- **Logout functionality** with token cleanup

**Files Updated:**
- `backend/middleware/auth.js` - JWT verification middleware
- `backend/middleware/admin.js` - Admin role verification
- `frontend/script.js` - `fetchWithAuth()` global interceptor

---

### ✅ Feature 2: Room Availability Calendar
- **Interactive calendar** showing available/unavailable dates
- **Date range selection** with visual feedback
- **Real-time availability check** via API
- **Auto-fill booking form** when dates selected
- **Color-coded days**: Green (available), Red (booked), Blue (selected)

**New Endpoint:**
```
POST /api/rooms/check-availability
Body: { roomId, checkIn, checkOut }
Response: { available: boolean, unavailableDates: [] }
```

**Implementation:**
- `frontend/script.js` - `AvailabilityCalendar` class (lines 700+)
- Integrated in room details modal

---

### ✅ Feature 3: Advanced UI/UX Improvements
- **Modal dialogs** for room details with smooth animations
- **Image carousel** for multiple room photos
- **Loading spinners** during API calls
- **Toast notifications** for success/error messages
- **Smooth animations**: FadeIn, SlideUp, FadeInUp
- **Responsive grid layouts** for all screen sizes
- **Enhanced room cards** with hover effects

**Components Added:**
- Image carousel with prev/next navigation
- Modal system with overlay
- Toast notification system
- Loading spinner overlay

---

### ✅ Feature 4: Search & Filter System
- **Real-time search** across room type, description, amenities
- **Dropdown filters**: Room type (All/Single/Double/Suite/Deluxe/Presidential)
- **Price range slider**: $0 - $800
- **Capacity filter**: Min guests required
- **Backend query support**: `/api/rooms?type=Suite&minPrice=200&maxPrice=500`

**Enhanced API:**
```
GET /api/rooms?type=Deluxe&minPrice=100&maxPrice=300&capacity=2&search=ocean
```

**Files Updated:**
- `backend/routes/rooms.js` - Query parameter filtering
- `frontend/script.js` - `searchRooms()`, `applyFilters()`

---

### ✅ Feature 5: Database Improvements
**Room Model** now includes:
```javascript
{
  rating: Number (0-5),
  view: String (City/Ocean/Garden/Mountain/Pool/Street),
  amenities: [String],
  images: [String]
}
```

**Booking Model** now includes:
```javascript
{
  paymentStatus: String (Pending/Paid/Failed/Refunded),
  bookingCode: String (HBK-XXXXXX - auto-generated)
}
```

**Files Updated:**
- `backend/models/Room.js`
- `backend/models/Booking.js`

---

### ✅ Feature 6: Admin Dashboard with Chart.js
**New Admin Analytics:**
- 📊 **Monthly Revenue Chart** (line graph)
- 🍩 **Room Type Distribution** (doughnut chart)
- 📈 **Real-time statistics**: Total rooms, bookings, revenue
- 📋 **Recent bookings table** with booking codes
- 🎯 **Most booked room type** indicator

**New API Endpoints:**
```
GET /api/admin/stats
GET /api/admin/bookings
PATCH /api/admin/bookings/:id/status
```

**Chart.js Integration:**
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

**Files Updated:**
- `backend/routes/admin.js` (NEW)
- `frontend/admin/admin-dashboard.html` - Charts integration

---

### ✅ Feature 7: Dark Mode / Light Mode
- **Toggle switch** in navbar (☀️ / 🌙)
- **CSS variables** for theme colors
- **localStorage persistence** - remembers user preference
- **Smooth transitions** between themes (0.3s)
- **Chart.js theme sync** - charts update colors in dark mode

**Implementation:**
```javascript
// Toggle dark mode
function toggleDarkMode() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
```

**Files Updated:**
- `frontend/styles.css` - CSS variables for light/dark themes
- `frontend/script.js` - Dark mode utilities
- All HTML pages - Theme toggle button added

---

## 🗂️ PROJECT STRUCTURE

```
hotel-booking-system/
├── backend/
│   ├── middleware/
│   │   ├── auth.js          ✨ NEW - JWT verification
│   │   └── admin.js         ✨ NEW - Admin guard
│   ├── models/
│   │   ├── User.js
│   │   ├── Room.js          ✅ UPDATED - rating, view
│   │   └── Booking.js       ✅ UPDATED - paymentStatus, bookingCode
│   ├── routes/
│   │   ├── auth.js
│   │   ├── rooms.js         ✅ UPDATED - search/filter, availability
│   │   ├── bookings.js
│   │   └── admin.js         ✨ NEW - Admin stats & analytics
│   ├── server.js            ✅ UPDATED - Admin routes
│   ├── seed-enhanced.js     ✨ NEW - 40 rooms dataset
│   └── package.json
│
├── frontend/
│   ├── admin/
│   │   ├── admin-dashboard.html  ✅ UPDATED - Chart.js charts
│   │   ├── add-room.html
│   │   └── manage-bookings.html
│   ├── pages/
│   │   ├── login.html       ✅ UPDATED - Enhanced UI
│   │   ├── register.html    ✅ UPDATED - Enhanced UI
│   │   ├── rooms.html       ✅ UPDATED - Dark mode toggle
│   │   └── my-bookings.html
│   ├── index.html           ✅ UPDATED - Dark mode toggle
│   ├── styles.css           ✅ UPDATED - Dark mode, modals, calendar
│   └── script.js            ✅ UPDATED - Calendar, carousel, auth interceptor
│
└── README-FEATURES.md       ✨ NEW - This file
```

---

## 🚀 QUICK START

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
Create `backend/.env`:
```env
MONGODB_URI=mongodb+srv://dhanush:dhanush2005@cluster0.152en3i.mongodb.net/hotel-booking
JWT_SECRET=hotelBooking2024SecretKey
PORT=5000
```

### 3. Seed Database (40 Rooms)
```bash
node seed-enhanced.js
```

### 4. Start Backend
```bash
node server.js
# Server runs on http://localhost:5000
```

### 5. Start Frontend
```bash
cd ../frontend
python -m http.server 5500
# Frontend runs on http://localhost:5500
```

---

## 🔐 AUTHENTICATION & AUTHORIZATION

### Login Credentials
```
Admin:
Email: admin@hotel.com
Password: admin123

Customer:
Email: john@example.com
Password: customer123
```

### Protected Routes
**Customer Routes** (Requires login):
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - View my bookings
- `DELETE /api/bookings/:id` - Cancel booking

**Admin Routes** (Requires admin role):
- `POST /api/rooms` - Add room
- `PUT /api/rooms/:id` - Edit room
- `DELETE /api/rooms/:id` - Delete room
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/bookings` - All bookings
- `PATCH /api/admin/bookings/:id/status` - Update booking status

---

## 📡 API ENDPOINTS

### Public Endpoints
```
GET    /api/rooms                       # Get all rooms (with filters)
GET    /api/rooms/:id                   # Get single room
POST   /api/rooms/check-availability    # Check room availability
POST   /api/auth/login                  # Login
POST   /api/auth/register               # Register
```

### Authenticated Endpoints
```
GET    /api/auth/me                     # Get current user
GET    /api/bookings                    # Get user bookings
POST   /api/bookings                    # Create booking
DELETE /api/bookings/:id               # Cancel booking
```

### Admin Endpoints
```
GET    /api/admin/stats                 # Dashboard statistics
GET    /api/admin/bookings              # All bookings
PATCH  /api/admin/bookings/:id/status   # Update booking status
POST   /api/rooms                        # Add room
PUT    /api/rooms/:id                   # Edit room
DELETE /api/rooms/:id                   # Delete room
```

---

## 🎨 UI FEATURES

### Room Details Modal
- ✅ Image carousel with navigation
- ✅ Availability calendar
- ✅ Room details grid (price, capacity, type, view)
- ✅ Amenities with icons
- ✅ Book now button

### Search & Filters
- ✅ Real-time search bar
- ✅ Type dropdown (All/Single/Double/Suite/Deluxe/Presidential)
- ✅ Price range slider ($0-$800)
- ✅ Capacity filter
- ✅ Clear filters button

### Dark Mode
- ✅ Toggle in navbar (all pages)
- ✅ localStorage persistence
- ✅ Smooth theme transitions
- ✅ Charts update with theme

### Notifications
- ✅ Toast messages (success/error/warning/info)
- ✅ Auto-dismiss after 5 seconds
- ✅ Close button
- ✅ Animated entrance

---

## 📊 ADMIN DASHBOARD

### Statistics Cards
1. **Total Rooms** - Count of all rooms
2. **Total Bookings** - Lifetime bookings
3. **Active Bookings** - Current reservations
4. **Total Revenue** - All-time earnings
5. **Most Booked** - Popular room type

### Charts
1. **Monthly Revenue Chart** (Line Graph)
   - Last 6 months revenue
   - Hover tooltips
   - Responsive design

2. **Room Type Distribution** (Doughnut Chart)
   - Visual breakdown of room types
   - Color-coded segments
   - Legend with counts

### Recent Bookings Table
- Booking code (HBK-XXXXXX)
- Guest name & email
- Room number & type
- Check-in / Check-out dates
- Total amount
- Status badge (confirmed/pending/cancelled)
- Payment status (Pending/Paid)

---

## 🎯 TESTING THE FEATURES

### Test Authentication
1. Go to http://localhost:5500/pages/login.html
2. Login as admin@hotel.com / admin123
3. Check token in localStorage (F12 > Application > Local Storage)
4. Try accessing admin dashboard

### Test Dark Mode
1. Click sun/moon icon in navbar
2. Theme should toggle instantly
3. Refresh page - theme persists
4. Check charts adapt to theme

### Test Room Search
1. Go to http://localhost:5500/pages/rooms.html
2. Type "Presidential" in search
3. Use price slider (min: $400)
4. Select "Suite" from dropdown
5. Results update in real-time

### Test Availability Calendar
1. Click "View Details" on any room
2. Calendar shows current month
3. Click date range (check-in → check-out)
4. Unavailable dates are red
5. Booking form auto-fills dates

### Test Admin Charts
1. Login as admin
2. Go to admin dashboard
3. View revenue chart (last 6 months)
4. View room type pie chart
5. Check recent bookings table

---

## 🐛 TROUBLESHOOTING

### Port Already in Use
```bash
# Windows
Stop-Process -Name "node" -Force

# Linux/Mac
killall node
```

### MongoDB Connection Error
- Check MONGODB_URI in .env
- Ensure MongoDB Atlas IP whitelist includes your IP
- Test connection: `mongosh "mongodb+srv://..."`

### Charts Not Showing
- Check browser console for errors
- Ensure Chart.js CDN is loaded
- Verify `fetchWithAuth()` is being used

### Dark Mode Not Persisting
- Check localStorage is enabled
- Clear browser cache
- Verify `initDarkMode()` runs on page load

---

## 📦 DEPENDENCIES

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5"
}
```

### Frontend
```html
<!-- Chart.js (CDN) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

---

## 🎓 KEY LEARNINGS

1. **JWT Authentication**: Token-based auth with middleware
2. **Role-Based Access Control**: Admin vs Customer routes
3. **Chart.js Integration**: Dynamic data visualization
4. **CSS Variables**: Theme switching with CSS custom properties
5. **Calendar Logic**: Date range selection and validation
6. **API Query Parameters**: Advanced filtering and search
7. **Modal System**: Reusable modal components
8. **Toast Notifications**: User feedback system
9. **Image Carousel**: Slideshow with navigation
10. **MongoDB Aggregation**: Stats and analytics queries

---

## 🚀 DEPLOYMENT READY

All features are production-ready:
- ✅ Environment variables for config
- ✅ Error handling throughout
- ✅ Security with JWT and bcrypt
- ✅ Responsive design (mobile-friendly)
- ✅ Loading states and spinners
- ✅ Input validation (frontend + backend)
- ✅ CORS configured
- ✅ MongoDB indexes for performance

---

## 📄 LICENSE

MIT License - Feel free to use for learning or commercial projects!

---

**Built with ❤️ using HTML, CSS, JavaScript, Node.js, Express, MongoDB, and Chart.js**

---

## 🎉 ENJOY YOUR ENHANCED HOTEL BOOKING SYSTEM!

Navigate to:
- **Frontend**: http://localhost:5500
- **Backend API**: http://localhost:5000
- **Admin Dashboard**: http://localhost:5500/admin/admin-dashboard.html
