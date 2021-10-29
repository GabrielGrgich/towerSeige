class Box {
	constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
  
  display () {
	
	if (this.body.speed < 3) {
		push();
        translate(this.body.position.x, this.body.position.y);
        pop();
	} else {
	  World.remove(world,this.body);
	  push()
	  this.visibility = this.visibility -5;
	  tint(255,this.visibility);
	  pop()
	}
  }
};
