/* global createCanvas, colorMode, HSB, background, rect, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, x1;
let testNote;
let beatMap =[];
function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  score = 0;
  combo = 0;
  let testNote = new note("LightSalmon");
}

function draw() {
  background(95);
  strokeWeight(10);
  stroke("LightCoral");
  fill("LightGoldenRodYellow");
  rect(width - 750, height / 2 - 40, 700, 80);
  ellipse(width - 725, height / 2, 100);
  
  // testNote.move();
  testNote.show();
  
}

class note {
  constructor(color) {
    this.x = width - 80;
    this.y = height / 2;
    this.size = 75;
    this.color = color;
    this.velocity = 1;
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
  move() {
    this.x-=this.velocity
  }
}

// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs

//add in gameStartMode, gameStartPanel, playerDesignMode, playerDesignMode, gameOverMode, gameOverpanel.
