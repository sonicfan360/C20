var movingRect, fixedRect





function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "blue"
  fixedRect = createSprite(300, 200, 80, 50);
  fixedRect.shapeColor = "yellow"
}

function draw() {
  background(255,255,255);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2
  && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2
  && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height)/2
  && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height)/2
  )
  {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  else{
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
   
  console.log("fixedRect" + fixedRect.y)
  console.log("movingRect" + movingRect.y)
  drawSprites();
}