/* global createCanvas,noFill, textSize, OPEN, loadImage, image, textFont, loadFont, PI, TWO_PI, arc,colorMode, keyCode, HSB, background, text, loadSound, rect, frameCount, ellipse, width, height, noStroke,fill, random, stroke, strokeWeight, p5, translate*/
let score, combo, don, ka, song, font, songEnded;
let upperBG, lowerBG, float, donchan;
let testNote, redNote, blueNote, bigRedNote, bigBlueNote;
let beatMap = []
let letterC;
let big;
let triggerExplosion;
let noteMap =["t","r","t","r","t","r","t","r","t","r"];
let beatVelocity=[1,2,3,4,5,6,7,8,9,10]
let canScore;
let drumLeft, drumRight, rimLeft, rimRight;
let  x1 = 0;
let x2;
let scrollSpeed = 2;

// turq #5DC0BC
function preload(){
  upperBG = loadImage("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fuppersongbg.png?v=1596167283001")
  lowerBG = loadImage("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fsongbg.png?v=1596167296333")
  float = loadImage("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fdancer.png?v=1596167278229")
  donchan = loadImage("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fdonchan.gif?v=1596172023209")
  song = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Foffenbach.mp3?v=1596163284914")
  don = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fdon.wav?v=1596154130922")
  ka = loadSound("https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Fka.wav?v=1596154128574")
  font = loadFont('https://cdn.glitch.com/c3a565ad-77ec-45ef-8bf4-72c2d38b11ba%2Ftnt.ttf?v=1596153491049');
}

function setup() {
  createCanvas(800, 600);
  lowerBG.resize(width, 1/2*height);
  image(lowerBG, 0, 300);
  x2 = width;
  colorMode(HSB, 360, 100, 100);
  score = 0;
  combo = 0;
  textSize(30);
  textFont(font);
  drumLeft = "#FAEFE3"
  drumRight = "#FAEFE3"
  rimRight = 0
  rimLeft = 0
  song.play();
}

function draw() {
  upperBG.resize(width, 1/2*height)
  image(upperBG, x1, 0, width, 1/2*height);
  image(upperBG, x2, 0, width, 1/2*height);
  image(donchan,95,120)
   x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  
  strokeWeight(6);
  stroke(0);
    fill("#2C2A2C");
  rect(0, height / 2 - 60, 797, 120);
  fill("#545254")
  noFill()
  strokeWeight(3)
  stroke("#747374")
  ellipse(310,300, 62.5)
  noStroke()
  fill("#545254")
  ellipse(310,300,50) 
  noFill()
  strokeWeight(3)
  stroke("#606061")
  ellipse(310,300, 90)
  stroke(0);
  strokeWeight(6);
  if (frameCount%100==0){
    let ranint = random(0,1)
    if (ranint> .5){
      letterC = "r"
    } else {letterC= "t" }
    let ranint2 = random(0,1)
    if (ranint2 > .1){
      big = true
    } else {big = false}
    beatMap.push(new note(letterC,10,big))
  }
                 
  for (let i= 0; i<beatMap.length;i++){
   beatMap[i].move();
    beatMap[i].show();
    if (triggerExplosion){
         beatMap[i].explode()
          if (beatMap[i].y<-50){
            triggerExplosion=false;
          } 
        }
    
    
  console.log(triggerExplosion)
    
    if (beatMap[i].x>265 && beatMap[i].x<355){
      canScore = true;
    }  else canScore = false;
    
    if (beatMap[i].x>265 && beatMap[i].y>265 ){
      combo = 0
    }
    
    if (beatMap[i].color == "#F94827" && beatMap[i].size>51){
      bigRedNote=true
    } else {bigRedNote = false}
    
    if (beatMap[i].color == "#5DC0BC" && beatMap[i].size>51){
      bigBlueNote=true
    } else {bigBlueNote = false}
    if (beatMap[i].color == "#F94827"){
      redNote=true
    } else {redNote = false}
    
    if (beatMap[i].color == "#5DC0BC"){
      blueNote=true
    } else {blueNote = false}
    
    
    
   
  }
    fill("#FB4729")
   rect(3, height / 2 - 60, 250, 120);
  stroke(rimLeft)
  fill(drumLeft)
  arc(200, 300, 80, 80, PI/2, 3*PI/2, OPEN);
  fill(drumRight)
  stroke(rimRight)
  arc(200, 300, 80, 80, 3*PI/2,PI/2 , OPEN);
  stroke(0)
  fill(0)
  rect(0,240,140,45,10)
  fill(255)
  text(score,10,275);
  if (combo>9){
  text(combo,183,310); 
  }
  
  
}

class note {
  constructor(color,v,big) {
    this.x = width;
    this.y = (height / 2);
    this.velocity = v;
    if (color=="t"){
    this.color = "#5DC0BC";
    } 
    else if (color=="r"){
    this.color = "#F94827";
    }
    if (big == true){
     this.size = 72
    } else{
      this.size = 50
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
    ellipse(this.x-15, this.y, this.size*.25);
    ellipse(this.x+15, this.y, this.size*.25);
    noFill()
    stroke(0)
    strokeWeight(5)
    arc(this.x-7, this.y+10, this.size*.25, this.size*.25,TWO_PI , 3*PI/4);
    arc(this.x+7, this.y+10, this.size*.25, this.size*.25,PI/4 , PI);
  }
  move() {
    this.x-=this.velocity
  }
  explode(){
    this.x += this.velocity*2
    this.y -= this.velocity*2
  }
}

function keyPressed(){
  if (keyCode== "78" && keyCode == "88"){
    if (canScore && bigRedNote){
      combo+=1
    score+=200*combo;
      triggerExplosion = true;
    }
    else {
    combo = 0;
    }
  }
  else if (keyCode == "90" && keyCode == "77"){
     if (canScore && bigBlueNote){
      combo+=1
    score+=200*combo;
      triggerExplosion = true;
    }
    else {
    combo = 0;
    }
  }
  
  if (keyCode== "78" || keyCode == "88"){
    if (keyCode == "78"){
      drumRight = "#F94827"
    } else if (keyCode == "88"){
    drumLeft = "#F94827"
  }
    don.play();
    if (canScore && redNote){
      combo+=1
    score+=100*combo;
      triggerExplosion = true;
    }
    else {
    combo = 0;
    }
    
  } 
  else if (keyCode == "90" ||keyCode == "77"){
     if (keyCode == "90"){
    rimLeft= "#5DC0BC"
    }
  else if (keyCode == "77"){
    rimRight = "#5DC0BC"
  }
    ka.play();
    if (canScore && blueNote){
      combo+=1
    score+=100*combo;
    triggerExplosion = true;
    } else if (canScore && bigBlueNote){
      combo+=1
    score+=200*combo;
      triggerExplosion = true;
    }
    else {
    combo = 0;
    }
  }
}
function keyReleased(){
  if (keyCode == "78"){
      drumRight = "#FAEFE3"
    } 
  else if (keyCode == "88"){
    drumLeft = "#FAEFE3"
  }
    else if (keyCode == "90"){
    rimLeft= 0
    }
  else if (keyCode == "77"){
    rimRight = 0
  }
  }  


// 1. graphical mockup
//2. functional note system
//3. multiplayer functionality
//4. updated graphics
//5. multiple songs

//add in gameStartMode, gameStartPanel, playerDesignMode, playerDesignMode, gameOverMode, gameOverpanel.