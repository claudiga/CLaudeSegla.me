window.onload = function(){
    
    setInterval(function(){arrowBounce('leftarrow')}, 1000)
    
       setInterval(function(){arrowBounce('rightarrow')}, 1000)

};


function arrowBounce(id){
    var initialX =  document.getElementById(id).offsetTop;
    
    var bottom = initialX + 10;
    
   var x = document.getElementById(id).style.top = bottom.toString() + 'px' ; 
    

    
    setTimeout(function (){
 document.getElementById(id).style.top = initialX.toString() + 'px' ;

}, 500);
    
    
    
    
}

