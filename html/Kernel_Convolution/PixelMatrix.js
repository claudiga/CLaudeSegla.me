var data2;

var Getcanvas = function (canvasel, width, height) {
    
     this.el = canvasel;
     this.width = width;
     this.height = height;
     this.context = canvasel.getContext('2d');
}



img = new Image();
img.src= "stat.png";
canvas = new Getcanvas(document.getElementById('canvas1'),400,400);
img.onload = function () {
   
    document.body.appendChild(img);

    img.width = canvas.width;
    img.height = canvas.height;
    
    canvas.context.drawImage(this,0,0,canvas.width,canvas.height);
    
    var pixels = canvas.context.getImageData(0,0,canvas.width,canvas.height);
    
    console.log(pixels);
    
    var data = pixels.data;
       
    data2 =data;
              

    var pixel = 0;
  var matrix = [];
for(var i=0; i<canvas.width * 2; i++) {
    matrix[i] = [];
    for(var j=0; j<canvas.height * 2; j++) {
        matrix[i][j] = data[pixel];
        
        pixel++;
    }
    
}
var pix = 0;
    var a = 0;
    var ar = [];
    var myarr = new Array();
    
    for(var k = 0; k < 400 * 2; k++){
        
        
        for(var x = 0; x < 400 * 2; x++){
       
        
        
       ar[pix] = matrix[a][x];
            pix++;
            
    }

        a++;
    }
   

   
 
    
        

    var rect = {x:0,y:0,w:400,h:800};


    
    
    
    crop = matrix.slice(rect.x, rect.x+rect.w);
for(var i = 0; i<crop.length; i++){
    crop[i] = crop[i].slice(rect.y, rect.y+rect.h);
}
    
 // window.alert(crop)



       
      jQuery.getScript("math.js", function(data, status, jqxhr) {
          
    
         
          var h = math.matrix(crop);
         
          

          
          var topa = h.valueOf();
       //   topa = h.subset(math.index(math.range(0,800),math.range(0,800))).valueOf();
          
          var c = document.getElementById("canvas2");
var ctx = c.getContext("2d");
var imgData2 = ctx.createImageData(200, 400 );
        window.alert(topa)
          
          
          

          
           var ar3 = new Array();
        
        for(var b = 0; b < topa.length; b++){
            
            for(var c = 0; c < topa[b].length  ; c++ ){
                
                ar3.push(topa[b][c]) 
                
            }
            
        }
           //window.alert(ar3.length);
          
          
        console.log(imgData2.data.length);

          
          
          var i;
    var co = 0;
for (i = 0; i < imgData2.data.length; i++) {
   // if(i > imgData2.data.length /2){
  //      imgData2.data[i] = 133;
 //   }
 //  else{
   imgData2.data[i] = ar3[i];
}
// }
          imgData2.data = data2;
           
           
        
              
              
              
              
              
              
     
              
              
              
          ctx.putImageData(imgData2, 0, 0);

      console.log(imgData2.data);
      });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}
