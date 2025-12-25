@echo off
REM Video Downloader - Development Startup Script
REM This script starts both backend and frontend servers

echo.
echo ====================================
echo Video Downloader - Development Mode
echo ====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js 18+ from https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js version:
node -v
echo.

REM Check and install backend dependencies
if not exist "server\node_modules" (
    echo [INSTALL] Installing backend dependencies...
    cd server
    call npm install
    cd ..
    echo [OK] Backend dependencies installed!
    echo.
)

REM Check and install frontend dependencies
if not exist "node_modules" (
    echo [INSTALL] Installing frontend dependencies...
    call npm install
    echo [OK] Frontend dependencies installed!
    echo.
)

REM Create .env files if they don't exist
if not exist ".env" (
    echo [CREATE] Creating frontend .env file...
    copy .env.example .env
    echo [OK] Frontend .env created!
    echo.
)

if not exist "server\.env" (
    echo [CREATE] Creating backend .env file...
    copy server\.env.example server\.env
    echo [OK] Backend .env created!
    echo.
)

echo.
echo ====================================
echo Starting Development Servers
echo ====================================
echo.
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173
echo.
echo Press Ctrl+C to stop servers
echo.

REM Start backend in a new window
start "Backend Server" cmd /k "cd server && npm start"

REM Wait a bit for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in a new window
start "Frontend Server" cmd /k "npm run dev"

echo.
echo [OK] Servers started in separate windows
echo.
echo To stop: Close both server windows or press Ctrl+C in each
echo.
pause
