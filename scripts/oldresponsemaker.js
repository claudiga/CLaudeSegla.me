window.onload = function(){



}


function generate(){

jsons = document.getElementById("inputText").value;

className = document.getElementById("className").value;

var test = new responseMaker(JSON.parse(jsons),className);

test.writeclassDeclaration()
test.getFields();
test.writeFields();
test.writeSetterAndGetters();
test.closeClass();
test.writeObjects();


}

  function responseMaker(jsonString,className){

this.className= className;
this.jsonObject = jsonString;
this.properties = [];
this.dependencies = [];
}


responseMaker.prototype.toString= function(){

console.log(this.jsonObject);
}

responseMaker.prototype.writeclassDeclaration= function(){

this.appendLine("public class "+this.className+"{");
}

responseMaker.prototype.closeClass= function(){

this.appendLine("}");
}

responseMaker.prototype.getFields = function(){


for (var property in this.jsonObject) {
    if (this.jsonObject.hasOwnProperty(property)) {
      
	   var isArray = false;
	   
	   
	   
	  if(JSON.stringify(eval('this.jsonObject.'+property)).charAt(0) == '[' ){
	  isArray= true;
	  }
	   var propertyObject = [property, isArray];
	
	   this.properties.push(propertyObject);
    }
}



}

responseMaker.prototype.writeFields= function(){


var size = this.properties.length;

for(var p = 0; p < size; p++){

var type = eval( 'typeof this.jsonObject.'+ this.properties[p][0]);

if(type == "object" ){

var depend = JSON.stringify(eval('this.jsonObject.'+this.properties[p][0]));

if(depend.charAt(0) == '['){
depend = depend.substring(1,depend.length-1);

var dependJson = JSON.parse(depend);
var type = typeof dependJson;
if( type != "object" ){

switch(type){
case 'number': type = 'Integer'; break;
case 'string': type = 'String'; break;

}

this.appendLine("List<"+ type+"> "+this.properties[p][0]+";");

}else{

var objectName = this.properties[p][0];
var firstChar = objectName.charAt(0).toUpperCase();
objectName = firstChar +objectName.substring(1,objectName.length);
this.appendLine("List<"+objectName+"> "+this.properties[p][0]+";");
dependObject = [depend, this.properties[p][0]]
this.dependencies.push(dependObject);

}
}else{
this.appendLine(this.properties[p][0]+ " "+this.properties[p][0]+";");
dependObject = [depend, this.properties[p][0]]
this.dependencies.push(dependObject);
}





}else{
switch(type){
case 'number': type = 'int'; break;
case 'string': type = 'String'; break;

}
this.appendLine(type+ " "+this.properties[p][0]+";")
}


}

}


responseMaker.prototype.writeSetterAndGetters= function(){
var size = this.properties.length;

for(var p = 0; p < size; p++){
var type = eval( 'typeof this.jsonObject.'+ this.properties[p][0]);
	
var objectType = eval('this.jsonObject.'+ this.properties[p][0]);

if(type != 'object'){

if(eval('this.jsonObject.'+ this.properties[p]) == true){
switch(type){
case 'number': type = 'Integer'; break;
case 'string': type = 'String'; break;

}

this.appendLine("public List<"+type+"> get"+this.properties[p][0]+"(List<"+type+">" + this.properties[p][0]+"){ this."+this.properties[p][0]+ " = " + this.properties[p][0]+"}");
}else{
switch(type){
case 'number': type = 'int'; break;
case 'string': type = 'String'; break;

}
this.appendLine("public "+type+" get"+this.properties[p][0]+"("+type+" " + this.properties[p][0]+"){ this."+this.properties[p][0]+ " = " + this.properties[p][0]+"}");

}
}

else{


if(eval('this.jsonObject.'+ this.properties[p]) == true){
var arrayType = typeof eval('this.jsonObject.'+ this.properties[p][0])[0];
if(arrayType != 'object'){

switch(arrayType){
case 'number': arrayType = 'int'; break;
case 'string': arrayType = 'String'; break;

}
this.appendLine("public List<"+arrayType+"> gett"+this.properties[p][0]+"(List<"+arrayType+">" + this.properties[p][0]+"){ this."+this.properties[p][0]+ " = " + this.properties[p][0]+"}");

}else{
var objectName = this.properties[p][0];
var firstChar = objectName.charAt(0).toUpperCase();
objectName = firstChar +objectName.substring(1,objectName.length);

this.appendLine("public List<"+objectName+"> get"+objectName+"(){return this."+this.properties[p][0]+"}");
this.appendLine("public void set"+objectName+"(List<"+objectName+"> " + this.properties[p][0]+"){\n this."+this.properties[p][0]+ " = " + this.properties[p][0]+"\n}");

}



console.log(type + "the type" )

}else{
var objectName = this.properties[p][0];
var firstChar = objectName.charAt(0).toUpperCase();
objectName = firstChar +objectName.substring(1,objectName.length);
this.appendLine("public "+objectName+"> get"+objectName+"(){return this."+this.properties[p][0]+"}");
this.appendLine("public "+objectName+" set"+objectName+"("+objectName+" " + this.properties[p][0]+"){ this."+this.properties[p][0]+ " = " + this.properties[p][0]+"}");

}
}
}

}



responseMaker.prototype.writeObjects= function(){
if(this.dependencies.length <= 0){
return;
}
var popped= this.dependencies.pop();
console.log(popped);
var dep = new responseMaker(JSON.parse(popped[0]),popped[1]);

dep.writeclassDeclaration();
dep.getFields();
dep.writeFields();
dep.writeSetterAndGetters();
dep.closeClass();
dep.writeObjects();
this.writeObjects();

}

responseMaker.prototype.appendLine= function(lineOfCode){

existingCode = document.getElementById("outputText").value;
document.getElementById("outputText").value = existingCode + "\n\n"+  lineOfCode

}