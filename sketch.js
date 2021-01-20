const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,ground,goptions,boptions,box2,box3;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;

 
 
  
  box1=new Box(100,100,100,50);
  box2=new Box(150,10,50,50);
  box3=new Box(150,5,100,50);
  
  ground=new Ground(400,380,800,20)
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  
 fill("blue");
  
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}