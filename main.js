difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 170);

    canvas = createCanvas(550, 500);
    canvas.position(1000, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ADD8E6');
    textSize(difference);
    fill("red");
    text("KIARA ROCKS!!", 50, 400); 
}

function modelLoaded(){
    console.log("PoseNet has been initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}