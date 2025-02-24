

// FRONTPAGES
const backgrounds = [
    "url('https://c4.wallpaperflare.com/wallpaper/73/554/337/christian-bale-dark-knight-rises-wallpaper-preview.jpg')",
    "url('https://cdn.wallpapersafari.com/84/98/1hBAKL.jpg')",
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6a6ry44HCyh2IniGtvztiaNoYXpQ6_N-giA&s')"
];

let currentIndex = 0;

function changeBackground() {
    document.getElementById("main-container").style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex +1) % backgrounds.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();





