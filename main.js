noseX=0;
noseY=0;

function preload() {
    moustache_nose = loadImage('https://e7.pngegg.com/pngimages/406/315/png-clipart-moustache-computer-icons-moustache-fashion-logo-thumbnail.png');
    lipstick_nose  = loadImage('https://image.similarpng.com/very-thumbnail/2021/04/Female-Lips-with-Gloss-Red-Lipstick-on-transparent-background-PNG.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}



function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache_nose, noseX, noseY, 40, 30);
    image(lipstick_nose, noseX, noseY, 30, 30)
}

function take_snapshot(){
    save('myFilterImage.png');
}