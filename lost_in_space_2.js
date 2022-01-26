"use strict";

window.onload = function() {
    const canvas = document.getElementById("game_area");
    const context = canvas.getContext("2d");

    class BateauHumain {
        constructor(BateauX1, BateauY1) {
            // bateau caracteristique
            this.BateauX1 = BateauX1;
            this.BateauY1 = BateauY1;
            this.RadianBateau = 30;
            this.BateauCouleur = "black";
            this.BateauVitesse = 20;
        }
        dessinBateauJoueur() {
            context.beginPath();
            context.arc(this.BateauX1, this.BateauY1, this.RadianBateau, 0, Math.PI * 2);
            context.fillStyle = this.BateauCouleur;
            context.fill();
        }
        mouveBateauGauche() {
            if (this.BateauX1 > 30) {
                this.BateauX1 = this.BateauX1 - this.BateauVitesse;
                this.BateauCouleur = "black";
                this.dessinBateauJoueur();
            } else {
                this.dessinBateauJoueur();
            }
        }
        mouveBateauDroite() {
            if (this.BateauX1 < 570) {
                this.BateauX1 = this.BateauX1 + this.BateauVitesse;
                this.BateauCouleur = "black";
                this.dessinBateauJoueur();
            } else {
                this.dessinBateauJoueur();
            }
        }
        mouveBateauHaut() {
            if (this.BateauY1 > 30) {
                this.BateauY1 = this.BateauY1 - this.BateauVitesse;
                this.BateauCouleur = "black";
                this.dessinBateauJoueur();
            } else {
                this.dessinBateauJoueur();
            }
        }
        mouveBateauBas() {
            if (this.BateauY1 < 570) {
                this.BateauY1 = this.BateauY1 + this.BateauVitesse;
                this.BateauCouleur = "black";
                this.dessinBateauJoueur();
            } else {
                this.dessinBateauJoueur();
            }
        }
        creerUnNouveauBalle() {
            balles.push(new BateauBalle(this.BateauX1, this.BateauY1));
            Animation();
        }
    }

    class BateauBalle {
        constructor(BalleX1, BalleY1) {
            // balle caracteristiques
            this.BalleX1 = BalleX1;
            this.BalleY1 = BalleY1 - 20;
            this.RadianBalle = 5;
            this.BalleCouleur = "red";
            this.BalleVitesse = 2;
        }
        dessinBalleJoueur() {
            context.beginPath();
            context.arc(this.BalleX1, this.BalleY1, this.RadianBalle, 0, Math.PI * 2);
            context.fillStyle = this.BalleCouleur;
            context.fill();
        }
        updateBalle() {
            if (this.BalleY1 >= 0) {
                this.BalleY1 = this.BalleY1 - 99 * this.BalleVitesse / 100;
                this.dessinBalleJoueur();
            }
        }
    }

    const lostInSpace = new BateauHumain(300, 570);
    const balles = [];

    function Animation() {

        window.setInterval(function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            lostInSpace.dessinBateauJoueur();
            balles.forEach(element => {
                element.updateBalle();
                console.log("a");
            })
        }, 5);
    }

    window.addEventListener("keydown", (event) => { // gestion du mouvement du bateau
        let key = event.keyCode;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (key == 37) { // click button gauche
            lostInSpace.mouveBateauGauche();
        }
        if (key == 39) { // click button gauche
            lostInSpace.mouveBateauDroite();
        }
        if (key == 38) { // click button haut
            lostInSpace.mouveBateauHaut();
        }
        if (key == 40) { // click button bas
            lostInSpace.mouveBateauBas();
        }
        if (key == 32) {
            lostInSpace.creerUnNouveauBalle();
            console.log(balles);
        }
    });

};