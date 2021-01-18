var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var turn=0
var gamestate="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(35)
  fill(255)
  text("score:"+score,20,40)

  

  textSize(35)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("100",320,550)
  text("100",400,550)
  text("100",480,550)
  text("200",560,550)
  text("200",640,550)
  text("200",720,550)
  
  ground.display();
  if(particles.x<300&&particles.y===550){
    score=score+500
  }
  if(particles.x>301&&particles.x<600&&particles.y===550){
    score=score+100
  }
  if(particles.x>601&&particles.x<900&&particles.y===550){
    score=score+100
  }
  if(gameState="play"&&turn===5){
    gameState="End"
  }
  if(gameState==="End"){
    background("black")
    fill("red")
    textSize(100)
    text("Game Over,200,400")
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     turn++
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="End"){
    turn++
    particle=new Particle(mouseX,10,10,10)
  }
}