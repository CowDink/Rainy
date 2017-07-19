function rain(){
	this.x = random(383);
	this.y = random(-200, -50);
	this.yspeed = random(2,6);
	this.len = random(5, 15);

	this.update = function(){
		this.y = this.y + this.yspeed;
		this.yspeed += 0.2;
		
		if(this.y+10 > height){
			this.y = random(-200, -50);
			this.yspeed = random(2,6);
		}
	}
	
	this.show = function(){
		stroke('#FF0000');
		line(this.x, this.y, this.x, this.y+this.len);
	}
}