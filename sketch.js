
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
stand1=new Ground(420,300,250,10)
stand2=new Ground(800,200,250,10)
block1=new Block(350,275,30,40)
block2=new Block(380,275,30,40)
block3=new Block(410,275,30,40)
block4=new Block(440,275,30,40)
block5=new Block(470,275,30,40)
block6=new Block(380,235,30,40)
block7=new Block(410,235,30,40)
block8=new Block(440,235,30,40)
block9=new Block(410,195,30,40)
block10=new Block(725,175,30,40)
block11=new Block(755,175,30,40)
block12=new Block(785,175,30,40)
block13=new Block(815,175,30,40)
block14=new Block(845,175,30,40)
block15=new Block(755,135,30,40)
block16=new Block(785,135,30,40)
block17=new Block(815,135,30,40)
block18=new Block(785,95,30,40)

}


function draw(){
background("black")
Engine.update(engine);  
ground.display()
stand1.display()  
stand2.display()
fill ("red")
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
fill("blue")
block6.display()
block7.display()
block8.display()
fill("yellow")
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
fill("blue")
block15.display()
block16.display()
block17.display()
fill("red")
block18.display()
}









