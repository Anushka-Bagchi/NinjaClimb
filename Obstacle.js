class Obstacle{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.001,
            'friction':10.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 80,20, options);
        this.width = 80;
        this.height = 20;
        this.x=x;
        this.image = loadImage("obstacle.png")
        World.add(world, this.body);

      
      }
      update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:this.x,y:0});
        }
    }
      display(){
        imageMode(CENTER);
        image(this.image,this.x,this.body.position.y, this.width, this.height);
      }
}