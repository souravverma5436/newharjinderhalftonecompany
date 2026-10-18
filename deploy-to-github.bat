@echo off
setlocal
cd /d "%~dp0"

echo.
echo Preparing New Harjinder Halftone Company website for GitHub...
echo.

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed or is not available in PATH.
  echo Install Git from https://git-scm.com/downloads and run this file again.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm is not installed or is not available in PATH.
  echo Install Node.js from https://nodejs.org/ and run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)

echo Running production build...
call npm run build
if errorlevel 1 (
  echo Build failed. Fix the errors above before deploying.
  pause
  exit /b 1
)

if not exist .git (
  echo Initializing Git repository...
  git init
  git branch -M main
)

git status --short
echo.
git add .
git commit -m "Deploy website"
if errorlevel 1 (
  echo.
  echo Nothing new to commit, or commit failed. Continuing to remote setup...
)

git remote get-url origin >nul 2>nul
if errorlevel 1 (
  echo.
  set /p REPO_URL=Paste your GitHub repository URL then press Enter: 
  if "%REPO_URL%"=="" (
    echo No repository URL provided.
    pause
    exit /b 1
  )
  git remote add origin "%REPO_URL%"
) else (
  echo.
  echo Existing GitHub remote:
  git remote get-url origin
)

echo.
echo Pushing to GitHub main branch...
git push -u origin main
if errorlevel 1 (
  echo.
  echo GitHub push failed. Check your repository URL, login, and permissions.
  pause
  exit /b 1
)

echo.
echo Done. Your website code is now pushed to GitHub.
echo You can import this GitHub repository into Vercel.
pause
