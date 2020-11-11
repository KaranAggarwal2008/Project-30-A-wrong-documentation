class Box {
    constructor(x, y, width, height){
     // super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      var options = {
        'restitution':0.8,
        'friction':1.0
        //'density':1.0
    }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      this.visiblity=255;
    }
    display(){
      var angle = this.body.angle;
      if(this.body.speed<3){
      translate(this.body.position.x, this.body.position.y);
     rotate(angle);
      rectMode(CENTER);
      rectangle(0,0,this.width,this.height);
      }else{
        push()
        World.remove(world,this.body);
          translate(this.body.position.x, this.body.position.y);
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        rectMode(CENTER);
        rectangle(0,0,this.width,this.height);
        pop()
      }
    }
  
  };
