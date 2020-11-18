const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperObject;
var ground;
var sprite1,sprite2,sprite3;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100,397,20);
	ground = new Ground(600,400,1200,20);
	sprite1 = new Dustbin(800,380,200,20);
	sprite2 = new Dustbin(910,340,20,100);
	sprite3 = new Dustbin(690,340,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

    paperObject.display();
    ground.display();
    sprite3.display();
    sprite2.display();
    sprite1.display();

    


  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-70});
  }
}



