nose_x = 0
nose_y = 0

wrist_leftx = 0
wrist_rightx = 0

difference = 0


function setup(){
canvas = createCanvas(550, 550)
video = createCapture(VIDEO)
video.size(550, 500)
video.position(0, 50)
canvas.position(560, 150)

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("posenet is loaded")
}

function draw(){
background("#969A97")

fill ("red")

square(nose_x, nose_y, difference)
}

function gotPoses(result){
if (result.length >0) {
    console.log(result)

    nose_x = result[0].pose.nose.x
    nose_y = result[0].pose.nose.y

    wrist_leftx = result[0].pose.leftWrist.x
    wrist_rightx = result[0].pose.rightWrist.x

    difference = wrist_leftx - wrist_rightx

}
}



