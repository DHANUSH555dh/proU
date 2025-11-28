@echo off
echo ========================================
echo Starting Hotel Booking System Backend
echo ========================================
echo.

cd backend

if not exist "node_modules\" (
    echo Node modules not found. Installing dependencies...
    call npm install
    echo.
)

if not exist ".env" (
    echo.
    echo ========================================
    echo WARNING: .env file not found!
    echo ========================================
    echo Please create a .env file in the backend folder
    echo Copy .env.example and add your MongoDB URI
    echo.
    echo Press any key to create .env from template...
    pause > nul
    copy .env.example .env
    echo.
    echo .env file created! Please edit it with your MongoDB URI
    echo Then run this script again.
    echo.
    pause
    exit
)

echo Starting server...
echo Server will run at http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

npm start
