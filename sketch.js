
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box ;
var paper;
var ball ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box = new box(300,200,20,20)
paper = new paper(300,200,10,10)
ball = new Ball(200,200,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
box.display();
paper.display();
ball.display();


  drawSprites();
 
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


