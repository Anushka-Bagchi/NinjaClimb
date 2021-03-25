class Ninja{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 20,40, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("ninja.png");
        World.add(world, this.body);
      }
      update(xp){
        Matter.Body.setPosition(this.body,{x:xp,y:400});

      }
      display(){
        //console.log(this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width+this.width, this.height+this.height);
      }
}