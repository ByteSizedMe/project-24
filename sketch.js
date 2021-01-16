
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var sand;
var stone;
var sand,sand2,sand3,sand4,sand5;
var rubber;
var iron;






function setup() {
	createCanvas(1200, 800);

	


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,height,1200,20);
	hammer = new Hammer(200,100,150,40);
	iron = new Iron(300,350,80,50);
	stone = new Stone(700,320,100,100);
	rubber = new Rubber(900,450,70);
	sand = new Sand(505,450,10);
	sand2 = new Sand(515,450,10);
	sand3 = new Sand(530,450,10);
	sand4 = new Sand(545,450,10);
	sand5 = new Sand(560,450,10);

	//Create the Bodies Here.

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  plane.display();
  hammer.display();
  iron.display();
  stone.display();
  rubber.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
 
}



