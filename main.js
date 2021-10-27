function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1300,336);
	canvas.parent("canvasdiv");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(400,400);
	video.parent("consoleimg");
	posenet=ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("model loaded");
}
function gotPoses(result){
	if(result.length>0){
		console.log(result);
	}
}

function draw() {
	game()
}

