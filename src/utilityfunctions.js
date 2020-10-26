module.exports.getText=function(keyOneIndex,keyTwoIndex,keyOne,keyTwo,testString1){
    
    let firstBox="";
   
    // keyOneIndex=testString1.search(keyOne);
    // keyTwoIndex=testString1.search(keyTwo);
    while(keyOneIndex!=-1 && keyOne!=keyTwo){
        keyOneIndex=testString1.search(keyOne);
        testString1=testString1.slice(keyOneIndex);
        keyOneIndex=testString1.search(keyOne);
        keyTwoIndex=testString1.search(keyTwo);
       
        if(keyTwo==-1){
          firstBox+=testString1.slice(keyOneIndex+keyOne.length+1);
          break;
        }
        if (keyTwoIndex == -1) {
          firstBox += testString1.slice(keyOneIndex + keyOne.length , testString1.length);
        }
        else {
          firstBox += testString1.slice(keyOneIndex + keyOne.length , keyTwoIndex);
        }
    
        
        testString1=testString1.slice(keyTwoIndex);
      
        keyOneIndex=testString1.search(keyOne);
         
        
        if(keyOneIndex==-1){
          break;
        }
        testString1=testString1.slice(keyOneIndex);
         
        
      }
      
      let tempkey=keyOne;
      let tempstring=tempkey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      let replacement="";
      if(keyOne==keyTwo){
        let index=testString1.search(keyOne);
        if(index==-1){
          return "";
        }
        firstBox=testString1.slice(index+keyOne.length);
      }
      firstBox=firstBox.replace(new RegExp(tempstring, 'g'), replacement);
      
    
return firstBox;

}