@echo off
chcp 65001 >nul
rem 打开三联对比演示页（裸 AI / 原版 Hallmark / 中文版）
cd /d "%~dp0"
start "" http://localhost:4174/compare.html
node serve.mjs 4174
