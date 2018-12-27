var players=[0,0,0,0];
for(var i=0;i<4;i++){
players[i]=new player("","classic",i);
}
function LEVEL1(){
ctx.clearRect(0,0,c.width,c.height);
if(keys.up)
players[0].y-=1;
if(keys.down)
players[0].y+=1;
if(keys.left)
players[0].x-=1;
if(keys.right)
players[0].x+=1;
players[0].draw();
window.requestAnimationFrame(LEVEL1);
}
