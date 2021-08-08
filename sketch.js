const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

let ground;
let rope;
let fruit;

let fruitCon;

function setup()
{

  frameRate(60);
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(width/2, 685);
  rope = new Rope(6, {x:245 , y:30});

  fruitOptions = {
    density: 0.001,
  }

  fruit = Matter.Bodies.circle(300, 300, 15, fruitOptions);
  Matter.Composite.add(rope.body, fruit);

  fruitCon = new Link(rope, fruit);


}

function draw()
{
  background(51);
  Engine.update(engine);

  ground.display();

  ellipse(fruit.position.x, fruit.position.y, 15);

  rope.show();
  rope.drawConstraint();

}




