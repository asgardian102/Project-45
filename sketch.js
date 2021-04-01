const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
function setup() {
 engine=Engine.create()
 world=engine.world 
  createCanvas(800,400);
 //ground = new Ground( xposition, yposition, width, height)
 // ground= new Ground ( canvas width/ 2,height or height -10 ,canvas width, 10 to 20)
  ground1=new Ground(470,320,800,20)

  pole1= new Pole(200,200, 100, 100)
}

function draw() {
  background("skyblue");  
  drawSprites();
  ground1.display();
  pole1.display()
}