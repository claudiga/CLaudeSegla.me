var kernel = new Image();
kernel.src = 'graphics/kernel.png';

//$( "#dialog" ).dialog(); 
var square = new Image();
square.src = 'graphics/psquare.png';


var bart = new Image();
bart.src = 'graphics/bartsml.jpg'
bart.height = 300;
bart.width = 300;


var currpage = 0;

outputIm = new Image();
outputIm.src = 'graphics/bartsml.jpg';
outputIm.height = 300;
outputIm.width = 300;

treePic = new Image();
treePic.src = 'graphics/tree.png';

memtree = document.createElement('canvas');
memtree.height = treePic.height;
memtree.width = treePic.width;
memtreectx = memtree.getContext('2d')
treePic.onload = function(){

memtreectx.drawImage(treePic,0,0)
}








mtrx = {"tpl":0,"tpm":1, "tpr":0,"mdl":1,"mdm":0,"mdr":-1,"btl":0,"btm":-1,btr:0}

  $( "#output2" ).dialog(); 


//cpdata = copytreeCtx.getImageData(0,0,tree.width,tree.height);

var ImageData = function(canvasN,x,y,w,h){

  var  canvas =  document.getElementById(canvasN);


 var ctx = canvas.getContext('2d');

var  imdat = ctx.getImageData(x,y,w,h);
width = 72;
height = 72;    
    imdat = imdat.data;
//console.log(imdat.width)

    var matrix = [];
    var pixel = 0;


for(var i=0; i<width; i++) {
    matrix[i] = [];
    for(var j=0; j<height; j++) {
        matrix[i][j] = imdat[pixel];
        pixel++;
    }
}

 return matrix;
}


    
   var  memc = document.createElement('canvas');
    var memctx = memc.getContext('2d');
    memc.height = 300;
    memc.width = 300;
    
    outputIm.onload = function(){
        
      
    memctx.drawImage(outputIm,0,0)
    }

    








var tutorial = function(para,x,y,index){

    
    //red
    
    //draw rgb for part 1
    
    
    textarea = document.getElementById('textarea');
    tree = document.getElementById('defaultCanvas0')
    treeCtx = tree.getContext('2d');
  // treeCtx.drawImage(treePic,0,0)
    treeCtx.save();
     treeCtx.beginPath()
    treeCtx.scale(1.5,1.5);
    treeCtx.beginPath();
    treeCtx.arc(135,130,20,0,2*Math.PI);
    treeCtx.fillStyle = '#FF0000';
    treeCtx.fill();
    treeCtx.stroke();
    
    //green
    treeCtx.beginPath();
    treeCtx.arc(350,65,20,0,2*Math.PI);
    treeCtx.fillStyle = '#41f453';
    treeCtx.fill();
    treeCtx.stroke();
    
    //blue
    treeCtx.beginPath();
    treeCtx.arc(350 + 215,130,20,0,2*Math.PI);
    treeCtx.fillStyle = '#4167f4';
    treeCtx.fill();
    treeCtx.stroke();
     treeCtx.closePath()
    //
  treeCtx.restore()
   
    //top
   
 
    textarea.innerHTML = para[0];
     
    
    var newRed = 0; var newGreen = 0; var newBlue = 0; var topR =0; var midR = 0; var botR = 0; var topG = 0; var midG = 0; var botG = 0; var topB = 0; midB = 0; botB = 0;  
    
    
    
   
//  window.alert(i)

  treeCtx.save()
      switch(index){
              
            case 1:
        stages.stage1(para,x,y)
         index+=1;
        break;
    case 2:
        stages.stage2(para,x,y)
         index+=1;
        break;
    case 3:
        stages.stage3(para,x,y)
         index+=1;
        break;
    case 4:
        stages.stage4(para,x,y)
         index+=1;
        break;
    case 5:
              
       return;
      }
      
  

}
//}



kernel.onload = function(){   
    
imageurl = "graphics/bart.jpg";    
src = 'Convolution';
dest = 'Coutput'
//convolut(mtrx,imageurl,src,dest);
     
     canvas = document.getElementById(src)
     output = document.getElementById(dest);
    
    
    
    drawsquare(canvas,output,tutorial);
    
     $("#outputLog").dialog({ autoOpen: false });
    $( "#kernelLog" ).dialog({
  close: function( event, ui ) {$( "#outputLog" ).dialog("open");
 

                                 
   $( "#outputLog" ).dialog({
position: { my: "left bottom", at: "left bottom", of: canvas }
});                                },
position: { my: "right top", at: "left top", of: canvas }
});    

    
     $("#output2").dialog({ autoOpen: false });
    
 }



