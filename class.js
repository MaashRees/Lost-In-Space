"use strict";

var canvas = document.getElementById("game_area");
var context = canvas.getContext("2d");

class Me {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.colorme = '#0000FF';
        this.colorgun = '#FF0000';
        // this.myvitesse = 15;
    }

    draw_me(context) {
        context.beginPath();
        context.fillStyle = this.colorgun;
        context.arc(this.x, this.y - 25, 15, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = 'black'; //pour éviter que le colorgun reste après les déplacements
        context.arc(this.x, this.y - 25, 16, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = this.colorme;
        context.fillRect(this.x - 25, this.y - 25, 50, 50);
    }

    move_me(event, context, me) {
        this.colorme = 'black';
        this.colorgun = 'black';
        me.draw_me(context);
        let e = event.keyCode;
        if (e == 39 && this.x + 40 <= canvas.width) { this.x = this.x + 15; } // key 'right'
        else if (e == 37 && this.x - 40 > 0) { this.x = this.x - 15; } // key 'left'
        else if (e == 38 && this.y - 50 > 0) { this.y = this.y - 15; } // key 'up'
        else if (e == 40 && this.y + 40 < canvas.height) { this.y = this.y + 15; } // key 'down'
        this.colorme = '#0000FF';
        this.colorgun = '#FF0000';
        me.draw_me(context);
    }
}

/*
let me = new Me(300, 540);
console.log(me);
window.addEventListener('keydown', function(event) { me.move_me(event, context, me) });
*/

class Alien {
    constructor(x, y) {
        this.x_alien = x;
        this.y_alien = y;
        this.perimetre = 50;
        this.dx = 5;
        this.color_alien = '#33CC00';
    }

    draw_alien(context) {
        context.fillStyle = this.color_alien;
        context.fillRect(this.x_alien, this.y_alien, 40, 40);
    }

    move_alien(context, alien) {
        this.color_alien = 'black';
        alien.draw_alien(context);
        this.x_alien = this.x_alien + this.dx;
        this.y_alien = this.y_alien;
        if (this.x_alien <= 0 || this.x_alien >= canvas.width - 40) {
            this.dx = -this.dx - (this.dx - (this.dx % 10)) / 10;
            this.y_alien = this.y_alien + 50;
        }
        this.color_alien = '#33CC00';
        alien.draw_alien(context);
    };

}

let alien = new Alien(0, 0);
console.log(alien);
window.setInterval(function() { alien.move_alien(context, alien) }, 50);
/*
let aliens1 = [];
let aliens2 = [];
for(let i = 0; i < 150; i++) { aliens1.push(new Alien(0, 0)); }
window.setInterval(function(){
    aliens1.forEach(function(alien){alien.move_alien})
}, 30);
*/