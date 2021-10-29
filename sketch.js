
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  polygon, sling1, groundObject;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(1000,300,50,50);
    box2 = new Box(1050,300,50,50);
    box3 = new Box(1100,300,50,50);
    box4 = new Box(950,300,50,50);
    box5 = new Box(900,300,50,50);
    box6 = new Box(925,250,50,50);
    box7 = new Box(975,250,50,50);
    box8 = new Box(1025,250,50,50);
    box9 = new Box(1075,250,50,50);
    box10 = new Box(950,200,50,50);
    box11 = new Box(1000,200,50,50);
    box12 = new Box(1050,200,50,50);
    groundObject = new ground(1000,400,500,20);

    polygon = new Polygon(200,200);

    
    //slingshot = new SlingShot(polygon.body,{x:200, y:300});

}

function draw(){
    background(200);
    Engine.update(engine);
    strokeWeight(4);
    
    polygon.display();

    //slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    groundObject.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
