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
class App extends Component {

  state = {
    
      name: '',
      age: '',
      height: ''
    
  }

  componentDidMount = event =>{
    this.props.getSmurfs();
  }

  handleInputChange = event =>{
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  addASmurf = e =>{
    e.preventDefault();
    this.props.addASmurf(this.state);
    this.setState({
      
        name: '',
        height: '',
        age: ''
      
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="the-smurfs">
        
        {this.props.smurfs.map((smurfy) =>{
          return(
            <div className="mapped-smurf">
              <h1>Name: {smurfy.name}</h1>
              <h2>Age: {smurfy.age}</h2>
              <h2>Height: {smurfy.height}</h2>
            </div>
          )
        })}
        
        </div>
        <form onSubmit={this.addASmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = state =>({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf
})

export default connect(
  mapStateToProps,
  {addASmurf, getSmurfs}
)(App);



