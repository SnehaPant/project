class paper{
    constructor(x,y,r)
     {
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,option)
        World.add(world,this.body);
        this.image = loadImage("paper.png")
 }
      display(){
     rectMode(CENTER)
     ellipse(100,355,30);
     imageMode(CENTER);
     image(this.image, 100,340,50);
    

 }
}
