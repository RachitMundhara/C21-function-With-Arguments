function isTouching(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
      object2.x - object1.x <= object1.width/2 + object2.width/2  &&
       object2.y - object1.y <= object1.height/2 + object2.height/2 &&
       object1.y - object2.y <= object1.height/2 + object2.height/2
      ){
      return true;
     }
     else
     {
      return false;
     }
  }
  
  /*function isTouching(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
      object2.x - object1.x <= object1.width/2 + object2.width/2  &&
       object2.y - object1.y <= object1.height/2 + object2.height/2 &&
       object1.y - object2.y <= object1.height/2 + object2.height/2
      ){
      object2.shapeColor = "red";
      object1.shapeColor = "red";
     }
     else
     {
      object2.shapeColor = "yellow";
      object1.shapeColor = "yellow";
     }
  }*/
  
  function bounceoff (object1,object2){
    if(object2.x - object1.x <= object1.width/2 + object2.width/2)
      {
        object1.velocityX = object1.velocityX*(-1)
      }
  
  }
  
  function collide (object1,object2){
    if(object2.x - object1.x <= object1.width/2 + object2.width/2)
      {
        object1.velocityX = 0
      }
  
  }
  
  /*function add(num1,num2,num3,num4){
    var sum = num1 + num2 + num3+  num4
    console.log(sum)
  }*/
  