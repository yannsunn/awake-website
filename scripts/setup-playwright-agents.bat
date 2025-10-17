@echo off
REM 🎭 Playwright Agent & MCP Server 自動セットアップスクリプト (Windows)
REM
REM 使用方法:
REM   setup-playwright-agents.bat [target-project-path]
REM
REM 例:
REM   setup-playwright-agents.bat ..\my-other-project
REM   setup-playwright-agents.bat C:\Users\march\another-project

setlocal enabledelayedexpansion

echo.
echo 🎭 Playwright Agent ^& MCP Server セットアップ
echo.

REM ターゲットプロジェクトのパスを取得
set "TARGET_PATH=%~1"
if "%TARGET_PATH%"=="" set "TARGET_PATH=%CD%"

echo ℹ ターゲットプロジェクト: %TARGET_PATH%
echo.

REM Node.jsスクリプトを実行
node "%~dp0setup-playwright-agents.js" "%TARGET_PATH%"

endlocal
