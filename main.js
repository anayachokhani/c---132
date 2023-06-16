function setup(){
    canvas=createCanvas(640, 500);
    canvas.center();   
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
console.log("model loaded");
StatUS = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}

img="";

StatUS="";

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 500);
    fill("#8E704D");
    textSize(35);
    text("dog", 100, 250);
    noFill();
    stroke("lightbrown");
    rect(30, 60, 280, 350);
    fill("#464545");
    textSize(35);
    text("cat", 400, 150)
    noFill();
    stroke("black");
    rect(300, 90, 270, 300);
}