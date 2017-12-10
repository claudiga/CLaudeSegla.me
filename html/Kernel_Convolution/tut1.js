var img2 = new Image();
img2.src = 'psquare.png';

img = new Image();
img.src = 'bart.jpg';
img.style.display = 'none';


document.body.appendChild(img);

var getpos = function(canvas){

    canvas.addEventListener('mousemove', function(e) {

    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;


return [x,y];



});

    var imdat,ctx;

}


var canvas ;
img.onload = function(){
canvas =  document.getElementById('canvas1');
 ctx = canvas.getContext('2d');
    canvas.height =img.height;
    canvas.width =img.width;
ctx.drawImage(img,0,0);

drawsquare(canvas);

}


var getImageData = function(x,y,w,h){

  var  canvas =  document.getElementById('canvas1');


 var ctx = canvas.getContext('2d');

var  imdat = ctx.getImageData(x,y,w,h);

    imdat = imdat.data;



    var matrix = [];
    var pixel = 0;


/**for(var i=0; i<img.width *2; i++) {
    matrix[i] = [];
    for(var j=0; j<img.height*2; j++) {
        matrix[i][j] = imdat[pixel];
        pixel++;
    }
}

 */
 return imdat;
}


var drawsquare = function(canvas){
    var drawn = false;

    var posx, posy;




  //  window.alert(matrix)
     canvas.addEventListener('mousemove', function(e) {

    var rect = canvas.getBoundingClientRect();
    posx = e.clientX - rect.left - 150;
    posy = e.clientY - rect.top -100;  




  console.log('posx' + posx + ' posy' + posy);



// 199 - 8

         var posxx = posx/16



         if(!drawn ){



         ctx.drawImage(img2,Math.floor(posx/16) * 16  ,Math.floor(posy/16) * 16);

             drawn = true;
         }else{


        ctx.drawImage(img,0,0);

             xax = Math.floor(posx/16) * 16;
             yax = Math.floor(posy/16) * 16;



        var matrixx = getImageData(xax,yax,3,1);

             console.log(yax );
            red = matrixx[0];
             green = matrixx[1];

            blue = matrixx[2];




       //  ctx.fillStyle = 'rgb('+ red.toString()+ ','+green.toString()+',' + blue.toString() + ')';
                //  ctx.fillRect(xax,yax,16,16);

             ctx.drawImage(img2,xax,yax);
    console.log(red + ' ' + green + ' ' + blue);


          document.getElementById('rgb').style.backgroundColor = 'rgb('+ red +',' + green +','+ blue;

         }




         });




}


function setup(){






}

function draw(){





}
