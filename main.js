noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX =0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function draw(){
    background('black');
    document.getElementById("square_side").innerHTML = "एक वर्ग की चौड़ाई और ऊंचाई होगी =" + difference +"पिक्सल";
    fill('red');
    stroke('red');
    square(noseX, noseY,difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +"noseY =" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + "rightWristX ="+ rightWristX + "difference =" + difference);

    }
}