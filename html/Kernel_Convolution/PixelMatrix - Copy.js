

    var crop = function(canvas, offsetX, offsetY, width, height) {
  // create an in-memory canvas
  var buffer = document.createElement('canvas');
  var b_ctx = buffer.getContext('2d');
  // set its width/height to the required ones
  buffer.width = width;
  buffer.height = height;
  // draw the main canvas on our buffer one
  // drawImage(source, source_X, source_Y, source_Width, source_Height, 
  //  dest_X, dest_Y, dest_Width, dest_Height)
  b_ctx.drawImage(canvas, offsetX, offsetY, width, height,
                  0, 0, buffer.width, buffer.height);
  // now call the callback with the dataURL of our buffer canvas
  
        
return buffer;

    };


    var uncropped = document.getElementById('canvas1');
    var uctx = uncropped.getContext('2d');

    var img1 = new Image();
    img1.src = 'stat.png';
img1.style.display = 'None';
        img1.onload = function(){
            
            
uctx.drawImage(img1,0,0)

var buffer2 = crop(uncropped,0,0,200,700);
            
            
                
document.body.appendChild(buffer2)   

        }
    

        
        
        
        
        
        
        
        
        
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
    
  
    
    canvas.el.addEventListener('click', function(e) {  // use event argument

    var rect = canvas.el.getBoundingClientRect();  // get element's abs. position
    var x = e.clientX - rect.left;              // get mouse x and adjust for el.
    var y = e.clientY - rect.top;               // get mouse y and adjust for el.

    alert('Mouse position: ' + x + ',' + y);
    //...
    });
                               
}