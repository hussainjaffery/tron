var bgColor = 128;
var p1x = 220;
var p1y = 180;
var p2x = 260;
var p2y = 180;

var p1 = new Player(0, 220, 180, 3);
var p2 = new Player(255, 260, 180, 1);

function setup() {
	createCanvas(480, 360);
	background(bgColor);
}

function draw() {
	renderPlayer(p1);
	renderPlayer(p2);
	
	moveForward(p1);
	moveForward(p2);
}

function renderPlayer(player) {
	stroke(player.color);
	point(player.x, player.y);
}

function moveForward (player) {
	switch (player.dir) {
		case 0: player.y--; // Up
				break;
		case 1: player.x++; // Right
				break;
		case 2: player.y++; // Down
				break;
		case 3: player.x--; // Left
				break;
		default: console.log("Invalid direction");
				break;
	}
	player.x = clamp(player.x, width);
	player.y = clamp(player.y, height);
}

function clamp(num, upperBound) {
	if (num < 0)
		num += upperBound;
	else if (num > upperBound)
		num -= upperBound;
	return num;
}

function Player(color, x, y, dir) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.dir = dir;
}

/*
// TODO
// function turnPlayer() {}
// function checkDeath () {}
*/