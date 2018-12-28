function basicMob(x,y){
  this.x=x;
  this.y=y;
  this.color="#000000";
  this.speed=1;
  this.move=function(){
    this.x+=speed;
  }
  this.reverse=function(){
    
