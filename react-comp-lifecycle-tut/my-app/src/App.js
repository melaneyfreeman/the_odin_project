import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
    }

    this.mountCounter = () => this.setState({
      mount: true
    })

    this.unmountCounter = () => this.setState({
      mount: false
    })

    this.ignoreProp = () => this.setState({
      ignoreProp: Math.random()
    })

    this.seedGenerator = () => this.setState({
      seed: Number.parseInt(Math.random() * 100)
    })

    this.toggleError = () => this.setState({
      showErrorComponent: !this.state.showErrorComponent
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>mount counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>unmount counter</button>
        <button onClick={this.ignoreProp}>ignore prop</button>
        <button onClick={this.seedGenerator}>seed generator</button>
        <button onClick={this.toggleError}>toggle error</button>
        {this.state.mount ? 
        <Counter 
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed}
          showErrorComponent={this.state.showErrorComponent}/> : null}
      </div>
    )
  }
}

export default App;
