const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ballOptions = {
    restitution: 0.8
  }

  ball = Bodies.circle(200,200,20,ballOptions);
  World.add(world, ball);

  button1 = createImg("up.png");
  button1.size(50,50);
  button1.position(30,30);
  button1.mouseClicked(vForce)
  
  button2 = createImg("right.png");
  button2.size(50,50);
  button2.position(325,30);
  button2.mouseClicked(hForce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20);

  Engine.update(engine);
}

function vForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function hForce(){
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
