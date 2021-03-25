const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall1 ,wall2;
var cloudsGroup, cloudImage;
var ninja;
var obstacle;
var obstacless;
var score = 0;
var gameState = "play";

function preload(){
  cloudImage = loadImage("cloud.png");
}
function setup() {
  var canvas = createCanvas(500,600);

  cloudsGroup = createGroup();

  engine = Engine.create();
  world = engine.world;
  wall1 = new Wall(75,350,40,1400);
  wall2 = new Wall(425,350,40,1400);

  ninja = new Ninja(130,500);
  if(frameCount%150==0  ){
    
      obstacle = new Obstacle(135,0);
    
  }
  if(frameCount%120==0  ){

      obstacless = new Obstacle(365,-150);
  }

}

function draw() {
  background("skyblue");
  console.log(getFrameRate);

  if(frameCount%100==0&&gameState=="play"){
    score++;
  }

  noStroke();
  textSize(35);
  fill("white");
  text("Score  " + score, width-300, 50);


  spawnClouds();

  drawSprites(); 

  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall1.update(75);
  wall2.update(425);

    ninja.display();

  
  
  obstacle.display();
  obstacle.update(135);

  obstacless.display();
  obstacless.update(360);

  if(Matter.SAT.collides(ninja.body,obstacless.body).collided==true||Matter.SAT.collides(ninja.body,obstacle.body).collided==true){
    gameState = "end";
    Matter.Body.setStatic(wall1.body,true);
    Matter.Body.setStatic(wall2.body,true);
    World.remove(world,obstacless.body);
    World.remove(world,obstacle.body);
    cloudsGroup.setVelocityYEach(0);
    score = score;
  }
  
}
function spawnClouds() {
  if (frameCount % 20 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(40,420));
    cloud.addImage(cloudImage);
    cloud.scale = (random(0.5,0.8));
    cloud.velocityX = -6;
    cloud.velocityY = 1;
    
    cloud.lifetime = 200;

    cloudsGroup.add(cloud);
  }
}
function keyPressed(){
  if(keyCode === 39 && gameState=="play"){
    Matter.Body.setPosition(ninja.body,{x:370,y:500});
  }
  if(keyCode === 37 && gameState=="play"){
    Matter.Body.setPosition(ninja.body,{x:130,y:500});
  }
}

 