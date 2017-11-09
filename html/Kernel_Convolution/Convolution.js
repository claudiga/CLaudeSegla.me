
var canvas = function (canvasel, width, height) {
    
     this.el = canvasel;
     this.width = width;
     this.height = height;
     this.context = canvasel.getContext('2d');
}

var convolut = function(matrix,imgurl){




  canvas = new canvas(document.getElementById('canvas1'),400,400);

var img = new Image();
    img.crossOrigin = "Anonymous";

img.onload = function () {
   

    img.width = canvas.width;
    img.height = canvas.height;
    
    document.body.appendChild(img);
    canvas.context.drawImage(this,0,0,canvas.width,canvas.height);
    
    var pixels = canvas.context.getImageData(0,0,canvas.width,canvas.height);
    
    console.log(pixels);
    
    var data = pixels.data;
    
 
    
    //width is 1600 px 
    //height is 1280 px
    

    
  //loop throught all n pixels; 
    

    
    for(var i = 0; i < data.length; i+=4){
        
        //for every pixel i..n
        
        
    
        
        
        var width = 1600 ;




    //all top pixels RGB 

    var reds = i, greens =i+1 ,blues = i+2;
     //   console.log(i)

    // top left 

    topLeftR = data[reds-width+4];
    topLeftG = data[greens - width+4];
    topLeftB = data[blues - width+4];


    //top middle

    topMidR = data[reds - width];
    topMidG = data[greens - width];
    topMidB = data[blues - width];

    // top right

    topRightR = data[reds - width-4];
    topRightG = data[greens -  width-4];
    topRightB = data[blues -  width-4];

    //middle left 

    midLeftR = data[reds - 4];
    midLeftG = data[greens - 4];
    midLeftB = data[blues - 4];

    //middle 

    middleR = data[reds];
    middleG = data[greens];
    middleB = data[blues];

    //middle right;


     midRightR = data[reds + 4];
    midRightG = data[greens + 4];
    midRightB = data[blues + 4];


    //bottom left

    botLeftR = data[reds + width+4];
    botLeftG = data[greens + width+4];
    botLeftB = data[blues + width+4];


    //bottom middle 

    botMidR = data[reds + width];
    botMidG = data[greens + width];
    botMidB = data[blues + width];


    // bottom right

    botRightR = data[reds + width -4];
    botRightG = data[greens + width - 4];
    botRightB = data[blues + width - 4];

    //mask used[ 1  0  -1 ]

            // [ 0   0  0 ]

            // [-1  0   1 ]   

            
var newRed = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr) + (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr) + (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);


var newGreen = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr) + (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr) + (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);

var newBlue = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr) + (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr) + (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);


//newRed =newRed /9;
      //  newGreen= newGreen /9;
      //  newBlue =  newBlue/9;
 
        
            
    
    grayscale = (newRed + newGreen + newBlue) / 3; 
        
        
//newRed = grayscale;    
//newGreen = grayscale;        newBlue = grayscale;
        
        
        
  
        
  pixels.data[i]  = newRed; pixels.data[i+1] =newGreen;
   pixels.data[i+2] = newBlue;

    
        
    }
    
    canvas.context.putImageData(pixels,0,0);
};



img.src = imgurl;
    
}