var stages = {

stage1: function(para,x,y){




 document.getElementById('nextBT').innerHTML = 'next';
        
    treeCtx.save()
        
        treeCtx.fillStyle = 'white';
        treeCtx.beginPath()
          textarea.innerHTML = para[1];
          
        
           treeCtx.scale(1.5,1.5);    
treeCtx.save()

    treeCtx.rotate(-Math.PI / 6);
    treeCtx.fillText('Top',5,175);
  //  
    // top
  
    
    treeCtx.fillText('Top',230,230);
    //top
        treeCtx.fillText('Top',380,395);
  treeCtx.restore()
    
    //mid
   
    
    treeCtx.fillText('Mid',120,170);
    
    //mid
    
    treeCtx.fillText('Mid',340,100);
    
    //mid
    
    treeCtx.fillText('Mid',557,170);

    
    
    //bot
    treeCtx.save()
      treeCtx.rotate(Math.PI / 6);
    treeCtx.fillText('Bot',210,45);
    
    //bot
    
      treeCtx.fillText('Bot',360,-120);
    
    //bot
    
     treeCtx.fillText('Bot',578,-174);
    treeCtx.restore();
          treeCtx.restore()

treeCtx.closePath();
treeCtx.restore()

},
    stage2: function(para,x,y){
        
        
        treeCtx.beginPath()
        
         textarea.innerHTML = para[2]
               canvasCh = document.getElementById('Convolution')
         chCtx = canvasCh.getContext('2d')
         chData =chCtx.getImageData(x,y,36,36).data;
          console.log(chData.length)
           //top
          
          width = 144
          
        topLeftR = chData[width+8]
        topLeftG = chData[width+9]
        topLeftB = chData[width+10]
        
        treeCtx.fillStyle = '#231410';
       
        treeCtx.fillText(topLeftR + '*' + mtrx.tpl,32,305);
        treeCtx.fillText(topLeftG + '*' +mtrx.tpl,365,219);
        treeCtx.fillText(topLeftB + '*' +mtrx.tpl,700,320);
        
         
        
        topMidR = chData[width +52];
    topMidG = chData[width + 53];
    topMidB = chData[width + 54];
          
          treeCtx.fillText(topMidR + '*' + mtrx.tpm,70,357);
          treeCtx.fillText(topMidG + '*' +mtrx.tpm,403,265);
          treeCtx.fillText(topMidB + '*' +mtrx.tpm,740,369);
        
     topRightR = chData[width+108];
         topRightG= chData[width+109];
     topRightB = chData[width+110];
          treeCtx.save();
          treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(topRightR + '*' +mtrx.tpr,-40,345);
          treeCtx.fillText(topRightG + '*' +mtrx.tpr,290,425);
          treeCtx.fillText(topRightB + '*' +mtrx.tpr,530,680);
          treeCtx.restore();
          
          
           
          
          mid = width * 18
          
          midLeftR = chData[mid+8]
          midLeftG = chData[mid+9]
          midLeftB = chData[mid+10]
        treeCtx.save()
         
         treeCtx.translate(95,67)
          treeCtx.fillText(midLeftR + '*' +mtrx.mdl,32,305 )
          treeCtx.fillText(midLeftG + '*' +mtrx.mdl,367,213 )
          treeCtx.fillText(midLeftB + '*' +mtrx.mdl,700,320 )
          
          treeCtx.restore()
          
          middleR = chData[mid+52]
          middleG = chData[mid+53]
          middleB = chData[mid+54]
          
          treeCtx.save()
          treeCtx.translate(100,65)
            treeCtx.fillText(middleR + '*' +mtrx.mdm,70,357);
          treeCtx.fillText(middleG + '*' +mtrx.mdm,403,265);
          treeCtx.fillText(middleB + '*' +mtrx.mdm,740,360);
          
          treeCtx.restore()
          
          
          midRightR = chData[mid+108]
          midRightG = chData[mid+109]
          midRightB = chData[mid+110]
          treeCtx.save()
          treeCtx.translate(90,65)
           treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(midRightG + '*' +mtrx.mdr,-40,345);
          treeCtx.fillText(midRightG + '*' +mtrx.mdr,290,425);
          treeCtx.fillText(midRightB + '*' +mtrx.mdr,530,680);
          
          treeCtx.restore()
         
          
          bot = width * 34
          
          botLeftR = chData[bot+8]
          botLeftG = chData[bot+9]
          botLeftB = chData[bot+10]
          
            treeCtx.save()
         
         treeCtx.translate(195,15)
          treeCtx.fillText(botLeftR + '*' +mtrx.btl,32,305 )
          treeCtx.fillText(botLeftG + '*' +mtrx.btl,365,210 )
          treeCtx.fillText(botLeftB + '*' +mtrx.btl,700,305 )
          
          treeCtx.restore()
          
          
          botMidR = chData[bot+52]
          botMidG = chData[bot+53]
          botMidB = chData[bot+54]
          
            treeCtx.save()
         
         treeCtx.translate(240,55)
          treeCtx.fillText(botMidR + '*' +mtrx.btm,32,305 )
          treeCtx.fillText(botMidG + '*' +mtrx.btm,365,219 )
          treeCtx.fillText(botMidB + '*' +mtrx.btm,700,309 )
          
          treeCtx.restore()
          
          
          botRightR = chData[bot+108]
          botRightG = chData[bot + 109]
          botRightB = chData[bot+110]
          
            treeCtx.save()
          treeCtx.translate(190,15)
           treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(botRightR + '*' +mtrx.btr,-40,345);
          treeCtx.fillText(botRightG + '*' +mtrx.btr,290,425);
          treeCtx.fillText(botRightB + '*' +mtrx.btr,540,665);
          
          treeCtx.restore()
          
          
         
          
     ////
          
          
    matrix = mtrx;      
        
  newRed = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr) + (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr) + (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);


newGreen = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr) + (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr) + (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);

