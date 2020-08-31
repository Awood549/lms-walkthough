import React from 'react';
// import Login from './login.js';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {username:'teacher', password:'teach4fun'},
        {username:'student', password:'learn2grow'}
      ],
      videos:[
        {desc:true,
          question:true,
          video: true},
        {desc:true,
          question:false,
          video: true},
        {desc:false,
          question:false,
          video: true}
      ],
      currentUser:'',
      currentPage: '',
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      setLoginState: this.setLoginState,
      changeDesc:this.changeDesc,
      changeQuest:this.changeQuest,
      changeVid:this.changeVid,
      changePage:this.changePage,
     };
  }

  login = user => {
    if(JSON.stringify(user)=== JSON.stringify(this.state.users[0]) || JSON.stringify(user) === JSON.stringify(this.state.users[1])){ 
      this.state.currentUser=user.username;
      console.log(this.state.currentUser)
      this.setLoginState(true);
    }
  };

  logout = () => {
    this.state.currentPage = '';
    this.setLoginState(false);
  };

  
  changePage = page => {
    console.log(page.target.name)
    let state = {...this.state}
    state.currentPage = page.target.name;
    console.log(state.currentPage)
    this.setState(state)
  }
  setLoginState = loggedIn => {
    this.setState({loggedIn });
  };

  changeVid = (e) => {
    let number = e.target.name;
    let value = e.target.value;
    let state = {...this.state}
    if(value == 'true'){ value = true}
    if(value == 'false') { value = false}
    state.videos[number].video = value
    this.setState({state})
  };

  changeDesc = (e) => {
    let number = e.target.name;
    let value = e.target.value;
    let state = {...this.state}
    if(value == 'true'){ value = true}
    if(value == 'false') { value = false}
    state.videos[number].desc = value
    this.setState({state})
  };

  changeQuest = (e) => {
  let state = {...this.state};
  let value = e.target.value;
  let name = e.target.name;
  if(value == 'true'){ value = true}
  if(value == 'false') { value = false}
  state.videos[name].question = value
  this.setState({state})
};


  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;