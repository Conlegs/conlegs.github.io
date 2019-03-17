let zombie = document.getElementById('zombie');
let zombieTwo = document.getElementById('zombieTwo');

function moveZombie(zombies){
    let w = document.documentElement.clientWidth- 200; // 1910
    let h = document.documentElement.clientHeight - 200; // 1104
    zombies.style.position = "absolute";
    let x = Math.floor((Math.random() * w));
    let y = Math.floor((Math.random() * h));
    zombies.style.left = x + 'px';
    zombies.style.top = y + 'px';
}

function showExplosion(zombies){
    zombies.src = "../images/explosion.gif";
}

function changeBackToZombie(zombies){
    zombies.src = "../images/zombie.png";
}

let snd = new Audio("sounds/death.wav");

setInterval(function(){
    setInterval(moveZombie(zombie), 1000);
    setInterval(moveZombie(zombieTwo), 1000);
}, 2000);

function clickZombie(){
    snd.play();
    showExplosion(zombie);
    displayScore();
    setTimeout(function(){
        changeBackToZombie(zombie)
        moveZombie(zombie)
    }, 700)
}

zombie.onclick = clickZombie;

function clickZombieTwo(){
    snd.play();
    showExplosion(zombieTwo);
    displayScore();
    setTimeout(function(){
        changeBackToZombie(zombieTwo)
        moveZombie(zombieTwo)
    }, 700)
}
zombieTwo.onclick = clickZombieTwo;

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
