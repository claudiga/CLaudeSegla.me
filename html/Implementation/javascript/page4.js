imageurl = "graphics/bart.jpg";    
mtrx = {"tpl":0,"tpm":-1, "tpr":0,"mdl":-1,"mdm":5,"mdr":-1,"btl":0,"btm":-1,btr:0}                           
src = 'Convolution';
dest = 'Coutput'
convolut(mtrx,imageurl,src,dest);

  window.onload = function(){                         
                           
canvas = document.getElementById('Coutput');
ctx = canvas.getContext('2d');

ctx.fillRect(0,0,300,14);
ctx.fillRect(286,0,14,300);      
ctx.fillRect(0,0,14,300)      
 ctx.fillRect(0,286,300,14)     
                         
    cropped = document.getElementById('cropped');
crctx = cropped.getContext('2d');
cdata = ctx.getImageData(14,14,296,296);


crctx.putImageData(cdata,0,0)
  
  
//ctx.fillRect(0,0,300,300);
  
  $( "#crop" ).click( function( event ) {
            
              document.getElementById('cropped').style.display = 'initial'
              document.getElementById('crop').style.display = 'none'
              document.getElementById('textarea').innerHTML = 'Now that we cropped it you can see theres no blank edges but we do lose a small amount of pixels, the bigger the picture the less noticable it is'
               
          });

  $( "#prevBT" ).click( function( event ) {
    

     
     window.location.href = "page3.html"; 
      
  });
      $( "#nextBT" ).click( function( event ) {
    

     
     window.location.href = "page5.html"; 
      
  });
  }