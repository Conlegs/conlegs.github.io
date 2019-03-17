let zombie = document.getElementById('zombie');
let zombieTwo = document.getElementById('zombieTwo');

function moveZombie(zombies){
    let w = document.documentElement.clientWidth- 200;
    let h = document.documentElement.clientHeight - 200;
    zombies.style.position = "absolute";
    let x = Math.floor((Math.random() * w));
    let y = Math.floor((Math.random() * h));
    zombies.style.left = x + 'px';
    zombies.style.top = y + 'px';
}

function showExplosion(zombies){
    zombies.src = "images/explosion.gif";
}

function changeBackToZombie(zombies){
    zombies.src = "images/zombie.png";
}

let snd = new Audio("sounds/death.wav");

setInterval(function(){
    moveZombie(zombie);
}, 2000);

setTimeout(function(){
    setInterval(function(){
        moveZombie(zombieTwo);
    }, 2000);
}, 1000);

function clickZombie(){
    snd.play();
    showExplosion(zombie);
    displayScore();
    setTimeout(function(){
        changeBackToZombie(zombie)
        moveZombie(zombie)
    }, 500);
}

function clickZombieTwo(){
    snd.play();
    showExplosion(zombieTwo);
    displayScore();
    setTimeout(function(){
        changeBackToZombie(zombieTwo)
        moveZombie(zombieTwo)
    }, 500);
}

let isClicked = false;
function clickEvent(){
    if(!isClicked){
        isClicked = true;
        clickZombie();
        setTimeout(function(){
            isClicked = false;
        }, 500);
    }
}

let isClickedTwo = false;
function clickEventTwo(){
    if(!isClickedTwo){
        isClickedTwo = true;
        clickZombieTwo();
        setTimeout(function(){
            isClickedTwo = false;
        }, 500);
    }
}

zombie.onclick = clickEvent;
zombieTwo.onclick = clickEventTwo;

let count = 0;
function displayScore(){
    count++;
    document.getElementById('score').innerHTML = "Your Score : " + count;
}

function resetScore(){
    count = 0;
    document.getElementById('score').innerHTML = "Your Score : " + count;
}

function resetZombie(zombies){
    if (zombies == zombie){
        zombie.style.position = "fixed";
        zombies.style.left = "20%";
        zombies.style.top = "10%";
    } else if (zombies == zombieTwo) {
        zombieTwo.style.position = "fixed";
        zombieTwo.style.top = "10%";
        zombieTwo.style.left = "70%";
    }
}

let reset = document.getElementById('endGame')
function endGame(){
    resetScore();
    resetZombie(zombie);
    resetZombie(zombieTwo);
}
reset.onclick = endGame;
