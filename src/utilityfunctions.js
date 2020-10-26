module.exports.getText=function(keyOneIndex,keyTwoIndex,keyOne,keyTwo,testString1){
    console.log("intside function");
    let firstBox="";
    let i=0;
    // console.log("keyOneIndex",keyOneIndex);
    // console.log("keyTwoIndex",keyTwoIndex);
    // console.log("keyOne",keyOne);
    // console.log("keyTwo",keyTwo);
    // console.log("testString1",testString1);
    keyOneIndex=testString1.search(keyOne);
    keyTwoIndex=testString1.search(keyTwo);
    while(keyOneIndex!=-1){
        keyOneIndex=testString1.search(keyOne);
        testString1=testString1.slice(keyOneIndex);
        keyOneIndex=testString1.search(keyOne);
        keyTwoIndex=testString1.search(keyTwo);
       console.log("keyOneIndex",keyOneIndex);
        console.log("keyTwoIndex",keyTwoIndex);
        // if(keyTwo<keyOne && keyTwo!=-1){
        //   firstBox+=testString1.slice(keyOneIndex+keyOne.length+1);
        //   break;
        // }
        if(keyTwo==-1){
          firstBox+=testString1.slice(keyOneIndex+keyOne.length+1);
          break;
        }
        firstBox+=testString1.slice(keyOneIndex+keyOne.length+1,keyTwoIndex);
        testString1=testString1.slice(keyTwoIndex);
        console.log("newstring",testString1);
        keyOneIndex=testString1.search(keyOne);
         
  
        if(keyOneIndex==-1){
          break;
        }
        testString1=testString1.slice(keyOneIndex);
        // keyOneIndex=testString1.search(keyOne); 
        i++;
        if(i==10){
          break;
        }
        console.log("testString1",testString1);
        console.log("keyoneindex",keyOneIndex);
      }
      
      let tempkey=" "+keyOne;
      let tempstring=tempkey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      let replacement="";
      firstBox=firstBox.replace(new RegExp(tempstring, 'g'), replacement);
      
    //   console.log("firstBox",firstBox);
return firstBox;

}