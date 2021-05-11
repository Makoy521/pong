let bg;
let ball;
let players = [];

function preload() {
    soundFormats("wav");
    bgSoundFile = loadSound("src/assets/sounds/musicloop.wav");
    hitSoundFile = loadSound("src/assets/sounds/kick.wav");
    pointSoundFile = loadSound("src/assets/sounds/point.wav");
  }

function setup(){
    bg = loadImage("src/assets/sprites/board1.png");
    pts = new Points(
        PointsFactory.coords(board.width / 2, 70),
        pointSoundFile
    );
    ball= new Ball(BallFactory.coords(board.width/2-diameter.width/2,board.heigth/2-diameter.heigth/2), pts);
    players.push(new Paddle(PaddleFactory.coords(0, board.heigth /2 - paddle.heigth/2) ,
    PaddleFactory.controllSettings(87,83)));
    players.push(new Paddle(PaddleFactory.coords(board.width-paddle.width, board.heigth /2 - paddle.heigth/2),
    PaddleFactory.controllSettings(38,40)));

    bgSoundFile.loop();
    createCanvas(board.width, board.heigth);
}

function draw(){
    background(bg);
    ball.draw();
    pts.draw();
    players.forEach ((player) => {
        player.draw();
        if(
            ball.x < player.x + player.width &&
            ball.x + ball.width > player.x &&
            ball.y < player.y + player.height &&
            ball.height + ball.y > player.y
        ){
            ball.movePlayer(); 
        }
    });
}