newBlue = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr) + (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr) + (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);

     
      
      
      
      
      
      
      
      
      
      topR = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr);
          
          midR = (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr);
          
          botR = (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);
      
          
          
          
      ////
      
          
           topG = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr);
          
          midG = (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr);
          
          botG = (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);
          
          
          //
           
          topB = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr);
          
          midB = (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr);
          
          botB = (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);
          
        treeCtx.closePath()
    },
    stage3: function(para,x,y){
      treeCtx.beginPath()
         textarea.innerHTML = para[3]
                    treeCtx.save()
          
            treeCtx.scale(1.5,1.5);
  
          
           treeCtx.beginPath();
treeCtx.moveTo(135,130);
treeCtx.lineTo(72,165);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
   //
        treeCtx.beginPath();
treeCtx.moveTo(340,72);
treeCtx.lineTo(290,104);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    //
    
        treeCtx.beginPath();
treeCtx.moveTo(557,137);
treeCtx.lineTo(510,171);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
/////
   // ..
    
    
 
    
        treeCtx.beginPath();
treeCtx.moveTo(134,140);
treeCtx.lineTo(130,210);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    

    ///
    
    
    treeCtx.beginPath();
treeCtx.moveTo(350,77);
treeCtx.lineTo(350,142);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    ////
    
    
    
       treeCtx.beginPath();
treeCtx.moveTo(568,139);
treeCtx.lineTo(571,210);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    ///
    
    //..///
    
        treeCtx.beginPath();
treeCtx.moveTo(137,131);
treeCtx.lineTo(195,172);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    
    ///
    
    
        treeCtx.beginPath();
treeCtx.moveTo(361,72);
treeCtx.lineTo(414,105);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    
    
    ///
    
    //
    
       treeCtx.beginPath();
treeCtx.moveTo(577,136);
treeCtx.lineTo(631,167);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
          
          
  // 
          treeCtx.save()
          treeCtx.fillStyle = "black";
          
        treeCtx.fillText( topR, 60,173);    

     treeCtx.fillText( midR, 120,215);
    
     treeCtx.fillText( botR, 188,182);
    
     treeCtx.fillText( topG, 275,110);  
    
     treeCtx.fillText( midG, 343,152);  
    
 treeCtx.fillText( botG, 407,115);  
    
    
     treeCtx.fillText( topB, 495,178);
    
     treeCtx.fillText( midB, 560,215);
    
     treeCtx.fillText( botB, 625,175);  
          
          treeCtx.restore()
          
          treeCtx.restore()
          
          
      treeCtx.closePath()
        
        
    },
    stage4: function(para,x,y){
        
          var cout = document.getElementById('Coutput');
        
 var ctxout = cout.getContext('2d');
    
        
        
       
        treeCtx.save()
       textarea.innerHTML = para[4]
         treeCtx.save()
          treeCtx.scale(1.5,1.5);
          treeCtx.save()
          treeCtx.fillStyle = "white";
              treeCtx.fillText(newRed, 125,135);  
     treeCtx.fillText( newGreen, 340,68);       
        treeCtx.fillText( newBlue, 553,135);  
          treeCtx.restore()
          ctxout.fillStyle = 'rgb('+ newRed + ','+ newGreen + ',' + newBlue + ')'
           ctxout.fillRect(x+12,y+12,12,12)
               memctx.fillStyle = 'rgb('+ newRed + ','+ newGreen + ',' + newBlue + ')'
           memctx.fillRect(x+12,y+12,12,12)
        
          
          $( "#output2" ).dialog({
              
      
              
position: { my: "left top", at: "left bottom", of: canvas }
}); 
    document.getElementById('arrow-r').style.display = 'initial';
          document.getElementById('nextBT').innerHTML = 'restart';
        
        
        
          treeCtx.restore()
          treeCtx.restore()
        
        
        
        
    },
 stage5: function(para,x,y){
     
  
if( document.getElementById('nextBT').innerHTML == 'restart'){
   document.getElementById('nextBT').innerHTML = 'resset'
    
}

 }
}


