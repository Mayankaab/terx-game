
var trex ,trex_running;
var trexing
function preload(){
trexing=loadAnimation('trex1.png','trex3.png','trex4.png')  
grounding=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,10,10)
  trex.addAnimation('running',trexing)
  trex.scale=0.5
  ground = createSprite(300,190,600,10)
 ground.addImage(grounding)
}

function draw(){
  background("white")
  if(keyDown('space')){
  trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
drawSprites()
}
