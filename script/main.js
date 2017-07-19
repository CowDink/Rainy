var rains = [];

function setup(){
	createCanvas(384, 640);
	for(var i = 0;i < 100;i++){
		rains.push(new rain());
	}
}

function draw(){
	background('#AFFFFF');
	for(var i = 0;i < 100;i++){
		rains[i].update();
		rains[i].show();
	}
	fill('#FFA400');
	text(rains[50].yspeed, width/2, height/2);
}