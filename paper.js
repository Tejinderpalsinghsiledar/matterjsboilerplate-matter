class paper{
    constructor(x,y,width,height){
        var options={
         restitution:0.3,
         isStatic:false,
         friction:0.5,
         density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,radiuds,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        fill("blue")
        rect(0,0,this.width,this.height)
        pop()
    }
}

