class Mango {
    constructor(x ,y ,width ,height) {
        var options = {
            isStatic : true , 
            restituition : 0 ,
            friction : 1 
        }
        this.body=Bodies.rectangle(x, y,width, height, options);
        this.image = loadImage("mango.png");
        this.width=width;
        this.height=height;
    }


    display(){
        image(this.image,this.body.position.x,this.body.position.y , this.width, this.height);
        //image(this.image, 500,170 , this.width, this.height);

    }
}