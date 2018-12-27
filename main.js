var players,AOP,level,coords;
function LEVELx(){
players=[];
players.length=4;
AOP=1;
level=["0000000000","0........0","0........0","0........0","0~~~~~~~~0","0000000000","0000000000","0........0","0.@.......0","0000000000"];
for(var i=0;i<level.length;i++){
  for(var ii=0;ii<level[i].length;ii++){
    if(level[i].charAt(ii)=="@")
      coords=[ii,i];
  }
}

for(var i=0;i<players.length;i++){
  players[i]=new player("","classic",i);
  players[i].x=coords[0]*(c.width/10);
  players[i].y=coords[1]*(c.height/10);
}
  LEVEL();
}
function LEVEL(){
  ctx.clearRect(0,0,c.width,c.height);
  for(var i=0;i<AOP;i++){
    if(keys.left&&collision(players[i])[0])
      players[i].left();
    if(keys.right&&collision(players[i])[1])
      players[i].right();
    if(keys.up&&collision(players[i])[2])
      players[i].up();
    players[i].draw();
  }
  window.requestAnimationFrame(LEVEL1);
}
function collision1(player){
  var cols=[true,true,true,true];
  var sec=c.width/level[0].length;
  if(level[Math.trunc(player.y/sec)].charAt(Math.trunc(player.x/sec)-1)=="0")
    cols[0]=false;
  if(level[Math.trunc(player.y/sec)].charAt(Math.trunc(player.x/sec)+1)=="0")
    cols[1]=false;
  if(level[Math.trunc(player.y/sec)-1].charAt(Math.trunc(player.x/sec)+1)=="0")
    cols[2]=false;
  if(level[Math.trunc(player.y/sec)+1].charAt(Math.trunc(player.x/sec)+1)=="0")
    cols[3]=false;
  return cols;
}
