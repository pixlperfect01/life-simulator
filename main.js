var players=[0,0,0,0];
for(var i=0;i<4;i++){
players[i]=new player("","classic",i);
}
function LEVEL1(){
if(keys.up)
players[0].y-=1;
if(keys.dowm)
players[0].y+=1;
if(keys.left)
players[0].x-=1;
if(keys.right)
players[0].x+=1;
players[0].draw();
window.requestAnimationFrame(LEVEL1);
}
