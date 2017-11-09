var ImageData = function(canvasN,x,y,w,h){

  var  canvas =  document.getElementById(canvasN);


 var ctx = canvas.getContext('2d');

var  imdat = ctx.getImageData(x,y,w,h);

   imdat = imdat.data;



  var matrix = [];
   var pixel = 0;


for(var i=0; i<=canvas.width ; i++) {
    matrix[i] = [];
    for(var j=0; j<=canvas.height; j++) {
        matrix[i][j] = imdat[pixel];
        pixel++;
    }
}

 
 return matrix;
}




img = new Image();



var Ccanvas = function (canvasel) {
    
     this.el = document.getElementById(canvasel);
     this.width = this.el.width;
     this.height = this.el.height;
     this.context = this.el.getContext('2d');
}


var convolut = function(matrix,imgurl,src,dest){
      canvass = new Ccanvas(src);

    
    img.src = imgurl;
    
  img.onload = function(){  canvass.context.drawImage(this,0,0,canvass.width,canvass.height);
    
    editedCanvas = new Ccanvas(dest);
                          
      var imdataa = ImageData(src,0,0,canvass.height,canvass.width);  
                          
       
  
  
     editim = editedCanvas.context.getImageData(0,0,400,400);
   console.log()            
    epixels = editim.data;
                          
  
                          
                          

     
     var i =0;
for( x = 0; x < canvass.width ; x+=1){
    
 for(y = 0; y < canvass.height; y+=1){
   

        var can = canvass.context.getImageData(y-1,x-4,3,3).data;

   
     //top
        topLeftR = can[0]
        topLeftG = can[1];
        topLeftB = can[2];
        
        topMidR = can[4];
        topMidG = can[5];
        topMidB = can[6];
     
    topRightR = can[8]; 
     topRightG = can[9]; 
     topRightB = can[10];
     
     
     //mid
     
     midLeftR = can[12];
     midLeftG = can[13];
     midLeftB = can[14];
     
     middleR = can[16];
     middleG = can[17];
     middleB = can[18];
     
     midRightR = can[20];
     midRightG = can[21];
     midRightB = can[22];
     
     
     
     //bottom
     
     botLeftR = can[24];
     botLeftG = can[24];
     botLeftB = can[25];
     
     botMidR = can[28];
     botMidG = can[29];
     botMidB = can[30];
     
     botRightR = can[32];
     botRightG = can[33];
     botRightB = can[34];
     
     
     
     var newRed = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr) + (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr) + (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);


var newGreen = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr) + (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr) + (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);

var newBlue = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr) + (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr) + (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);
   
     
    epixels[i] = newRed;
      epixels[i+1] =  newGreen
      epixels[i+2] =  newBlue;
      epixels[i+3] = can[19];
     i+=4;
 
 }
    
    
}  
                          
                          
                          
        editim.data = epixels;
editedCanvas.context.putImageData(editim,0,0)
        // console.log(epixels[5])    
}
    
}