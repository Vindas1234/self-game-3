var kid2IMG,kidIMG,glassIMG,groundIMG,trackIMG,carIMG, explosionIMG;
var canvas;
var glass,kid,kid2,car;
var track;
var gameState=0;
var obstacleGroup
var endIMG
 var score=0;
function preload(){
kid2IMG=loadImage("kid2.png");
kidIMG=loadImage("kid.png");
groundImg=loadImage("ground.png");
trackIMG=loadImage("track.png");
glassIMG=loadImage("broken_glass.png")
carIMG=loadImage("car3.png");
explosionIMG=loadImage("explosion.png");
 endIMG=loadImage("gameend.png"); 
}

function setup(){
  createCanvas(displayWidth - 20, displayHeight-30);

obstacleGroup=new Group();


car=createSprite(displayWidth/4,displayHeight, 50,50);
car.addImage(carIMG);

sign=createSprite(displayWidth/4,displayHeight/4,20,20);
sign.addImage(endIMG);
sign.visible=false


}



function draw(){
 background("white")   
 image(trackIMG, 0,0,displayWidth/2, displayHeight*2);
 image(trackIMG, 0,-displayHeight*2,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*4,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*6,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*8,displayWidth/2, displayHeight*2);
  image(trackIMG, 0,-displayHeight*10,displayWidth/2, displayHeight*2);
if(gameState===0){


car.velocityY=-5  
  

// kid1.velocityY=5

   //make the car move
   if(keyDown(LEFT_ARROW)){
    car.x=car.x-5
   }
   if(keyDown(RIGHT_ARROW)){
        car.x=car.x+5
} 
 camera.position.y=car.y;

 if(car.isTouching(obstacleGroup)){
  car.addImage(explosionIMG);
  endGame();
 }
 

spawnKid();
}
drawSprites();
}   

function spawnKid(){
var randomNumber = Math.round(random(1,6))
if(World.frameCount%50 ===0){
var obstacle = createSprite(random(200,displayWidth/2-100), camera.position.y -(random(100,300)))
switch(randomNumber){
  case 1:{ obstacle.addImage(kidIMG)
  obstacle.scale=0.5}
  break;
  
  case 2:{ obstacle.addImage(kid2IMG)
  obstacle.scale=0.8}
  break;
  case 3:
    case 4:
      case 5:
        case 6:{ obstacle.addImage(glassIMG)
  obstacle.scale=0.3}
  break;
}
obstacleGroup.add(obstacle);
}
}
function endGame(){
obstacleGroup.destroyEach();
car.velocityY=0;
gameState=1;
sign.visible=true;
}

