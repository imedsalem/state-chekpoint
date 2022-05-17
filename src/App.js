import React, { Component } from 'react'
import Part1 from './Part1'
import './App.css'

export class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Person : { 
          fullName : "Person name",
          bio : "Person bio", 
          imgSrc: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png", 
          profession:"Person profession"
        },
        show : true
      }
    this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
      this.setState(function (prevState){
        return{
          show : !prevState.show
        }
      })
    }

  render() {
    if (this.state.show)
      return (
        <div className='container'>
          <div className="card">
            <button onClick={this.clickHandler}>Hide</button>
            <br/>
            <Part1 info={this.state.Person}/>
          </div>
      </div>
      ); else 
      return (
        <div className='container'>
          <div className="card">
          <button onClick={this.clickHandler}>Show</button>
          </div>
      </div>
      )
  }
}

export default App 