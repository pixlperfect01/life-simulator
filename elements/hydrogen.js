function hydrogenElement(x,y,z,charge,isIon,temperature,iso,meta){
  this.x=x;
  this.y=y;
  this.z=z;
  this.charge=charge;
  this.isIon=isIon;
  this.temp=temperature;
  this.iso=iso;
  this.dir=0;
  this.speed=0;
  this.acc=0;
  this.prot=1;
  this.neu=0;
  this.elcSH=1;
  this.ecSh_1=1;
  this.state=2;//0solid1liquid2gas3plasma
  this.melt=−434.49;
  this.boil=−423.182;
  this.densSTP=0.08988;//  g/L
  this.densMP=0.07;
  this.densBP/*boiling*/=0.07099;
  this.trip=-434.82406;
  this.crit=-400.3816;
  this.HOF/*heat of fussion*/=14.304;//Joule/gram
  this.struc="hex";
  this.meta=meta;//dd,mm,yyyy
}
