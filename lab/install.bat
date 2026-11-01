@echo off
chcp 65001 >nul
rem hallmark-cn 一键安装：校验全部主题与参考文件，然后装进 Claude Code / Codex / Cursor / OpenCode
cd /d "%~dp0.."
where node >nul 2>nul || (echo 没找到 Node.js，请先安装 Node 18 或更高版本：https://nodejs.org/zh-cn & pause & exit /b 1)
node skills\hallmark\scripts\install.mjs %*
echo.
echo 装好后在 Claude Code 里输入：/hallmark 做一个上海独立咖啡店的落地页
pause
