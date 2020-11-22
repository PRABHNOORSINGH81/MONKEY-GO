
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,340,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15
  ground=createSprite(width/2,height-20,width+width,10)
  ground.velocityX=-2
  bananaGroup=new Group()
  obstacleGroup=new Group()
  
  score=0
}


function draw() {
background("white")
  if (ground.x<0){
    ground.x=200
  }
  if(keyDown("space")){
     monkey.velocityY=-10  
     }
  monkey.velocityY=monkey.velocityY+0.08
  monkey.collide(ground)
  
  spwanFruit()
  spwanobstacle()
drawSprites()
  stroke("black")
  textSize(25)
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time = "+score,100,50)
}

function spwanFruit(){
  if(frameCount%80==0){
   banana=createSprite(400,40,10,10) 
   banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
  banana.y=Math.round(random(180,250))
  bananaGroup.add(banana)
   banana.lifetime=300 
    
    
  }
  
}
function spwanobstacle(){
  if(frameCount%200==0){
   obstacle=createSprite(400,350,10,10) 
   obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.velocityX=-5
    obstacle.lifetime=300
  
  obstacleGroup.add(obstacle)
    
    
    
  }
  
}







