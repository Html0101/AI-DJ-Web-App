song = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function setup() 
{ 
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    postNet = ml5.poseNet(video, modelLoaded);
    postNet.on('pose', gotposes);
}

function gotposes(results)
{ 
    if(results.length > 0) 
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}

function modelLoaded() 
{ 
    console.log("Posenet is initialized");
}

function draw() 
{ 
    image(video, 0, 0 ,600, 500);
}

function preload() 
{ 
    song = loadSound("music.mp3");
    song.setVolume(1);
    song.rate(1);
}

function playing() 
{
    song.play();
}