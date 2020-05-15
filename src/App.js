import React from 'react';
import './App.css';


function TimerDisplay(props){
  const time = props.time;
  const theme = props.theme;
  const timerName = props.timerName;

  return(
    <div className={`timer-${theme}`} id={timerName}>
      {time}
    </div>
  )

}

class TimerButton extends React.Component {
  constructor(props){
    super(props); //always do this so you can access props
    // this.state = {} < we don't need this but that's where it would go 
    this.handleClick = this.handleClick.bind(this); //goes inside the constructor
  }

  // this space ^ v is for methods 

  handleClick(e){
    const updateTimer = this.props.handleTimerChange;
    updateTimer(e.target.id);
  }


  render(){
    //all the logic should go here in some form, before the return (<div></div>) statement
    let button;
    if (this.props.buttonType==='increase'){
      button = (<button onClick={this.handleClick} id={this.props.timerType+'-'+this.props.buttonType}>up</button>);
    }else if (this.props.buttonType==='decrease'){
      button = (<button onClick={this.handleClick} id={this.props.timerType+'-'+this.props.buttonType}>down</button>);
    }

    return(<div>{button}</div>);

  }


}




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      break : 5,
      session: 25,
      timerType : 'session',
      isRunning : false,
      theme: 'theme1'

    }
    this.handleTimerChange = this.handleTimerChange.bind(this);
  }


  handleTimerChange(id){ 

    let sessionTime = this.state.session,
        breakTime = this.state.break;
     
     if (id==='session-increase'){
       this.setState({
         session: sessionTime+1
       })

     }else if(id==='session-decrease'){
       this.setState({
         session: sessionTime-1
       })

     }else if(id==='break-increase'){
       this.setState({
         break: breakTime+1
       })

     }else{
       this.setState({
         break: breakTime-1
       })

     }
     

  }




  render(){
    let time = this.state.time,
        theme = this.state.theme,
        handleTimerChange = this.handleTimerChange;

    

    return(<div id='main'>
      <section id='wrapper'>
        <div id='timers'>
          <div className='session-timer'>
            <TimerButton timerType='session' buttonType='decrease' handleTimerChange={handleTimerChange} id='session-decrease' />
          <TimerDisplay time={this.state.session}
                        theme={this.state.theme}
                        timerName = 'session' />
            <TimerButton timerType='session' buttonType='increase' handleTimerChange={handleTimerChange} id='session-increase' />
                        </div>
          <TimerDisplay time={this.state.break}
                        theme={this.state.theme}
                        timerName = 'break' />

         

        </div>
      </section>
    </div>)




  }





}



export default App;
