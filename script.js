/* global createCanvas, arc,colorMode, keyCode, HSB, background, text, loadSound, rect, frameCount, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, clap;
let testNote;
let beatMap =[];
let canScore;
// turq #5DC0BC
function preload(){
  clap = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fclap.mp3?v=1596051047665")
}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  score = 0;
  combo = 0;
  
}

function draw() {
  background(95);
  strokeWeight(6);
  stroke("black");
  fill("LightGoldenRodYellow");
  rect(width - 750, height / 2 - 40, 700, 80);
  ellipse(width - 725, height / 2, 100);
   rect(75,300,80)
  if (frameCount % 100 == 0){
    beatMap.push(new note("r",6))
    beatMap.push(new note("t",8))
  }
  for (let i= 0; i<beatMap.length;i++){
    beatMap[i].show();
    beatMap[i].move();
    if (beatMap[i].x>-300 && beatMap[i].x<900){
      rect()
      canScore = true;
    }
    else canScore = false;
  }
  fill("#F9F1E9")
  text(score,20,20);
  text(combo,20,40);
  
}

class note {
  constructor(color,v) {
    if (color=="t"){
    this.x = width - 80;
    this.y = height / 2;
    this.size = 65;
    this.color = "#5DC0BC";
    this.velocity = v;
    } 
    else if (color=="r"){
      this.x = width - 80;
    this.y = height / 2;
    this.size = 65;
    this.color = "#F94827";
    this.velocity = v;
    }
    
  }
  show() {
    stroke(0)
    fill("#F9F1E9")
    ellipse(this.x, this.y, this.size*1.25);
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    fill(0)
    ellipse(this.x-17, this.y, this.size*.25);
    ellipse(this.x+17, this.y, this.size*.25);
    noFill()
    stroke(0)
    strokeWeight(5)
    arc(this.x-9, this.y+10, this.size*.25, this.size*.25,TWO_PI , 3*PI/4);
    arc(this.x+9, this.y+10, this.size*.25, this.size*.25,PI/4 , PI);
  }
  move() {
    this.x-=this.velocity
  }
}

function keyPressed(){
  if (keyCode== "90" || keyCode == "88" ||keyCode == "78" ||keyCode == "77" ){
    clap.play();
    if (canScore){
      combo+=1
    score+=100*combo;
    }
      
  //fill("#F94827")
   // arc(479, 300, 280, 280, PI, TWO_PI);
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
