document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'css/nav.css'
    document.head.appendChild(style);
    const nav = document.createElement('div');
    nav.className = 'topnav';
    nav.innerHTML = `
    <a href="https://smokinjoe.co/index.html#container">Home</a> 
    <a href="https://smokinjoe.co/mrwhite.html">lol</a>
    <a href="https://smokinjoe.co/preview.html">cams</a>
    <a href="https://smokinjoe.co/homies.html">homies</a>
    <a href="https://smokinjoe.co/mc/index.html">mc</a>
`
    document.body.appendChild(nav);
});