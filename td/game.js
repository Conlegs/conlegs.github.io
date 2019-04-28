'use strict'

// wait for the window to load and then call back setup()
window.addEventListener('load', init, false);

let towerGame;  // thte global game object
const FRAME_RATE = 30;

function init(){
    towerGame = new Game();
    window.setTimeout(animate, 100); // wait 100ms for resources to load then star draw loop
}

function animate(){ // animattion loop
    towerGame.run();
    window.requestAnimationFrame(animate);  // window.setTimeout(animate, 1000/FRAME_RATE);
}

// Game is the top level object and it contains the levels
class Game {
    // Game constructor is called above (line 10)
    constructor(){  // from setup()
        this.towers = [];
        this.enemies = [];
        this.bullets = [];

        //  create canvas and context
        this.cnv = document.createElement("canvas");
        if(!this.cnv || !this.cnv.getContext)
            throw "No valid canvas found!";
        this.cnv.width = 900;
        this.cnv.height = 750;
        document.getElementById("canDiv").appendChild(this.cnv);
        this.context = this.cnv.getContext("2d");
        if(!this.context)
            throw "No valid context found!";
        
    }
//  called from the animate function above (line 15)
    run(){

    }

}