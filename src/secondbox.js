  
import React from 'react';


function SecondBox(props) {
  return (
    <div className="secondBox">
        <hi>SECOND BOX</hi>
     <div style={styles.div}>
         {props.secondBox}
         </div>
       
    </div>
  );
}

const styles={
    div:{
        padding:7,
        margin:7,
        height: 90,
        width: 300,
        border:"solid 1px black",
        backgroundColor: "white",
       
    },
}

export default SecondBox;