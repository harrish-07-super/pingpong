function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("Model is loaded!");
}

function draw() {
    image(video, 0, 0, 600, 400);
}