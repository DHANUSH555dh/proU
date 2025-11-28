@echo off
echo ========================================
echo Hotel Booking System - Setup Script
echo ========================================
echo.

echo Installing backend dependencies...
cd backend
call npm install

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a .env file in the backend folder
echo 2. Add your MongoDB URI and JWT secret
echo 3. Run 'npm start' in the backend folder
echo 4. Open frontend/index.html with Live Server
echo.
echo Press any key to exit...
pause > nul
