class Tree {

    constructor(x,y){
    var options={
       'isStatic':true
   }
   this.body=Bodies.rectangle(x,y,(this.width-300)/2,(this.height-300)/2,options);
   this.width=400;
   this.height=400;
   this.image=loadImage("tree.png");
   World.add(world, this.body);
}
   
display(){

var pos=this.body.position;
image(this.image,pos.x,pos.y,this.width,this.height);

}


}