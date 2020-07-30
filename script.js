/* global createCanvas, colorMode, HSB, background, text, loadSound, rect, frameCount, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, clap;
let testNote;
let beatMap =[];
let canScore;

function preload(){
  clap = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fclap.mp3?v=1596051047665")
}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  score = 0;
  combo = 0;
  
  beatMap.push(new note("#F94827"))
}

function draw() {
  background(95);
  strokeWeight(10);
  stroke("LightCoral");
  fill("LightGoldenRodYellow");
  rect(width - 750, height / 2 - 40, 700, 80);
  ellipse(width - 725, height / 2, 100);
  if (frameCount % 100 == 0){
    beatMap.push(new note("#F94827"))
  }
  for (let i= 0; i<beatMap.length;i++){
    beatMap[i].show();
    beatMap[i].move();
    if (beatMap[i].x>50 && beatMap[i].x<500){
      canScore = true;
    }
    else canScore = false;
  }
  text(score,20,20);
  text(combo,20,40);
  
}

class note {
  constructor(color) {
    this.x = width - 80;
    this.y = height / 2;
    this.size = 75;
    this.color = color;
    this.velocity = 5;
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

function keyPressed(){
  if (keyCode== "90"){
    fill()
    arc(479, 300, 280, 280, PI, TWO_PI);
  }
  if (canScore){
    clap.play();
    combo+=1
    score+=100*combo;
  console.log(beatMap[0].x)
  } else {
    combo = 0;}
 
}

// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs

//add in gameStartMode, gameStartPanel, playerDesignMode, playerDesignMode, gameOverMode, gameOverpanel.
