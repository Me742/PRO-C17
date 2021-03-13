var PLAY = 1;
var END = 0;
var gameState = 1;

var knife,knifeImage;
var fruit1,fruit1Image,fruit2Image,fruit3Image,fruit4Image
var fruitsGroup,alienGroup
var alien1,alien1Image,alien2,alien2Image

function preload(){
  alien1Image=loadImage("alien1.png");
  alien2Image=loadImage("alien2.png");
  knifeImage=loadImage ("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
 
}
function setup(){
  createCanvas(600,600)
  knife =createSprite(200,200,10,10)
  knife.addImage(knifeImage)
 
  fruitsGroup = new Group();
  alienGroup = new Group();
}
function draw(){
  background("white");
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  fruit();
  alien();
  
  if(fruitsGroup.isTouching(knife)){
    fruitsGroup.destroyEach();
} 
  
  
drawSprites()
}

function fruit(){
  if(frameCount%80===0){
    
  
  fruit1=createSprite(580,200,20,20);
  fruit1.velocityX = -3;
    fruit1.scale=0.25;
    fruit1.lifetime=200
  fruit1.y = Math.round(random(50,450))
 var r =Math.round(random(1,4));
 if (r===1){
    fruit1.addImage(fruit1Image)}
   if (r===2){
    fruit1.addImage(fruit2Image)}
   if (r===3){
    fruit1.addImage(fruit3Image)}
   if (r===4){
    fruit1.addImage(fruit4Image)}
    fruitsGroup.add(fruit1);
  }
}
    
    function alien(){
      if(frameCount%250===0){
    
  
  alien1=createSprite(550,200,20,20);
  alien1.velocityX = -4;
    alien1.scale=1;
    alien.lifetime=180
  alien.y = Math.round(random(70,430))
 var r =Math.round(random(1,2));
 if (r===1){
    alien1.addImage(alien1Image)}
   if (r===2){
    alien1.addImage(alien2Image)
     alienGroup.add(alien1);
    }   
      
      
      
      
    }
    

}                                                  


