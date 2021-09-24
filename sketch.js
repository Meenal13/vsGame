var x ,y;
x = 200;
y = 200;

function setup() {
  createCanvas(400, 400);

  
}

function draw() {
  background('red');
  fill('blue');
  rect(x,y,20,20);
  if(keyIsDown(LEFT_ARROW))
  {
    x-=3;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    x+=3;
  }
  if(keyIsDown(UP_ARROW))
  {
    y-=3;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    y+=3;
  }
  
}
