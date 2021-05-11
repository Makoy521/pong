class Ball{
    
    constructor(coords, points){
        soundFormats("wav");
        hitSoundFile = loadSound("src/assets/sounds/kick.wav");
        this.x = coords.x;
        this.y = coords.y;

        this.centerx = coords.x;
        this.centery = coords.y;
        
        this.points=points

        this.width = diameter.heigth;
        this.height = diameter.width;

        this.img = loadImage("src/assets/sprites/ball1.png");
        
        if(Math.floor(Math.random() *2)==1)this.speedx =5;
        else 
            this.speedx =-5;
        if(Math.floor(Math.random() *2)==1)this.speedy =5;
        else
            this.speedy =-5;
        
    }

    move(){
        if(this.x <10 || this.x >= board.width + 10){
            if(this.x<5){
                this.points.sumPoints2()
                this.x = this.centerx;
                this.y = this.centery;
            }else if(this.x>= board.width + 5){
                this.points.sumPoints1()
                this.x = this.centerx;
                this.y = this.centery;
            }
        }
        if(this.y <0 || this.y >= board.heigth - this.height){
            this.speedy *=-1;
        }

        this.x += this.speedx;
        this.y += this.speedy;
    }

    movePlayer(){
        this.speedx *= -1;
        hitSoundFile.play();

    }

    draw(){
        image(this.img,this.x,this.y,this.width,this.height);
        this.move();
    }
}

const BallFactory = {
    coords: (x,y) =>{ 
        return {
            x,
            y,
        };
    },
}