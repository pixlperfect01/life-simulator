var players=[0,0,0,0];
for(var i=0;i<4;i++){
players[i]=new player("","classic",i);
}
function LEVEL1(){
  ctx.clearRect(0,0,c.width,c.height);
  if(keys.up)
    players[0].jump();
/*
if(keys.down)
players[0].y+=1;
*/
  if(keys.left)
    players[0].left()
  if(keys.right)
    players[0].right();
  if(keys.up)
    players[0].up();
  if(keys.down)
    players[0].down();
  if(!keys.left&&!keys.right&&!keys.up&&!keys.down)
    players[0].stay();
players[0].draw();
window.requestAnimationFrame(LEVEL1);
}
