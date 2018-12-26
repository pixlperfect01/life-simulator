function player(name,cls){
  this.name=name;
  this.color="#FF0000";
  this.x=0;
  this.y=0;
  this.lvlsc=0;
  this.score=0;
  this.wins=0;
  this.lives=5;
  this.health=100;
  this.class=cls;
  this.powerUps=[0,0,0,0];//jump,flight,ex health,sheild
}
