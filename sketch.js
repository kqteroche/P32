const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gg;
var stand;

var slingShot;
var polygon;

var backgroundII = "Image1.png";

var bbackgroundd;


function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create(); 
	world = engine.world;
  createSprite(400, 200, 50, 50);

  gg = new Ground(500,390,1000,10);
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(790,200,200,10);

  polygon = Bodies.circle(20,200,10);
  World.add(world,polygon); 
  slingShot = new SlingShot(this.polygon,{x:200,y:100}); 
  
  //first tower
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //level four
  block16 = new Block(390,155,30,40);

  //second tower
  //level one
  block17 = new Block(730,175,30,40);
  block18 = new Block(760,175,30,40);
  block19 = new Block(790,175,30,40);
  block20 = new Block(820,175,30,40);
  block21 = new Block(850,175,30,40);

  //level two
  block22 = new Block(760,135,30,40);
  block23 = new Block(790,135,30,40);
  block24 = new Block(820,135,30,40);

  //level three
  block25 = new Block(790,95,30,40);

  Engine.run(engine);
}

function draw() {
  if(bbackgroundd){
  background(bbackgroundd);
  }
    rectMode(CENTER);
  Engine.update(engine);
  
  gg.display();

  stand1.display();
  stand2.display();

  ellipseMode(RADIUS) 
  ellipse(polygon.position.x,polygon.position.y,20,20);

  slingShot.display();

  //first tower
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();
  
  block16.display();

//second tower
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}) ;
}  

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode === 32){    
      slingShot.attach(this.polygon);
  }  
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      backgroundII = "Image1.jpg";
  }
  else{
      backgroundII = "Image2.jpg";
  }

  bbackgroundd = loadImage(backgroundII);
  console.log(bbackgroundd);
}