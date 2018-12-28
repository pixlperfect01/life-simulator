var players,AOP,level,coords,uC;
function LEVELx(){
  uC=0;
  players=[];
  players.length=4;
  AOP=1;
  level=["00000000000000000000","0..................0","0..................0","0..................0","0..................0","00000000000000000000","00000000000000000000","0..................0","0...............@...0","00000000000000000000"];
  for(var i=0;i<level.length;i++){
    for(var ii=0;ii<level[i].length;ii++){
      if(level[i].charAt(ii)=="@")
        coords=[ii,i];
    }
  }

  for(var i=0;i<players.length;i++){
    players[i]=new player("","classic",i);
    players[i].x=coords[0]*(15);
    players[i].y=coords[1]*(15);
  }
  LEVEL();
}
function LEVEL(){
  ctx.clearRect(0,0,c.width,c.height);
  for(var i=0;i<AOP;i++){
  if(eval(players[i].upKey))
    players[i].jC++;
  if(!eval(players[i].upKey))
    players[i].jC=0;
    if(eval(players[i].leftKey)&&collision(players[i])[0])
      players[0].left();
    if(eval(players[i].rightKey)&&collision(players[i])[1])
      players[0].right();
    if(eval(players[i].upKey)&&collision(players[i])[2]&&jumpTest(players[i]))
      players[0].up();
    players[i].draw();
  }
  window.requestAnimationFrame(LEVEL);
}
function collision(player){
  var cols=[true,true,true,true];
  var sec=15;
  if(level[Math.trunc(player.y/sec)].charAt(Math.trunc((player.x-1)/sec))=="0")
    cols[0]=false;
  if(level[Math.trunc(player.y/sec)].charAt(Math.trunc((player.x+1)/sec))=="0")
    cols[1]=false;
  if(level[Math.trunc((player.y-1)/sec)].charAt(Math.trunc(player.x/sec))=="0")
    cols[2]=false;
  if(level[Math.trunc((player.y+1)/sec)].charAt(Math.trunc(player.x/sec))=="0")
    cols[3]=false;
  return cols;
}
function jumpTest(player){
  
  return true;
}
