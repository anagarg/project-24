class Paper{
    constructor(x, y, diameter) {
        var options = {
            isstatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body = Matter.bodies.rectangle(200,200,100,options);
      this.diameter= 50;      
      World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        pop();
      }
}