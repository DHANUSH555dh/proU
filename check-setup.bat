@echo off
echo ========================================
echo Hotel Booking System - Configuration Check
echo ========================================
echo.

cd backend

echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js from https://nodejs.org/
    goto :end
) else (
    node --version
    echo ✅ Node.js is installed
)
echo.

echo [2/4] Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not found
    goto :end
) else (
    npm --version
    echo ✅ npm is installed
)
echo.

echo [3/4] Checking node_modules...
if exist "node_modules\" (
    echo ✅ Dependencies are installed
) else (
    echo ❌ Dependencies not installed
    echo Run: npm install
)
echo.

echo [4/4] Checking .env file...
if exist ".env" (
    echo ✅ .env file exists
    echo.
    echo Checking .env contents:
    findstr /C:"MONGODB_URI" .env >nul
    if %errorlevel% neq 0 (
        echo ❌ MONGODB_URI not found in .env
    ) else (
        echo ✅ MONGODB_URI found
    )
    
    findstr /C:"JWT_SECRET" .env >nul
    if %errorlevel% neq 0 (
        echo ❌ JWT_SECRET not found in .env
    ) else (
        echo ✅ JWT_SECRET found
    )
) else (
    echo ❌ .env file not found
    echo Create .env file from .env.example
)
echo.

:end
echo ========================================
echo Configuration check complete!
echo ========================================
echo.
pause
