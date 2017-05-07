var trunks =0;
var size = 50;
function setup(){

createCanvas(700, 660);
  background(155);
    stroke(0);
  


}

function draw(){
  //top 
   translate(300,0);
    line(0,0,0,50);
   translate(0,50);
    
//left
    push();
    rotate(PI/3)
    line(0,0,0,150);
    translate(0,150)
   ellipse(0,0,20,20);
        line(0,0,0,100);
translate(0,100)
ellipse(0,0,20,20);
     branches();
    
    pop();
    
    //middle
    push();
    rotate(PI-PI);
    line(0,0,0,90);
     translate(0,90)
 //  ellipse(0,0,20,20);
        line(0,0,0,50);
translate(0,50)
ellipse(0,0,20,20);
     rotate(PI/3)
    branches();
    pop();
    
    //right
    push();
    rotate(-PI/3)
    line(0,0,0,150);
     translate(0,150)
   ellipse(0,0,20,20);
        line(0,0,0,100);
        translate(0,100)
ellipse(0,0,20,20);
     rotate(800)
    branches();
    pop();
    
    

    
 
    

}

function branches(){
   var i =0;
    while (i < 3){
    line(0,0,0,50)
    rotate(200);
        
     
        
        i+=1;
    }
     
  
    translate(0,-50)
    ellipse(0,0,5,5);
    rotate(1.2)
    line(0,0,0,20);
    rotate(2)
    line(0,0,0,20)

    translate(45,-25);
    ellipse(0,0,5,5);
   
    rotate(PI)
    rotate(1.2)
    line(0,0,0,20);
    rotate(2)
    line(0,0,0,20)
    
     translate(-8,-53);
    ellipse(0,0,5,5);
    
    rotate(PI)
    rotate(1.2)
    line(0,0,0,20);
    rotate(2)
    line(0,0,0,20)
    
    
    
    
    
}