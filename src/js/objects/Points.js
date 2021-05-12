class Points {
    constructor(coords, sound) {
        
      this.x = coords.x;
      this.y = coords.y;

      this.sound=sound
      
      this.p1 = 0;
      this.p2 = 0;
    }
  
    draw() {
      fill("#ffffff");
      textSize(35);
      textAlign(CENTER);
      text(`Player 1: W , S     ${this.p1} - ${this.p2}     Player2: Flechas`, this.x, this.y);
    }
  
    sumPoints1(){
      this.p1+=1
      this.sound.play()
    }

    sumPoints2(){
      this.p2+=1
      this.sound.play()
    }
  
  }
  
  const PointsFactory = {
    coords: (x, y) => ({
      x,
      y,
    }),
  };