class Stone {
    constructor(x , y ){
        var options = {
            restitution : 0 , 
            friction : 0 , 
            density : 1.2 
        }
     this.body = Bodies.rectangle(x, y, 50, 50, options);
     this.width = 50;
     this.height = 50;
     this.image = loadImage("stone.png");
     World.add(world , this.body);
    }


     display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x,  this.body.position.y, this.width, this.height);
        pop();
     }
}


