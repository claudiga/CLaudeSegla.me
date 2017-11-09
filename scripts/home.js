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

//split 100% into 3

var button = document.getElementsByTagName("BODY")[0];

var currentScroll = document.documentElement.scrollTop;
var entireHeight = document.documentElement.scrollHeight;

var firstSection = entireHeight / 3;
var secondSection = entireHeight / 2;
var lastSection = entireHeight ;

if(currentScroll < firstSection ){

console.log("scroll to second")
window.scroll(0,firstSection)
console.log(firstSection)
console.log(currentScroll)


}else if(currentScroll >=firstSection && currentScroll < lastSection ){

console.log("scroll to last")
window.scroll(0,lastSection)
console.log()


}else {
alert("your already at the bottom sir are you crazy?!")
}



}

function scrollUp(){

var button = document.getElementsByTagName("BODY")[0];

var currentScroll = document.documentElement.scrollTop;
var entireHeight = document.documentElement.scrollHeight;

var firstSection = entireHeight / 3;
var secondSection = entireHeight / 2;
var lastSection = entireHeight;


if(currentScroll >=firstSection){
console.log("scroll to second section")
if(currentScroll ==firstSection){
window.scroll(0,0);
return;
}

window.scroll(0,firstSection)



}else if(currentScroll > 0){
console.log("scroll to first section")
window.scroll(0,0)
}else{
alert("you are already at the top")
}








}



