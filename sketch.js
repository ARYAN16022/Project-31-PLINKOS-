const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
  
var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function preload() {}

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
	ground1 = new Ground(400, 780, 800, 20);
	border1 = new Border(240, 795, 480, 10);
	border2 = new Border(240, 5, 480, 10);
	border3 = new Border(475, 400, 10, 800);
	border4 = new Border(5, 400, 10, 800);

for (var i = 0; i < width; i=i+80) {
	divisions.push(new Division(i, height = 639, 10, divisionsHeight));
	
}

	for (var j = 75; j < width - 10; j = j + 50){
		plinkos.push(new Plinko(j, 175));
	}

		for (var j = 20; j < width ; j = j + 50) {
      plinkos.push(new Plinko(j, 75));
		}
	
		for (var j = 10; j < width; j = j + 50) {
      plinkos.push(new Plinko(j, 275));
    }
	
		for (var j = 25; j < width - 10; j = j + 50) {
      plinkos.push(new Plinko(j, 375));
    }

  Engine.run(engine);
}

function draw() {
  background("black");

	ground1.display();
	border1.display();
	border2.display();
	border3.display();
	border4.display();

	for (var index = 0; index < divisions.length; index++) {
	divisions[index].display();
		
	}

	if (frameCount % 60 === 0) {
		particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
	
	}
	
	for (var h = 0;  h < particles.length; h++) {
		particles[h].display();
	}
	
	for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  drawSprites();
}
