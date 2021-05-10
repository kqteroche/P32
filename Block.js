class Block {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution : 0.4,
        friction : 0.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){ 
   //console.log (this.body.speed);

if(this.body.speed<3){
  var pos =this.body.position;
    rectMode(CENTER);
    fill("lightpink");
    strokeWeight(0.5);
    rect(pos.x, pos.y, this.width, this.height);

}
else{
  //do nothing
World.remove(world,this.body);

push ();
this.Visibility = this.Visibility-5;
//tint (255, this.Visibility);
//image(this.image, this.body.position.x, this.body.position.y, 50,50);
 pop ();    
}
  }
};