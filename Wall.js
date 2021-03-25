class Wall{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':false,
            'restitution':0.001,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.image = loadImage("walll.jpg");
        World.add(world, this.body);
      }
      update(xp){
        if(this.body.position.y>700){
          Matter.Body.setPosition(this.body,{x:xp,y:350});
        }
      }
      display(){
        //console.log(this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.x,this.body.position.y,  this.width, this.height);
      }
}