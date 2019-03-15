import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addASmurf} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 const smurfly = props =>{
   const fetchSmurf = e =>{
     e.preventDefault();
     props.getSmurfs();
   }
 }

 const mapStateToProps = state =>({

 })
class App extends Component {
  state={
    smurf:{
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount = e =>{
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState({
      smurf:{
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  }

  addASmurf = e =>{
    e.preventDefault();
    this.props.addASmurf(this.state.smurf);
    this.setState({
      smurf:{
        name: '',
        age: '',
        height: ''
      }
    })
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
