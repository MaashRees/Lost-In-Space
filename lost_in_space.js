"use strict";

var canvas = document.getElementById("game_area");
var context = canvas.getContext("2d");



function draw(x, y, color, colorgun) {
    context.beginPath();
    context.fillStyle = colorgun;
    context.arc(x, y - 25, 15, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = 'black';
    context.arc(x, y - 25, 16, 0, 2 * Math.PI);
    context.stroke();
    context.fillStyle = color;
    context.fillRect(x - 25, y - 25, 50, 50);

}
let x = 300;
let y = 540;
draw(x, y, 'dodgerblue', 'red');
window.addEventListener('keydown', function(event) {
    draw(x, y, 'black', 'black');
    let e = event.keyCode;
    if (e == 39 && x + 40 <= canvas.width) { x = x + 15; } // key 'right'
    else if (e == 37 && x - 40 > 0) { x = x - 15; } // key 'left'
    else if (e == 38 && y - 50 > 0) { y = y - 15; } // key 'up'
    else if (e == 40 && y + 40 < canvas.height) { y = y + 15; } // key 'down'
    draw(x, y, 'dodgerblue', 'red');
});
/*
function draw(x, y, color) {
    context.filleStyle = color;
    context.fillRect(x - 20, y - 20, 80, 80);
}

let x = 260;
let y = 520;
draw(x, y, "blue");
window.addEventListener('keydown', function(event) {
    draw(x, y, 'black');
    let e = event.keyCode;
    if (e == 38) {
        y = y - 5;
    } else if (e == 40) {
        y = y + 5;
    } else if (e == 37) {
        x = x - 5;
    } else if (e == 39) {
        x = x + 5;
    }
    draw(x, y, 'blue');
});*/
/*
function vaisseau_left() {
    let x = 0;
    let y = 0
    let dx = 1;
    draw(x, y, 'white');
    x = x + dx;
    console.log(x);
    if (x == 0 || x == canvas.width - 10) {
        dx = -dx;
        y = y + 10;
    };
    draw(x, y, 'red');
}

window.setInterval(vaisseau_left, 12);
*/
/*
window.onload = function() {
    // TODO
};*/