window.onload = function(){
document.getElementById('Coutput').getContext('2d').drawImage(memc,0,0);
}

var drawsquare = function(canvas,ouput,tutorial){
    var paragraphs = [];

   paragraphs.push('For images with colour we also have to work out the extra channels RGB. so we have to work out each channel and combine them after. Press next to continue');
    paragraphs.push('we will work out the channels separetly from top to middle to bottom.');
    
    paragraphs.push('now we can perform multiplication of each pixels so corresponding to to the kernel. so for example the top left pixel will be mutiplied by the value in the top left kernel matrix');
    
    paragraphs.push('once we worked out the channel we sum them to get the weighing for that colour channel')
    
    paragraphs.push('now we have 3 outputs for each channel we then supply this as the rgb for our output pixel')
        
    
    
    
//tutorial(paragraphs);
    var posx, posy;
    var clicked = false;
    console.log(clicked);
 var ctx = canvas.getContext('2d')
 var ctxOuput = output.getContext('2d');

 ctx.drawImage(bart,0,0);
//ctxOuput.drawImage(memc,0,0);

     canvas.addEventListener('mousemove', function(e) {
if(clicked == false){
    var rect = canvas.getBoundingClientRect();
    posx = (e.clientX - rect.left) / 0.8333 ;
    posy = (e.clientY - rect.top) /0.8333 ;         

             posx = Math.floor(posx/12) * 12 - 12;
             posy = Math.floor(posy/12) * 12 - 12;

 ctx.drawImage(bart,0,0);

         
         ctx.drawImage(kernel,posx,posy);
   ctxOuput.drawImage(memc,0,0);
    
         ctxOuput.strokeStyle="#FF0000";
         ctxOuput.strokeRect(posx+12,posy+12,12,12)
         
        
         }});
    
    canvas.addEventListener('mousedown', function(e) {
        ctx.strokeRect(posx+12,posy+12,12,12);
    
    length = 5;    
        

        var index = 0;
            var c = document.getElementById('defaultCanvas0')
        ct = c.getContext('2d')
        
           $( "#prevBT" ).click( function( event ) {
         
              index-=1;
            
              if(index == -1){
                  window.location.href = "page2.html"; 
              } tutorial(paragraphs,posx,posy,index);
               
            // window.alert(index)
               
          });
        
          $( "#nextBT" ).click( function( event ) {
         
              index+=1;
            if(index > 4){
             
    document.getElementById('textarea').innerHTML = 'deslected image to restart or press prev to go back';
                ct.clearRect(0,0,c.width,c.height)
      
        ct.drawImage(treePic, 0,0);
                index = 5;
                
            }else{
               tutorial(paragraphs,posx,posy,index);
            }
          });
        

        
// tutorial(paragraphs,posx,posy);
        
     //   clicked = false;
   
        
        if(clicked == true){
         
        document.getElementById('nextBT').innerHTML = 'next';
        
    index = 0;
       ct.clearRect(0,0,c.width,c.height)
      
        ct.drawImage(treePic, 0,0);
            
      
        
            document.getElementById('textarea').innerHTML ='';
        clicked = false}else{ 
            
            
           // ct.drawImage(treePic,0,0);
          //  window.alert(55)
            
        clicked = true}
        
    });
    
    
   
$( "#nextPage" ).click(function() {
     window.location.href = "page4.html"; 
    
});
      
}








var trunks =0;
var size = 50;
function setup(){

var canv = createCanvas(1100, 450);
    canv.parent('tabs');
  //background(155);
    stroke(0);
  scale(1.5,1.5);
  

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

        ellipse(0,0,30,30);
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
    
    
  
        
    push();

    for(var i = 0; i < 3; i+=1){
        line(0,0,0,x/2);
    rotate(1)
        
    }
    
    
    
    
    pop();
      ellipse(0,0,28,28);
    
    push();
    translate(0,x/3)
    ellipse(0,0,2,2)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
    
    
    
     push();
    rotate(0.6)
    translate(-17,x/2)
    ellipse(0,0,2,2)
    line(0,0,0,20)
    rotate(1)
    line(0,0,0,20)
    pop();
    
    
    
        
     push();
    
    rotate(2)
  translate(0,x/3)
    ellipse(0,0,2,2)
    line(0,0,0,20)
    rotate(5)
    line(0,0,0,20)
    pop();
    
    pop();
    
    
    
    
}

