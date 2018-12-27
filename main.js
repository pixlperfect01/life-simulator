var players=[];
players.length=4;
for(var i=0;i<players.length;i++){
players[i]=new player("","classic",i);
}
function LEVEL1x(){
  players[0].x=20;
  players[0].y=c.height-20;
}
function LEVEL1(){
  ctx.clearRect(0,0,c.width,c.height);
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
