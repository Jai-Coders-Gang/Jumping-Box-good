var canvas;
var music;
var box;
var redBox, yellowBox, blueBlox, greenBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redBox = createSprite(100,590,200,10)
    redBox.shapeColor = "red";

    blueBox = createSprite(305,590,200,10)
    blueBox.shapeColor = "blue";

    greenBox = createSprite(510,590,200,10)
    greenBox.shapeColor = "green"; 

    yellowBox = createSprite(715,590,200,10)
    yellowBox.shapeColor = "yellow";

    box = createSprite(random(20,750),50,20,20);
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    box.velocityY = 6;

    if(box.isTouching(redBox)){
        box.shapeColor = "red";
    }
    if(box.isTouching(blueBox)){
        box.shapeColor = "blue";
    }
    if(box.isTouching(greenBox)){
        box.shapeColor = "green";
    }
    if(box.isTouching(yellowBox)){
        box.shapeColor = "yellow";
    }
    box.collide(blueBox);
    box.collide(redBox);
    box.collide(greenBox);
    box.collide(yellowBox);

    if((frameCount % 100 === 0)){
        box = createSprite(random(20,750),50,20,20);
        music.play();
        if(box.isTouching(redBox)){
            box.shapeColor = "red";
        }
        if(box.isTouching(blueBox)){
            box.shapeColor = "blue";
        }
        if(box.isTouching(greenBox)){
            box.shapeColor = "green";
        }
        if(box.isTouching(yellowBox)){
            box.shapeColor = "yellow";
        }
        box.collide(blueBox);
        box.collide(redBox);
        box.collide(greenBox);
        box.collide(yellowBox);
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}
