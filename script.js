/* global createCanvas,textSize, textFont, loadFont, PI, TWO_PI, arc,colorMode, keyCode, HSB, background, text, loadSound, rect, frameCount, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, don, ka, font, isStarted;
let testNote;
let beatMap= [];
let noteMap =["t","r","t","r","t","r","t","r","t","r"];
let beatVelocity=[1,2,1,2,1,2,1,2,1,2,20]
let startText = " ";

let canScore;
// turq #5DC0BC
function preload(){
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
  isStarted = false;
}

function draw() {
  background(95);
  strokeWeight(6);
  stroke(0);
  fill("LightGoldenRodYellow");
  rect(0, height / 2 - 40, 700, 80);
  ellipse(width - 725, height / 2, 100);
   rect(75,300,80)
  // while( ){
  //   for (let i=0; i<noteMap.length;i++){
  //     beatMap.push(new note(noteMap[i],beatVelocity[i]))
  //   }
  // }
  for (let i= 0; i<beatMap.length;i++){
    beatMap[i].show();
    beatMap[i].move();
    if (beatMap[i].x>-300 && beatMap[i].x<900){
      rect(90,90,90,90)
      canScore = true;
    }
    else canScore = false;
  }
  fill("#F9F1E9")
  text(score,20,20);
  text(combo,20,40);
  text(startText, 20,20)
  
  if (isStarted){
    noLoop()
    startText = "Click to start!"
  } else {
    startText = " "
    loop()
  }
  
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
    if (canScore){
      combo+=1
    score+=100*combo;
    }
    else {
    combo = 0;
    }
  }
 
}

// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs

//add in gameStartMode, gameStartPanel, playerDesignMode, playerDesignMode, gameOverMode, gameOverpanel.
