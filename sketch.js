
function setup(){
  createCanvas(500,500);
   wall=createSprite(0,215,170,10) 
wall.velocityY=1
 wall2=createSprite(360,208,170,10)
wall2.velocityY=-1
 thef=createSprite(200,350,30,30)

 dimond=createSprite(388,0,30,30)
wall.shapeColor=("red")
wall2.shapeColor=("red")
thef.shapeColor=("blue")
dimond.shapeColor=("green")
}
  

function draw() {
  background("yellow")
if (keyDown(LEFT_ARROW)){
  thef.x=thef.x-1
  
}
if (keyDown(RIGHT_ARROW)){
  thef.x=thef.x+1
}

if (keyDown(UP_ARROW)){
  thef.y=thef.y-1
}
if (keyDown(DOWN_ARROW)){
thef.y=thef.y+1
}
if(thef.isTouching(wall) || thef.isTouching(wall2))
{
  wall.velocityY=0
  wall2.velocityY=0
  textSize(25)
 stroke("red")
 fill("black") 
  text("Thief is caught",200,200)
}

if(thef.isTouching(dimond) )
{
  wall.velocityY=0
  wall2.velocityY=0
  textSize(25)
  fill("black")
  stroke("red")
  text("Thief has Stolen the Diamond",36,200)
}
 edges= createEdgeSprites()
  wall.bounceOff(edges)
  wall2.bounceOff(edges)
drawSprites()
}
