draw();
var players=[0,0,0,0];
for(var i=0;i<4;i++){
players[i]=new player("","classic",i);
}
function draw(){
window.requestAnimationFrame(draw);
}
