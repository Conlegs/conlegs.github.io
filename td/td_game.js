// window.onload = init;

//globals
let canvas, ctx, ball;

function examples(){
    // create a div to put the hading in
    let mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    // create a couple of elements in an otherwise empty HTML page
    let heading = document.createElement("h1");
    let heading_text = document.createTextNode("Big head!");
    mainDiv.appendChild(heading);
    heading.appendChild(heading_text);
    mainDiv.setAttribute("style", "width:800px; height:400px; border:2px solid blue;")
    mainDiv.style.margin = "auto";
    mainDiv.style.backgroundColor = "lightgreen";
}

function init(){
    // get the canvas
    canvas = document.getElementById("cnv");
    // set the dimensions of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.border = "solid black 2px";
    canvas.style.backgroundColor = "rgba(0, 44, 55, .5)";
    // add context
    ctx = canvas.getContext("2d"); // This is the context
    ball = new Ball();
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ball.update();
}

function Ball(){
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.dx = Math.random() * 6 - 3;
    this.dy = Math.random() * 6 - 3;
    this.rad = Math.random() * 10 + 15;

    this.update = function(){
        this.x += this.dx;
        this.y += this.dy;
        this.render();
    }

    this.render = function(){
        // ctx.strokeStyle = "rgba(2, 2, 2, 1)";
        // ctx.fillStyle = "rgba(155, 100, 20, .8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, Math.PI * 2, 0, false);
        ctx.stroke();
        ctx.fill();
    }
}