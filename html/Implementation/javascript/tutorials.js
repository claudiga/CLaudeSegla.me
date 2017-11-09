var stages = {

stage1: function(para,x,y){




 document.getElementById('nextBT').innerHTML = 'next';
          textarea.innerHTML = para[1];
          
          treeCtx.save();
           treeCtx.scale(1.5,1.5);    
treeCtx.save()

    treeCtx.rotate(-Math.PI / 6);
    treeCtx.fillText('Top',5,175);
  //  
    // top
    
    
    treeCtx.fillText('Top',230,230);
    //top
        treeCtx.fillText('Top',380,395);

    
    //mid
    treeCtx.restore()
    
    treeCtx.fillText('Mid',120,170);
    
    //mid
    
    treeCtx.fillText('Mid',340,100);
    
    //mid
    
    treeCtx.fillText('Mid',557,170);

    
    
    //bot
    
      treeCtx.rotate(Math.PI / 6);
    treeCtx.fillText('Bot',210,45);
    
    //bot
    
      treeCtx.fillText('Bot',360,-120);
    
    //bot
    
     treeCtx.fillText('Bot',578,-174);
    treeCtx.restore();
          treeCtx.restore()




},
    stage2: function(para,x,y){
        
         textarea.innerHTML = para[2]
               canvasCh = document.getElementById('Convolution')
         chCtx = canvasCh.getContext('2d')
         chData =chCtx.getImageData(x,y,36,36).data;
          console.log(chData.length)
           //top
          
          width = 144
          
        topLeftR = chData[width+8]
        topLeftG = chData[width+9]
        topLeftB = chData[width+10]
        
        treeCtx.fillStyle = '#EF9A9A';
       
        treeCtx.fillText(topLeftR + '*' +'12',32,305);
        treeCtx.fillText(topLeftG + '*' +'12',365,219);
        treeCtx.fillText(topLeftB + '*' +'12',700,320);
        
         
        
        topMidR = chData[width +52];
    topMidG = chData[width + 53];
    topMidB = chData[width + 54];
          
          treeCtx.fillText(topMidR + '*' +'12',70,357);
          treeCtx.fillText(topMidG + '*' +'12',403,265);
          treeCtx.fillText(topMidB + '*' +'12',740,369);
        
     topRightR = chData[width+108];
         topRightG= chData[width+109];
     topRightB = chData[width+110];
          treeCtx.save();
          treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(topRightR + '*' +'12',-40,345);
          treeCtx.fillText(topRightG + '*' +'12',290,425);
          treeCtx.fillText(topRightB + '*' +'12',530,680);
          treeCtx.restore();
          
          
           
          
          mid = width * 18
          
          midLeftR = chData[mid+8]
          midLeftG = chData[mid+9]
          midLeftB = chData[mid+10]
        treeCtx.save()
         
         treeCtx.translate(95,67)
          treeCtx.fillText(midLeftR + '*' +'12',32,305 )
          treeCtx.fillText(midLeftG + '*' +'12',367,213 )
          treeCtx.fillText(midLeftB + '*' +'12',700,320 )
          
          treeCtx.restore()
          
          middleR = chData[mid+52]
          middleG = chData[mid+53]
          middleB = chData[mid+54]
          
          treeCtx.save()
          treeCtx.translate(100,65)
            treeCtx.fillText(middleR + '*' +'12',70,357);
          treeCtx.fillText(middleG + '*' +'12',403,265);
          treeCtx.fillText(middleB + '*' +'12',740,360);
          
          treeCtx.restore()
          
          
          midRightR = chData[mid+108]
          midRightG = chData[mid+109]
          midRightB = chData[mid+110]
          treeCtx.save()
          treeCtx.translate(90,65)
           treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(midRightG + '*' +'12',-40,345);
          treeCtx.fillText(midRightG + '*' +'12',290,425);
          treeCtx.fillText(midRightB + '*' +'12',530,680);
          
          treeCtx.restore()
         
          
          bot = width * 34
          
          botLeftR = chData[bot+8]
          botLeftG = chData[bot+9]
          botLeftB = chData[bot+10]
          
            treeCtx.save()
         
         treeCtx.translate(195,15)
          treeCtx.fillText(botLeftR + '*' +'12',32,305 )
          treeCtx.fillText(botLeftG + '*' +'12',365,210 )
          treeCtx.fillText(botLeftB + '*' +'12',700,305 )
          
          treeCtx.restore()
          
          
          botMidR = chData[bot+52]
          botMidG = chData[bot+53]
          botMidB = chData[bot+54]
          
            treeCtx.save()
         
         treeCtx.translate(240,55)
          treeCtx.fillText(botMidR + '*' +'12',32,305 )
          treeCtx.fillText(botMidG + '*' +'12',365,219 )
          treeCtx.fillText(botMidB + '*' +'12',700,309 )
          
          treeCtx.restore()
          
          
          botRightR = chData[bot+108]
          botRightG = chData[bot + 109]
          botRightB = chData[bot+110]
          
            treeCtx.save()
          treeCtx.translate(190,15)
           treeCtx.rotate(-Math.PI / 6);
          treeCtx.fillText(botRightR + '*' +'12',-40,345);
          treeCtx.fillText(botRightG + '*' +'12',290,425);
          treeCtx.fillText(botRightB + '*' +'12',540,665);
          
          treeCtx.restore()
          
          
         
          
     ////
          
          
    matrix = mtrx;      
        
  newRed = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr) + (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr) + (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);


newGreen = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr) + (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr) + (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);

