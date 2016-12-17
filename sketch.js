var bgColor = 128;
var p1x = 220;
var p1y = 180;
var p2x = 260;
var p2y = 180;

function setup() {
	createCanvas(480, 360);
	background(bgColor);
}

function draw() {
	
	stroke(0);
	point(p1x, p1y);
	stroke(255);
	point(p2x, p2y);
	
	p1x--;
	p2x++;
	p1x = clampX(p1x);
	p2x = clampX(p2x);
}

function clampX(x) {
	if (x < 0)
		x += width;
	else if (x > width)
		x -= width;
	return x;
}