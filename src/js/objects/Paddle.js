class Paddle{
    constructor(coords, controllSettings){
        this.x = coords.x;
        this.y = coords.y;

        this.width = paddle.width;
        this.height = paddle.heigth;

        this.img = loadImage("src/assets/sprites/paddle1.png");

        this.speed = 5;

        this.controllSettings=controllSettings;
    }

    moveUp(){
        if(this.y>0){
            this.y-=this.speed;
        }
    }

    moveDown(){
        if(this.y<board.heigth-paddle.heigth)
        this.y+=this.speed;
    }

    move(){
        this.controllSettings.forEach(controll => {
            if(keyIsDown(controll.key)){
                this[controll.name]();
            }
        });
    }

    draw(){
        image(this.img, this.x,this.y,this.width,this.height);
        this.move();
    }
}

const PaddleFactory = {
    coords:(x,y)=>{
        return{
            x,
            y,
        };
    },
    controllSettings:(moveUpkey, moveDownkey)=>{
        return[
            {
                name: "moveUp",
                key: moveUpkey,
            },
            {
                name: "moveDown",
                key: moveDownkey,
            },
        ];
    }


}