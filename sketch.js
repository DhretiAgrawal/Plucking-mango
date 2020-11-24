const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage , boy  ; 
var mango , mango2 , mango3 , mango4;  
var tree , stone;
var sling , gameState;
function preload() {
boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  tree = new Tree(400,50,20,20);
  mango = new Mango(700,190,50,50);
  mango2 = new Mango(500,80,50,50);
  mango3 = new Mango(450,170,50,50);
  mango4 = new Mango(600,150,50,50);
  mango5 = new Mango(650,100,50,50);
  stone = new Stone(100,200);
  sling = new Sling(stone.body,{x:100, y:250});

}

function draw() {
  background(0);
  Engine.update(engine);  
  image(boyImage,50, 200,200,200);
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  stone.display();

  detectollision(stone,mango);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);


}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
 // gameState = "launched";
}

function detectollision(Stone,Mango){
  mangoBodyPosition=Mango.body.position;
  stoneBodyPosition=Stone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
    if(distance<=Mango.width+Stone.width){
      Matter.Body.setStatic(Mango.body,false);
    }
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body);
    Matter.Body.setPosition(stone.body , {x:235 , y:420})
   
  }
}




