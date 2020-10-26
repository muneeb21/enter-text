  
import React from 'react';


function FirstBox(props) {
  return (
    <div className="firstBox">
        <hi>FIRST BOX</hi>
        <div style={styles.div}>
        {props.firstBox}     
        </div>
       
    </div>
  );
}

// styles
const styles={
    div:{
        padding:7,
        margin:7,
        marginTop:20,
        height: 90,
        width: 300,
        border:"solid 1px black",
        backgroundColor: "white",
       
    },
}

export default FirstBox;