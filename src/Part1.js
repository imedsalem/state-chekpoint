import React, { Component } from 'react'

export default class Part1 extends Component {
    state = {timer1:0}
    componentDidMount(){
        setInterval(()=>{
            this.setState({timer1:this.state.timer1+1})
        },1000);
    }
  render() {
    return (
      <>
        <img className='img' src={this.props.info.imgSrc} alt="img-peronel" />
        <p>{this.props.info.fullName}</p>
        <p>{this.props.info.bio}</p>
        <p>{this.props.info.profession}</p>
        <p>{this.state.timer1}</p>
      </>
    )
  }
}
