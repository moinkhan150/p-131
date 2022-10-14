img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('bed_room.png');
}

function draw()
{
    document.getElementsByClassName("div_btn").innerHTML = image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 100, objects[i].y + 100);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].width, objects[i].height);
        }
    }
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function nav_tv()
{  
    img = loadImage('TV.png');
}

function nav_desk()
{  
    img = loadImage('desk.png');
}

function nav_botle()
{  
    img = loadImage('bottle.png');
}

function nav_fru()
{  
    img = loadImage('fruit.png');
}