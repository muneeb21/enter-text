import React from 'react';
import {getText} from './utilityfunctions'
// import ReactDOM from 'react-dom';
import FirstBox from './firstbox';
import SecondBox from './secondbox';
class App extends React.Component {

  constructor() {
    super();
    // defining the state at first
    this.state = 
    { firstBox: "",
      secondBox:"",
      text:"",
      keyOne:"",
      keyTwo:""
    }
  }

  // handler for form data

  textHandler=(e)=>{
    e.preventDefault();
    const text=e.target.text.value;
    // console.log(text," text");
    let keyOne=this.state.keyOne;
    let keyTwo=this.state.keyTwo;
    let keyOneIndex=text.search(keyOne);
    let keyTwoIndex=text.search(keyTwo);

    console.log(keyOneIndex,keyOne);
    console.log(keyTwoIndex,keyTwo);
    let firstBox="";
    let secondBox="";
    let testString=text;
    

    
    firstBox=getText(keyOneIndex,keyTwoIndex,keyOne,keyTwo,testString);
    secondBox=getText(keyTwoIndex,keyOneIndex,keyTwo,keyOne,testString);
    console.log("firstBox",firstBox);
    console.log("secondBox",secondBox);
  
  this.setState({firstBox:firstBox,secondBox:secondBox}); 
    // FUunction to calculate secind box
    

    
  }

  keyOneHandler=(e)=>{
    // e.preventDefault();
    const keyOne=e.target.value;
    // console.log(text," key1");
    this.setState({keyOne: keyOne});
  }

  keyTwoHandler=(e)=>{
    // e.preventDefault();
    const keyTwo=e.target.value;
    // console.log(text," key2");
    this.setState({keyTwo: keyTwo});
  }

  render(){
    const firstBox=this.state.firstBox;
    const secondBox=this.state.secondBox;
  return (
    <div className="App">
      <h1 style={styles.heading}>WELCOME!</h1>
      <div classnname="form">
        <form onSubmit={this.textHandler}>
           <div style={styles.key1div}>
             Key1
              <input style={styles.input} type="text" name="key1"onChange={this.keyOneHandler} placeholder="Enter Key1.."/>
           </div>
           <div style={styles.key2div}>
              Key2
              <input style={styles.input} type="text" name="key2"onChange={this.keyTwoHandler}placeholder="Enter Key2.." />
           </div>
           <div>
            Enter The Text
            <div>
             <textarea style={styles.textarea} rows="4" cols="50" placeholder="Enter Text...." name="text"></textarea>
             </div>
           </div>
           <div>
             <input style={styles.submitButton} type="submit"/>
           </div>
          </form> 
          
      </div>
      <div id="firstBox">
         <FirstBox firstBox={firstBox}/>
      </div>
      <div id="secondBox">
      <SecondBox secondBox={secondBox}/>
      </div>
    </div>
  );
}
}

const styles={
  heading:{
  marginLeft:10
  },
  textarea:{
      margin:3,
      height: 120,
      width: 320,
      // border:"solid 1px black",
      backgroundColor: "white",
     
  },
  key1div:{
    margin:5,
    marginTop:30
  },

  key2div:{
    margin:5,
    
  },
  input:{
  margin:3
  },
  submitButton:{
    margin:2,
    backgroundColor: "#008CBA", /* Green */
     border: "none",
     color: "white",
     padding: "8px 15px",
     textAlign: "center",
     textDcoration: "none",
     fontSize: "14px"
  }

}

export default App;
