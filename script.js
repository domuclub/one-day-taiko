/* global createCanvas,noFill, textSize, textFont, loadFont, PI, TWO_PI, arc,colorMode, keyCode, HSB, background, text, loadSound, rect, frameCount, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, don, ka, song, font, songEnded;
let testNote;
let beatMap= [];
let noteMap =["t","r","t","r","t","r","t","r","t","r"];
let beatVelocity=[20]
let canScore;
// turq #5DC0BC
function preload(){
  song = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Foffenbach.mp3?v=1596163284914")
  don = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fdon.wav?v=1596154130922")
  ka = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fka.wav?v=1596154128574")
  font = loadFont('https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Ftnt.ttf?v=1596153491049');
}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  score = 0;
  combo = 0;
  textSize(30);
  textFont(font);
  song.play();
}

function draw() {
  background(95);
  strokeWeight(6);
  stroke(0);
    fill("gray");
  rect(5, height / 2 - 40, 790, 100);
  ellipse(width - 725, height / 2, 100);
  // if(song.isPlaying()){
    
//       beatMap.push(new note(noteMap[i],beatVelocity[i]))
//   }
   if (frameCount % 100 == 0){
    beatMap.push(new note("r",6))
    beatMap.push(new note("t",8))
  }
  for (let i= 0; i<beatMap.length;i++){
    beatMap[i].show();
    beatMap[i].move();
    if (beatMap[i].x>-300 && beatMap[i].x<900){
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
    this.size = 50;
    this.color = "#5DC0BC";
    this.velocity = v;
    } 
    else if (color=="r"){
      this.x = width - 80;
    this.y = height / 2;
    this.size = 50;
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
    arc(this.x-7, this.y+10, this.size*.25, this.size*.25,TWO_PI , 3*PI/4);
    arc(this.x+7, this.y+10, this.size*.25, this.size*.25,PI/4 , PI);
  }
  move() {
    this.x-=this.velocity
  }
}

function keyPressed(){
  if (keyCode== "90" || keyCode == "88"){
    don.play();
    if (canScore){
      combo+=1
    score+=100*combo;
    }
    else {
    combo = 0;
    }
  } 
  else if (keyCode == "78" ||keyCode == "77"){
    ka.play();
    rect(90,90,90,90)
    if (canScore){
      combo+=1
    score+=100*combo;
    }
    else {
    combo = 0;
    }
 
}
  
// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs

//add in gameStartMode, gameStartPanel, playerDesignMode, playerDesignMode, gameOverMode, gameOverpanel.
}