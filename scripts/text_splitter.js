

window.onload = function(){

}


function splitFile(){

var newString = "";
var PADDING_CONSTANT = parseInt(document.getElementById("paddingsize").value)+1;
var padding = PADDING_CONSTANT;
var paragraph = document.getElementById("inputText").value;

var paraLength = paragraph.length;

var words = paragraph.split(" ");

var wordsQueue = getQueue(words,PADDING_CONSTANT);

console.log(wordsQueue[wordsQueue.length -2]);
while(wordsQueue.length > 0){

if(wordsQueue[wordsQueue.length -1].length < padding  ){

var poppedWord = wordsQueue.pop();



newString = newString + poppedWord+' ';


padding = padding - (poppedWord.length+1);


}else
{
padding = PADDING_CONSTANT;
newString = newString.substring(0,newString.length-1) +'\n'
}
}


document.getElementById("outputText").value = newString.trim();


}




function getQueue(stackWords, padding){


var queue = [];

while(stackWords.length > 0){
var wordValidation = stackWords.pop();
if(wordValidation.length > padding){
document.getElementById("outputText").value = 'a word must not be more longer than the padding';
  throw new Error('a word must not be more longer than the padding');

}

queue.push(wordValidation);

}

return queue;
}