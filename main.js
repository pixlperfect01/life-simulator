var c,ctx,level,player,coords;
function menuMain(){
  console.log("hi");
  c=document.getElementById("myCanvas");
  ctx=c.getContext("2d");
  level=["00000000000000000000","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0..................0","0.................@0","0000000000000000000000000"];
  for(var i=0;i<level.length;i++){
    for(var ii=0;ii<level[i].length;ii++){
      if(level[i].charAt(ii)==="@")
        coords=[ii*25.i*25];
    }
  }
  player=new Player(coords[0],coords[1]);
  play();
}

function play(){
  ctx.clearRect(0,0,500,500);
  drawLevel();
  player.draw();
  window.requestAnimationFrame(play);
}

function drawLevel(){
  for(var i=0;i<level.length;i++){
    for(var ii=0;ii<level[i].length;ii++){
      if(level[i].charAt(ii)==="0"){
        ctx.fillStyle="#000000";
        ctx.fillRect(ii*25,i*25,25,25);
      }
    }
  }
}

function player(x,y){
  this.x=x;
  this.y=y;
  this.color="#FF0000";
  this.draw=function(){
    ctx.color=this.color;
    ctx.fillRect(this.x,this.y,25,25);
  }
}
