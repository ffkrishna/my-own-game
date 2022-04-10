var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleImage1, obstacleImage2, obstacleImage3
var obstaclesGroup


function preload(){
bgImg = loadImage("assets/bg.png")
obstacleImg1 = loadImage("assets/obsBottom1.png")
obstacleImg2 = loadImage("assets/obsBottom2.png")
obstacleImg3 = loadImage("assets/obsBottom3.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
  
  obstaclesGroup = new Group()

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;





}

function draw() {
  
  background("black");
  

        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.x -= 3
          }
          if(keyDown("RIGHT_ARROW")) {
            balloon.x += 3
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
           spawnObstacles() 

        drawSprites();
        
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(30,50,10,40);
    //obstacle.debug = true;
    obstacle.x = Math.round(random(50,300));
    
    obstacle.velocityY = 3
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImg3);
              break;
      case 2: obstacle.addImage(obstacleImg2);
              break;
      case 3: obstacle.addImage(obstacleImg3);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}