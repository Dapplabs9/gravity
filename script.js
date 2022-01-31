gravity_earth = 9.8;
gravity_moon = 1.62;
gravity_calculated = null;
speed = null;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d')
moon = "http://assets.stickpng.com/images/580b585b2edbce24c47b270b.png";
earth = "https://www.freeiconspng.com/thumbs/earth-png/planet-earth-png-8.png";
earth_tag = new Image;
moon_tag = new Image;
x = 200;
y = 350;
width = 100;
height = 100;
const distance = 1000;

function add() {
    earth_tag.src = earth;
    earth_tag.onload = addEarth;
}
function addEarth() {
    ctx.drawImage(earth_tag, x, y, width, height);
}
document.getElementById("slider").addEventListener("change", function () {
    document.getElementById("gravity").innerHTML = "Gravity of Earth is " + document.getElementById("slider").value;
    gravity_earth = document.getElementById("slider").value;

});

speed = Math.sqrt(2 * gravity_earth * distance);
gravity_calculated = 2 * gravity_earth;
speed = Math.sqrt(gravity_calculated * distance);

