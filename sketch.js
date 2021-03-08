function setup(){
    createCanvas(500,500);
    atacker=createSprite(225,27,30,30)
     defender=createSprite(180,320,30,30)
     defender2=createSprite(220,320,30,30)
     defender3=createSprite(160,340,30,30)
     defender4=createSprite(200,340,30,30)
     defender5=createSprite(240,340,30,30)
     defender6=createSprite(200,300,30,30)
    atacker.shapeColor=("white")
    atacker.velocityX=1
    atacker.velocityY=-1
        
       
}
function draw()

{
background("black")
drawSprites()
edges=createEdgeSprites()
atacker.bounceOff(edges)
defender.bounceOff(edges)
defender2.bounceOff(edges)
defender3.bounceOff(edges)
defender4.bounceOff(edges)
defender5.bounceOff(edges)
defender6.bounceOff(edges)
defender.bounceOff(atacker)
defender2.bounceOff(atacker)
defender3.bounceOff(atacker)
defender4.bounceOff(atacker)
defender5.bounceOff(atacker)
defender6.bounceOff(atacker)




}
