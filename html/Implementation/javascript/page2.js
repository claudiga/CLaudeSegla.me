bart = new Image();

bart.src = 'graphics/spatv2.jpg'



$(window).ready(function() {
	
})
var getxp = function(context){
var imd = context.getImageData(0,80,700,1);
var length = imd.data.length;
   
    var newimArray =   []
    for(var i = 0;i < length; i+=4){
          
    var red = imd.data[i];
        var green = imd.data[i+1];
          var blue = imd.data[i+2];
        
        var grayscale = (red + green + blue) / 3
       
        
        newimArray[i] = grayscale;
        newimArray[i+1] =grayscale;
        newimArray[i+2] = grayscale;
        newimArray[i+3] = grayscale; 
        
        
        
       
      }
  
   newimArray.unshift('x');
    
    
    return newimArray;
}







    



    
    
    var drawbars = function(increase){
    
    var canvas = document.getElementById('spat');
var context = canvas.getContext('2d');
    
    

    size =  700/increase; 

      
        
        context.clearRect(0,0,700,300)
        
    
        for(x = 0; x <= 700; x+=size)
{   

  context.drawImage(bart,x,0,size,300);    
    
}
        
      
      //  context.drawImage(bart,264,0);
        //context.drawImage(bart,528,0);

        

    
}

    
    
    window.onload = function(){
    
            
    var im = document.getElementById('spatial');
var canvas = document.getElementById('spat');
var context = canvas.getContext('2d');
//context.drawImage(im,0,0);
    //var imdata = context.getImageData(0,0,700,300);


var xaxis = getxp(context);

          var chart = c3.generate({
    data: {
        
        columns: [
            xaxis
        
        ]
    },
    point: {show: false}
   
});
    
    
$( "#slider" ).slider({
      min: 1,
      max: 50,
      step: 1,
      change: function( event, ui ) {
        var valuee = $( "#slider" ).slider( "value" );
          
          
      //    var newdata = increase(imdata,valuee)
          drawbars(valuee);
//context.putImageData(newdata,0,0);
          
var xaxis = getxp(context);

      chart.load({
  columns: [
    xaxis

  ]
});    
          
      }
});




    $( "#prevBT" ).click(function() {
     window.location.href = "page1.html"; 
    
});
    $( "#nextBT" ).click(function() {
     window.location.href = "page3.html"; 
    
});
     drawbars(1);
    var xaxiss = getxp(context);
 chart.load({
  columns: [
    xaxiss

  ]
});

    document.getElementById('loader').innerHTML= '';
}