newBlue = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr) + (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr) + (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);

     
      
      
      
      
      
      
      
      
      
      topR = (topLeftR * matrix.tpl ) + (topMidR * matrix.tpm) + (topRightR * matrix.tpr);
          
          midR = (midLeftR * matrix.mdl) + (middleR * matrix.mdm) + (midRightR * matrix.mdr);
          
          botR = (botLeftR * matrix.btl) + (botMidR * matrix.btm) + (botRightR * matrix.btr);
      
          
          
          
      ////
      
          
           topG = (topLeftG * matrix.tpl) + (topMidG * matrix.tpm) + (topRightG * matrix.tpr);
          
          midG = (midLeftG * matrix.mdl) + (middleG * matrix.mdm) + (midRightG * matrix.mdr);
          
          botG = (botLeftG * matrix.btl) + (botMidG * matrix.btm) + (botRightG * matrix.btr);
          
          
          //
           
          topB = (topLeftB * matrix.tpl) + (topMidB * matrix.tpm) + (topRightB * matrix.tpr);
          
          midB = (midLeftB * matrix.mdl) + (middleB * matrix.mdm) + (midRightB * matrix.mdr);
          
          botB = (botLeftB * matrix.btl) + (botMidB * matrix.btm) + (botRightB * matrix.btr);
          
        
    },
    stage3: function(para,x,y){
      
         textarea.innerHTML = para[3]
                    treeCtx.save()
          
            treeCtx.scale(1.5,1.5);
  
          
           treeCtx.beginPath();
treeCtx.moveTo(135,130);
treeCtx.lineTo(72,165);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
   //
        treeCtx.beginPath();
treeCtx.moveTo(340,72);
treeCtx.lineTo(290,104);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    //
    
        treeCtx.beginPath();
treeCtx.moveTo(557,137);
treeCtx.lineTo(510,171);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
/////
   // ..
    
    
 
    
        treeCtx.beginPath();
treeCtx.moveTo(134,140);
treeCtx.lineTo(130,210);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    

    ///
    
    
    treeCtx.beginPath();
treeCtx.moveTo(350,77);
treeCtx.lineTo(350,142);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    ////
    
    
    
       treeCtx.beginPath();
treeCtx.moveTo(568,139);
treeCtx.lineTo(571,210);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    ///
    
    //..///
    
        treeCtx.beginPath();
treeCtx.moveTo(137,131);
treeCtx.lineTo(195,172);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    
    ///
    
    
        treeCtx.beginPath();
treeCtx.moveTo(361,72);
treeCtx.lineTo(414,105);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
    
    
    
    ///
    
    //
    
       treeCtx.beginPath();
treeCtx.moveTo(577,136);
treeCtx.lineTo(631,167);
          treeCtx.strokeStyle ='#FF0000';
treeCtx.stroke();
    
          
          
  // 
          treeCtx.save()
          treeCtx.fillStyle = "black";
          
        treeCtx.fillText( topR, 60,173);    

     treeCtx.fillText( midR, 120,215);
    
     treeCtx.fillText( botR, 188,182);
    
     treeCtx.fillText( topG, 275,110);  
    
     treeCtx.fillText( midG, 343,152);  
    
 treeCtx.fillText( botG, 407,115);  
    
    
     treeCtx.fillText( topB, 495,178);
    
     treeCtx.fillText( midB, 560,215);
    
     treeCtx.fillText( botB, 625,175);  
          
          treeCtx.restore()
          
          treeCtx.restore()
          
          
      
        
        
    },
    stage4: function(para,x,y){
       // treeCtx.save()
       textarea.innerHTML = para[4]
         treeCtx.save()
          treeCtx.scale(1.5,1.5);
          treeCtx.save()
          treeCtx.fillStyle = "white";
              treeCtx.fillText(newRed, 125,135);  
     treeCtx.fillText( newGreen, 340,68);       
        treeCtx.fillText( newBlue, 553,135);  
          treeCtx.restore()
          
          $( "#output2" ).dialog(); 
          
          $( "#output2" ).dialog({
position: { my: "left top", at: "left bottom", of: canvas }
}); 
    document.getElementById('arrow-r').style.display = 'initial';
          document.getElementById('nextBT').innerHTML = 'restart';
          treeCtx.restore()
          //treeCtx.restore()
        
        
        
        
    },
 stage5: function(para,x,y){
     
     
     
 }
}