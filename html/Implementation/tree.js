var trunks =0;
var size = 50;
function setup(){

var canv = createCanvas(700, 360);
  background(155);
    stroke(0);
  

translate(350,0);
    line(0,0,0,5);
   
      translate(0,5);
 
    //left
    push();
  
    rotate(PI/3)
    line(0,0,0,250);
    translate(0,250)
branches(80);
   lastbranch(0,0,80)
    lastbranch(-70,35,80)
    lastbranch(-70,110,80)

    
    
    pop();
    
    //middle 
     push();
    rotate(PI-PI);
    line(0,0,0,60);
     translate(0,60)
    ellipse(0,0,20,20);
    rotate(1)
    branches(80);
    lastbranch(0,0,80)
    lastbranch(-70,35,80)
    lastbranch(-70,110,80)

    
    pop();
    //right
    push();
     rotate(-PI/3)
    line(0,0,0,250);
     translate(0,250)
    ellipse(0,0,20,20);
    rotate(2);
    branches(80);
    lastbranch(-70,35,80)
    lastbranch(0,0,80)
    lastbranch(-70,110,80)
    
pop();
    
   
}

function draw(){
 
}

function branches(x){

    
    i = 0;
    while(i < 3){

        ellipse(0,0,20,20);
        line(0,0,0,x);
        rotate(-1);
    
    i+=1;

    }
    
   
}


function lastbranch(y,offset,x){
    
    //rotate(5)
     push()
    rotate(1)
  
    translate(y,x-offset);
    
    
    ellipse(0,0,10,10);
        
    push();

    for(var i = 0; i < 3; i+=1){
        line(0,0,0,x/2);
    rotate(1)
        
    }
    
    
    
    
    pop();
    
    
    push();
    translate(0,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
    
    
    
     push();
    rotate(0.6)
    translate(-17,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
        
     push();
    
    rotate(2)
  translate(0,x/2)
    ellipse(0,0,5,5)
    line(0,0,0,20)
    rotate(5)
    line(0,0,0,20)
    pop();
    
    pop();
    
    
    
    
}

