import React, {Component} from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

class App extends Component {

  state = {
    names: [
      {name: 'Jason', track: 'Software'},
      {name: 'Jorge', track: 'Software'},
      {name: 'Esteban', track: 'Hardware'},
      {name: 'Omar', track: 'Cybersecurity'},

    ]
  }
  
  changeName = (e) => {
    this.setState({
      names: [
        { name: e.target.value, track: 'Software' },
        { name: 'Jorge', track: 'Software' },
        { name: 'Esteban', track: 'Hardware' },
        { name: 'Omar', track: 'Cybersecurity' },
      ]
    })
  }
  
  render(){
    const style = {
      textAlign: 'center',
      backgroundColor: 'whitesmoke',
      width: '40%',
      margin: '3em auto',
      padding: '5%',
      border: '2px solid #000',
      lineHeight: '1.7',

    }
    
    return (
      <div className="App" style={style}>
        <h1>Welcome to my first challenge</h1>
        <p>By the way I am going to body this</p>
        <UserInput
          name={this.state.names[0].name}
          track={this.state.names[0].track}
          changeName={this.changeName} />
        <UserOutput 
        name={this.state.names[0].name} 
        track={this.state.names[0].track}
        changeName={this.changeName}/>
  
      </div>
    );
  }
}

export default App;
