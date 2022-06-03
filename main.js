noseX = 0;
noseY = 0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/KjyrCFpK/bart-1308411-340.webp")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    image(clown_nose,noseX-50,noseY-15,100,100);
}

function take_snapshot(){
    save("dontLookInto.jpg");
}

function modalLoaded(){
    console.log('poseNet is initialized.');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX)
        console.log("nose y="+noseY)
    }
}