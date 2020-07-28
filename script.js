/* global createCanvas, colorMode, HSB, background, rect, ellipse, width, height */
let score;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  score= 0;
}

function draw() {
  background(95);
  rect(width - 750, height / 2 - 40, 700, 80);
  ellipse(width - 725, height / 2, 100);
  note 
}

class note{
  constructor(){
    this.x=width-80;
    this.y=height/2;
    this.size=75;
  }
}

// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs
