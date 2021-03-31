var fixedRect, movingRect;
var box1
var box2

function setup(){
  fixedRect = createSprite(400,200,50,200);
  movingRect = createSprite(200,200,100,30);
  
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
   box1 = createSprite(100,200,20,20)
   box1.velocityX =3

   box2 = createSprite(100,250,20,20)
   box2.velocityX =5

}
function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //calling the isTouching function, use arguments
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue"
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"
  }
  /*isTouching(fixedRect,movingRect);
  isTouching(fixedRect,box1);
  isTouching(movingRect,box1);*/

 // add(253,324,536,78);

 //bounceoff algorithm
 bounceoff(box1,fixedRect);

  collide(box2,fixedRect)

  drawSprites()
}

//function definition with parameters(object1 and object2)

