@echo off
title Auto Push to GitHub - Salman Bazher Project
color 0b
echo ====================================================
echo    AUTO PUSH TO GITHUB - SALMAN BAZHER PROJECT
echo ====================================================
echo.

echo [1/3] Menambahkan perubahan file (git add .)...
git add .

echo [2/3] Membuat commit...
set /p commit_msg="Masukkan pesan commit (tekan Enter untuk default 'Update project'): "
if "%commit_msg%"=="" set commit_msg=Update project: %date% %time%
git commit -m "%commit_msg%"

echo.
echo [3/3] Mengunggah ke GitHub (git push origin main)...
git push origin main

echo.
if %errorlevel% equ 0 (
    color 0a
    echo ====================================================
    echo   BERHASIL! Perubahan telah ter-push ke GitHub.
    echo ====================================================
) else (
    color 0c
    echo ====================================================
    echo   GAGAL! Silakan periksa koneksi atau error di atas.
    echo ====================================================
)

echo.
pause
