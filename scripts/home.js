var downPosition = 0;
var upPosition = document.documentElement.scrollHeight;
var intervalDown;
var intervalUp;
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

function scrollDown(){
	
       intervalDown = setInterval(function(){goDown()}, 5)


}

function goDown(){

var entireHeight = document.documentElement.scrollHeight;
var currentScroll = document.documentElement.scrollTop;
var windowHeight = window.innerHeight;


downPosition = downPosition+10;
window.scroll(0,downPosition);

if(currentScroll >= (entireHeight - (windowHeight)) ){
	downPosition = 0;
    clearInterval(intervalDown);

}

}

function scrollUp(){

       intervalUp = setInterval(function(){goUp()}, 5)


}

function goUp(){

var entireHeight = document.documentElement.scrollHeight;
var currentScroll = document.documentElement.scrollTop;
var windowHeight = window.innerHeight;


upPosition = upPosition-10;
window.scroll(0,upPosition);
console.log(intervalUp)

if(currentScroll <= 0){

upPosition = entireHeight;
    clearInterval(intervalUp);

	}


}





