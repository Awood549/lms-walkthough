import React from 'react';
import {LoginContext} from './context.js'
import VidOne from '../pages/videoOne.js'
import VidTwo from '../pages/videoTwo.js'
import VidThree from '../pages/videoThree.js'


const If = props => {
  return !!props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let state = this.state
    console.log(this.state)
    this.context.login(state)
    // e.target.reset();

    };

  render() {
    return (
      <>
      
              <If condition={this.context.loggedIn}>
                <If condition={this.context.currentUser==='teacher'}>
                  
                  <h1>Welcome Teacher, Let's Plan some lessons</h1>
                  <If condition = {this.context.currentPage ===''}>
                    <div className = 'scrollDiv'>
                    <div className = 'bundle'>
                      <h3>Video One</h3>
                  <img name = 'videoOne' onClick ={this.context.changePage} src='/static/Capture.png' />
                  </div>
                  <div className = 'bundle'>
                      <h3>Video Two</h3>
                  <img name = 'videoTwo'onClick ={this.context.changePage} src='/static/CaptureTwo.png' />
                  </div>
                  <div className = 'bundle'>
                      <h3>Video Three</h3>
                  <img name = 'videoThree' onClick ={this.context.changePage} src='/static/Capture3.png' />
                  </div>
                    </div>
                  </If>

                  <If condition = {this.context.currentPage === 'videoOne'} >
                    <h2> Video One:</h2>
                  <VidOne></VidOne>
                </If>

                <If condition = {this.context.currentPage === 'videoTwo'} >
                  <h2> Video Two:</h2>
                  <VidTwo></VidTwo>
                </If>   
                <If condition = {this.context.currentPage === 'videoThree'} >
                  <h2> Video Three:</h2>
                  <VidThree></VidThree>
                </If>                

                </If>
                
                <If condition= {this.context.currentUser ==='student'}>

                  <If condition = {this.context.currentPage === ''}>

                  <h1> Welcome! Let's learn some skills! </h1>
                  <div className = 'scrollDiv'>

                  <If condition = {this.context.videos[0].video}>
                    <div className = 'bundle'>
                      <h3>Video One</h3>
                  <img name = 'videoOne' onClick ={this.context.changePage} src='/static/Capture.png' />
                    </div>
                  </If>
                  <If condition = {this.context.videos[1].video}>
                  <div className = 'bundle'>
                      <h3>Video Two</h3>
                  <img name = 'videoTwo'onClick ={this.context.
                  changePage} src='/static/CaptureTwo.png' />
                  </div>
                  </If>
                  <If condition = {this.context.videos[2].video}>
                  <div className = 'bundle'>
                      <h3>Video Three</h3>
                  <img name = 'videoThree' onClick ={this.context.changePage} src='/static/Capture3.png' />
                  </div>
                  </If>
                  </div>

                  </If>

                  <If condition = {this.context.currentPage === 'videoOne'} >
                    <h2> Video One:</h2>
                  <VidOne></VidOne>
                </If>

                <If condition = {this.context.currentPage === 'videoTwo'} >
                  <h2> Video Two:</h2>
                  <VidTwo></VidTwo>
                </If>   
                <If condition = {this.context.currentPage === 'videoThree'} >
                  <h2> Video Three:</h2>
                  <VidThree></VidThree>
                </If>                

                  </If>

          <button onClick={this.context.logout}>Log Out</button>
          </If>

          <If condition={!this.context.loggedIn}>

            <div className='bigDiv'>
          <form onSubmit={this.handleSubmit}>
            <input className = 'login'
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input className = 'login'
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              />
            <button type="submit" value="Login" > Log In</button>
          </form>
              </div>
          </If>

          <If condition = {!(this.context.currentPage === '')}>
          <button name ='' onClick = {this.context.changePage}>Home</button>
          </If>

      </>
    );
  }
}

export default Login;