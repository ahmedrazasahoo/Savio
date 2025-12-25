#!/bin/bash

# Video Downloader - Development Startup Script
# This script starts both backend and frontend servers

echo "🚀 Starting Video Downloader Development Servers..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if backend dependencies are installed
if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd server
    npm install
    cd ..
    echo "✅ Backend dependencies installed!"
    echo ""
fi

# Check if frontend dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
    echo "✅ Frontend dependencies installed!"
    echo ""
fi

# Create .env files if they don't exist
if [ ! -f ".env" ]; then
    echo "📝 Creating frontend .env file..."
    cp .env.example .env
    echo "✅ Frontend .env created!"
    echo ""
fi

if [ ! -f "server/.env" ]; then
    echo "📝 Creating backend .env file..."
    cp server/.env.example server/.env
    echo "✅ Backend .env created!"
    echo ""
fi

echo "🎯 Starting servers..."
echo ""
echo "Backend will run on: http://localhost:3001"
echo "Frontend will run on: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup INT TERM

# Start backend
cd server
npm start &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend
npm run dev &
FRONTEND_PID=$!

# Wait for both processes
wait
