import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    // defining the state at first
    this.state = 
    { firstBox: "",
      secondBox:""
    }
  }

  // handler for form data

  textHandler=(e)=>{
    e.preventDefault();
    const text=e.target.value;
    console.log(text," text");
  }

  keyOneHandler=(e)=>{
    // e.preventDefault();
    const text=e.target.value;
    console.log(text," key1");
  }

  keyTwoHandler=(e)=>{
    // e.preventDefault();
    const text=e.target.value;
    console.log(text," key2");
  }

  render(){
    const firstBox=this.state.firstBox;
    const secondBox=this.state.secondBox;
  return (
    <div className="App">
      <div classnname="form">
        <form >
           <input type="text" name="key1"onChange={this.keyOneHandler} placeholder="Enter Key1.."/>
           <input type="text" name="key2"onChange={this.keyTwoHandler}placeholder="Enter Key2.." />
           <textarea rows="4" cols="50" placeholder="Enter Text...." name="text"onChange={this.textHandler}>

           </textarea>
           
          </form> 
          
      </div>
      <div id="firstBox">
         {firstBox}
      </div>
      <div id="secondBox">
          {secondBox}
      </div>
    </div>
  );
}
}

// const style={

// }

export default App;
