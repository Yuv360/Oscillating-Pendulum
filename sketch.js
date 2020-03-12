const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var log;
var ball;
var engine,world;
var chain;

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  var logOptions = {
    isStatic : true
  }
  log = Bodies.rectangle(200,100,200,20,logOptions);
  World.add(world,log);
  ball = Bodies.circle(220,200,40);
  World.add(world,ball);
  var options = {
    bodyA:log,
    bodyB:ball,
    stiffness:0.004,
    length:100
  }
  chain = Constraint.create(options);
  World.add(world,chain);
}

function draw() {
  background(0);  




Engine.update(engine);

fill("brown")
rectMode(CENTER);
rect(log.position.x,log.position.y,200,20);

fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);

strokeWeight(10);
stroke("white");
line(log.position.x,log.position.y,ball.position.x,ball.position.y);

if(keyCode===32){
ball.position.x = mouseX;
ball.position.y = mouseY;
}
else if(keyCode===10){
  ball.position.x = 220;
  ball.position.y = 200;
}
}