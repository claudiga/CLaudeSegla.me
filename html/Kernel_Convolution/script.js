jQuery.getScript("kConvolution.js", function(data, status, jqxhr) {


mtrx = {"tpl":0,"tpm":0, "tpr":0,"mdl":1,"mdm":0,"mdr":-1,"btl":0,"btm":0,btr:0}
    
imageurl = "box.jpg";    
src = 'Convolution';
dest = 'Coutput'
convolut(mtrx,imageurl,src,dest);

});






    //mask used[ 1  0  -1 ]

            // [ 0   0  0 ]

            // [-1  0   1 ]   
