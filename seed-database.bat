@echo off
echo ========================================
echo Seeding Hotel Booking Database
echo ========================================
echo.

cd backend

echo This will:
echo - Clear all existing data
echo - Create 3 users (1 admin, 2 customers)
echo - Create 10 sample rooms
echo - Create 1 sample booking
echo.
echo Press Ctrl+C to cancel or any key to continue...
pause > nul
echo.

echo Running database seed script...
node seed.js

echo.
pause
