

    var crop = function(canvas, offsetX, offsetY, width, height) {
 
  var buffer = document.createElement('canvas');
  var b_ctx = buffer.getContext('2d');
  buffer.width = width;
  buffer.height = height;
  b_ctx.drawImage(canvas, offsetX, offsetY, width, height,
                  0, 0, buffer.width, buffer.height);
  
        
return buffer;

    };

        
        
        
        
  var canvas = function (canvasel, width, height) {
    
     this.el = canvasel;
     this.width = width;
     this.height = height;
     this.context = canvasel.getContext('2d');
}



img = new Image();
img.src= "stat.png";
img.style.display = 'None';
canvas = new canvas(document.getElementById('canvas1'),400,400);
img.onload = function () {
   
    document.body.appendChild(img);

    img.width = canvas.width;
    img.height = canvas.height;
    
    canvas.context.drawImage(this,5,0,400,canvas.height);
    
    var pixels = canvas.context.getImageData(0,0,canvas.width,canvas.height);
    
    console.log(pixels);
    
    var data = pixels.data;
    
  
    
    getpos(canvas);
        
  
    
                               
}



var getpos = function(canvas){
    canvas.el.addEventListener('click', function(e) {  

    var rect = canvas.el.getBoundingClientRect(); 
    var x = e.clientX - rect.left;              
    var y = e.clientY - rect.top;               

    alert('Mouse position: ' + x + ',' + y);
    
});
    
}


    
        var draw = function(x,y,width,height){
            
            
            var buffer2 = crop(canvas.el,x,y,width,height);
            
            
                
document.body.appendChild(buffer2)  
        }















