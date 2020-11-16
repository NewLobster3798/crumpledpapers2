
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperimg;
var dustbinimg;

function preload(){
  paperimg = loadImage("paper.png");
  dustbinimg = loadImage("dustbin.png");
}
function setup() {
  createCanvas(800,400);  
	engine = Engine.create();
	world = engine.world;
  avail = 1;
  Engine.run(engine);
	paperball = Bodies.circle(100,385,20,{isStatic:false,restituition:0.3,friction:0.5,density:1.2});
  World.add(world,paperball);
  ground = Bodies.rectangle(width/2,395,width,10, {isStatic:true} );
  World.add(world,ground);
  binbase = Bodies.rectangle(650,385,100,10,{isStatic:true});
  World.add(world,binbase);
  binleft = Bodies.rectangle(595,365,10,50,{isStatic:true});
  World.add(world,binleft);
  binright = Bodies.rectangle(705,365,10,50,{isStatic:true});
  World.add(world,binright);
}


function draw() {
  rectMode(CENTER);
  background(100);
  imageMode(CENTER);
  image(dustbinimg,650,365,120,50);
  image(paperimg,paperball.position.x,paperball.position.y,50,50);
  rect(ground.position.x,ground.position.y,width,10);
 //force();
 Engine.update(engine);
}

function  keyPressed() {
  if (keyCode === UP_ARROW ){
    Matter.Body.applyForce(paperball,paperball.position,{x:16,y:-40});
  }
}


