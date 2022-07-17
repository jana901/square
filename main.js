
nosex=0;
nosey=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(570,100);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+nosex+"nosey="+nosey);
    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;
    difference=floor(leftwristX-rightwristX);
    console.log("rigthwristx="+rightwristX+"leftwristx="+leftwristX+"difference="+difference);
}
}

function draw(){
    background("#FFFC9D");
    document.getElementById("square_side").innerHTML="width and height of square will be "+difference+"px";
    fill("#9DFFEA");
    stroke("#9DFFEA");
    square(nosex,nosey,100);
}