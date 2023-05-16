var img="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting object!";
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
    img=loadImage('P2.jpg');
}

function draw(){
    image(img,0,0,640,420);
}
