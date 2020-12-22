
var monkey , monkey_running,jungle
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){

  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImage= loadImage("jungle.jpg");
}



function setup() {
   ground= createSprite(400,400,1500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
   
  jungle=createSprite(0,180,900,900);
  jungle.addImage(backgroundImage);
  jungle.velocityX=-4;
  jungle.x=jungle.width/2;
  
  
  monkey=createSprite(80,315,1600,20);
  monkey.addAnimation("r",monkey_running); 
  monkey.scale=0.1;
 
  
}


function draw() {
background(backgroundImage);
createCanvas(600,600)  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
   
  if(jungle.x<0){
    jungle.x=jungle.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-3;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  spawnFood();
  spawnObstacles();
  monkey.collide(ground);
  text("score"+ score,380,50);
 
  score=score+Math.round(frameCount/60);
 drawSprites();
}
function spawnFood(){
  if(frameCount% 80===0){
    banana=createSprite(400,15,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round (random(50,150));
    banana.velocityX=-1;
    banana.scale=0.1;
    
  }  
}

function spawnObstacles(){
  if(frameCount% 300===0){
    obstacle=createSprite(400,380,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-1;
    obstacle.scale=0.1;
    
  }  
}


