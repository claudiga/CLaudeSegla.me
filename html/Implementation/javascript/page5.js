
var normal = 1;
var matrix = {}
var imageurl = "graphics/cube.jpg"; 
var src = 'Convolution';
var dest = 'Coutput'

  var loadPic = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
 
      imageurl = dataURL;

           
    tpl = $( "#one" ).spinner( "value" );
     tpm = $( "#four" ).spinner( "value" );
     tpr = $( "#seven" ).spinner( "value" );
     mdl = $( "#two" ).spinner( "value" );
   mid =   $( "#five" ).spinner( "value" );
    mdr = $( "#eight" ).spinner( "value" );
     btl = $( "#three" ).spinner( "value" );
    btm = $( "#six" ).spinner( "value" );
     btr = $( "#nine" ).spinner( "value" );


     
      matrix = {"tpl":tpl,"tpm":tpm, "tpr":tpr,"mdl":mdl,"mdm":mid,"mdr":mdr,"btl":btl,"btm":btm,btr:btr} 
      normal =  document.getElementById("norm").value; 
        

        
        convolut(matrix,imageurl,src,dest,normal);
    };
    reader.readAsDataURL(input.files[0]);
  };



window.onload = function(){

    mtrx = {"tpl":0,"tpm":1, "tpr":0,"mdl":1,"mdm":0,"mdr":-1,"btl":0,"btm":-1,btr:0}                           



   document.getElementById('dynamicText').innerHTML = 'look at the kernel carefuly, by taking away the left pixel weighing from the right pixel we can get the vertical edges we can use the same technique to find the horizontal edges'
convolut(mtrx,imageurl,src,dest,normal);

   

 $( "#go" ).click( function( event ) {
     
    
    
    tpl = $( "#one" ).spinner( "value" );
     tpm = $( "#four" ).spinner( "value" );
     tpr = $( "#seven" ).spinner( "value" );
     mdl = $( "#two" ).spinner( "value" );
   mid =   $( "#five" ).spinner( "value" );
    mdr = $( "#eight" ).spinner( "value" );
     btl = $( "#three" ).spinner( "value" );
    btm = $( "#six" ).spinner( "value" );
     btr = $( "#nine" ).spinner( "value" );


     
      matrix = {"tpl":tpl,"tpm":tpm, "tpr":tpr,"mdl":mdl,"mdm":mid,"mdr":mdr,"btl":btl,"btm":btm,btr:btr} 
      normal =  document.getElementById("norm").value; 
      convolut(matrix,imageurl,src,dest,normal);

 });
    
    
    
    
    
    
$("#checknorm").click(function() {
var checkbox = document.getElementById('checknorm');
    if(checkbox.checked == true){
        document.getElementById('norm').style.display = 'initial';
        normal = $('#norm').val();
    }else{
        document.getElementById('norm').style.display = 'none';
        normal = 1;
    }


});
    
    
    
$( "#kernels" ).on( "selectmenuchange", function( event, ui ) {
    
    value = this.value;
    

    
    
    
    
    switch(value){
            
        case 'Vertical edges':
             matrix = {"tpl":0,"tpm":0,"tpr":0,"mdl":1,"mdm":0,"mdr":-1,"btl":0,"btm":0,btr:0} 
       
        normal =  document.getElementById("norm").value;
             
             
                convolut(matrix,imageurl,src,dest,normal);
            
            
              
            
                $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
                document.getElementById('dynamicText').innerHTML = 'look at the kernel carefuly, by taking away the left pixel weighing from the right pixel we can get the vertical edges we can use the same technique to find the horizontal edges'
            break;
            
        case 'Horizental edges':
            matrix = {"tpl":0,"tpm":1,"tpr":0,"mdl":0,"mdm":0,"mdr":0,"btl":0,"btm":-1,btr:0} 
            normal =  document.getElementById("norm").value;
      convolut(matrix,imageurl,src,dest,normal);
           $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
            
             document.getElementById('dynamicText').innerHTML = 'Using the approach we discussed in the vertical kernel section. to get the horizontal edges we can take away the bottom pixels from the top or vice versa.'
            break;
            case 'Horizental & Vertical':
            matrix = {"tpl":0,"tpm":1,"tpr":0,"mdl":1,"mdm":0,"mdr":-1,"btl":0,"btm":-1,btr:0} 
            normal =  document.getElementById("norm").value;
      convolut(matrix,imageurl,src,dest,normal);
            
            $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
            
                document.getElementById('dynamicText').innerHTML = 'by combining the effect of horizental and vertical kernels together we can get all sides of the image'
            
            break;
            case 'Blur':
            matrix = {"tpl":0,"tpm":1,"tpr":0,"mdl":0,"mdm":0,"mdr":0,"btl":0,"btm":-1,btr:0}
            normal =  document.getElementById("norm").value;
       convolut(matrix,imageurl,src,dest,normal);
            
             $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
            
            break;
                     case 'Sharpen':
            matrix = {"tpl":0,"tpm":-1, "tpr":0,"mdl":-1,"mdm":5,"mdr":-1,"btl":0,"btm":-1,btr:0}  
            normal =  document.getElementById("norm").value;
        convolut(matrix,imageurl,src,dest,normal);
                $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
            break;
            
                case 'Sobel':
            matrix = {"tpl":-1,"tpm":0, "tpr":1,"mdl":-2,"mdm":0,"mdr":2,"btl":-1,"btm":0,btr:1}  
            normal =  document.getElementById("norm").value;
        convolut(matrix,imageurl,src,dest,normal);
          $( "#one" ).spinner( "value", matrix.tpl );
                $( "#four" ).spinner( "value", matrix.tpm );
                $( "#seven" ).spinner( "value", matrix.tpr );
                $( "#two" ).spinner( "value", matrix.mdl );
                $( "#five" ).spinner( "value", matrix.mdm );    
               $( "#eight" ).spinner( "value", matrix.mdr );
                $( "#three" ).spinner( "value",matrix.btl );
                $( "#six" ).spinner( "value",matrix.btm );
                $( "#nine" ).spinner( "value",matrix.btr );
            
            
            document.getElementById('dynamicText').innerHTML = 'The sobel operator is a special type of edge detection kernel that performs well in detecting edges.'
            
            
            break;
      
    }
    
    
    
} );

$( "#prevBT" ).click(function() {
     window.location.href = "page4.html"; 
    
});

}