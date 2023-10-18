# Yachu's Portfolio Website

## Project Description
My personal website, showcasing my work experiences and some things I've built. This site is made with Javascript, TailwindCSS and love.

## Tech Sets
- HTML 5
- CSS 3
- Javascript
- TailwindCSS
- ESLint
- Vite
- EJS layout
- [Swiper](https://swiperjs.com/)

## Project Setup & Development

### Node.js version
> Node.js version must be >= v16

### Install
```
npm install
```

### Development
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - vite 專案執行開發模式（自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能）
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署至 gh-pages

## Project Layout
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - css # CSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

## Credit
使用六角學院提供的 [網頁切版直播班 Vite 範例 - Tailwind CSS 版本](https://github.com/hexschool/web-layout-training-vite/tree/feature/tailwind)