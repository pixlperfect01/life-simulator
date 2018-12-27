var players=[];
players.length=4;
for(var i=0;i<players.length;i++){
players[i]=new player("","classic",i);
}
function LEVEL1x(){
  for(var i=0;i<players.length;i++){
    players[i].x=20;
    players[i].y=c.height-20;
  }
  LEVEL1();
}
function LEVEL1(){
  ctx.clearRect(0,0,c.width,c.height);
/*
if(keys.down)
players[0].y+=1;
*/
  players[0].color="rgb("+Math.trunc(Math.random()*255)+","+Math.trunc(Math.random()*255)+","+Math.trunc(Math.random()*255)+")";
  if(keys.left&&!collision1(players[0])[0])
    players[0].left()
  if(keys.right&&!collision1(players[0])[2])
    players[0].right();
  if(keys.up&&!collision1(players[0])[3])
    players[0].up();
  if(!collision1(players[0])[3])
    players[0].down();
  if(!keys.left&&!keys.right&&!keys.up&&!keys.down)
    players[0].stay();
  for(var i=0;i<players.length;i++){
    players[i].draw();
  }
  window.requestAnimationFrame(LEVEL1);
}
function collision1(player){
  var cols=[false,false,false,false];//L,R,U,D
  if(player.x<=0)
    cols[0]=true;
  if(player.x>=c.width)
    cols[1]=true;
  if(player.y<=0)
    cols[2]=true;
  if(player.y>=c.height)
    cols[3]=true;
}
