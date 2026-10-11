@echo off
setlocal
cd /d "%~dp0"

echo.
echo Starting New Harjinder Halftone Company website...
echo.

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo.
echo Website will open at:
echo http://localhost:5173/
echo.
echo Keep this window open while working on the site.
echo Press Ctrl+C to stop the server.
echo.

call npm run dev
pause
