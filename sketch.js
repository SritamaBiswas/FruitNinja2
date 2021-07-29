var play = 1;
var end =  0;
var gameState = 1;
var knife,knifeImage;
var knifeSound;
var gameOverImage;
var gameOverSound;
var monster;
var mo;
var fruit;
var fr;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage;
var fruitGroup;
var restart;
var enemyGroup;
var score = 0;

function preload(){
  knifeImage = loadImage("sword.png");
  knifeSound = loadSound("small win.wav");
  gameOverImage = loadImage("gameover.png");
  gameOverSound =  loadSound("game-over.wav");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage = loadAnimation("alien1.png","alien2.png");
}
function setup(){
createCanvas(450,450);
  restart= createSprite(225,275,100,25);
  restart.visible = false;
knife = createSprite(200,200,10,10);
  knife.setCollider("rectangle",0,0);
  knife.debug = false;
  knife.addImage(knifeImage);
  knife.scale = 0.7;
 
  fruitGroup=createGroup();
  enemyGroup=createGroup();

}
function draw(){
  background("skyblue");
  restart.shapeColor = "red";
  textSize(20);
  fill("red");
  text("Score "+score,350,20); 
  if(gameState === play){
  knife.addImage(knifeImage);
    knife.scale = 0.7;
  Enemy();
  Ens();
  fruits();
  frs();
    knife.x = mouseX;
    knife.y= mouseY;
    if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
      score = score+5;
      knifeSound.play();
    }
    else if(enemyGroup.isTouching(knife)){
      gameOverSound.play();
    gameState = end;
      knife.x = 225;
      knife.y = 200;
      knife.scale = 2;
      knife.addImage(gameOverImage);
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX = 0;
      enemyGroup.velocityX = 0;
      
     
    }
      if(fruitGroup.isTouching(enemyGroup)){
    enemyGroup.y = enemyGroup.y-10;
    }
    
  
  }
  if(gameState === end){
    fill("light pink");
   text("Play Again",182,280);
     knife.addImage(gameOverImage);
    if(mousePressedOver(restart)){
      
reset();
}
  }

     drawSprites();
  
}
function reset(){
gameState = play

score = 0;

}
function fruits(){
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(420,200,20,20);
  fruit.scale=0.2;
  r=Math.round(random(1,4)); 
  if(r ===1 ) {
  fruit.addImage(fruit1);
  } else if (r  === 2){
    fruit.addImage(fruit2)
    } else if (r  === 3){
    fruit.addImage(fruit3)
      } else if (r === 4){
    fruit.addImage(fruit4)
      }
   fruit.y=Math.round(random(50,400));
   fruit.velocityX=-10;
   fruit.setlifetime=40;
   
   fruitGroup.add(fruit);
}
}
function frs(){
  
 if(World.frameCount%130===0){ 
  fr=createSprite(-20,200,20,20);
  fr.scale=0.2;
  r=Math.round(random(1,4)); 
  if(r ===1 ) {
  fr.addImage(fruit1);
  } else if (r  === 2){
    fr.addImage(fruit2)
    } else if (r  === 3){
    fr.addImage(fruit3)
      } else if (r === 4){
    fr.addImage(fruit4)
      }
   fr.y=Math.round(random(50,400));
   fr.velocityX=10;
   fr.setlifetime=70;
   
   fruitGroup.add(fr);
}
}  

function Enemy(){
  
 if(World.frameCount%300===0){ 
 monster=createSprite(410,200,20,20);
 monster.addAnimation("moving",monsterImage);
 monster.y=Math.round(random(100,400)); 
 monster.velocityX=-10;
 monster.setlifetime=40;
   
 enemyGroup.add(monster);  
}
}
function Ens(){
  
 if(World.frameCount%300===0){ 
 mo=createSprite(-100,200,20,20);
 mo.addAnimation("moving",monsterImage);
 mo.y=Math.round(random(100,400)); 
 mo.velocityX=10;
 mo.setlifetime=70;
   
 enemyGroup.add(mo);  
}
}