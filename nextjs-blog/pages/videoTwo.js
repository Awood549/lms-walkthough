import React from 'react';
import ReactPlayer from 'react-player';
import {LoginContext} from '../components/context.js';

const If = props => {
  return !!props.condition ? props.children : null;
};


class VidTwo extends React.Component{
  static contextType = LoginContext;
  constructor(props) {
    super(props);

  }

    render() {

      return (
        <>
          <div>
            <If condition = {this.context.currentUser === 'teacher'}>

          <form >
              <label>Students can see this lesson:</label>
              <input type= 'radio' name= '1' value = 'true' onChange = {this.context.changeVid}></input>
              <label>Students can not see this lesson:</label>
              <input type='radio' name= '1' value='false' onChange = {this.context.changeVid}></input>
            </form>

            </If>
          <ReactPlayer
            className= 'vids'
            url= 'https://www.youtube.com/watch?v=JIJhqSZlTqQ'
            width='400px'
            height='300px'
            controls = {true}
            />
            
            <If condition = {this.context.currentUser === 'student' && this.context.videos[1].desc} >
            <p>Here is the video Description</p>
                    </If>
            <If condition = {this.context.currentUser === 'teacher'}>
            <p>Here is the video Description</p>
            <form >
              <label>Students can see description:</label>
              <input type= 'radio' name= '1' value = 'true' onChange = {this.context.changeDesc}></input>
              <label>Students can not see description:</label>
              <input type='radio' name= '1' value='false' onChange = {this.context.changeDesc}></input>
            </form>
            </If>


            <If condition = {(this.context.currentUser === 'student' && this.context.videos[1].question) || this.context.currentUser === 'teacher'} >
            <form>
              <legend>Here is the question and possible answers! </legend>
              <label>A</label>
              <input type = 'radio'></input>
              <label>B</label>
              <input type = 'radio'></input>
              <label>C</label>
              <input type = 'radio'></input>
              <label>D</label>
              <input type = 'radio'></input>
            </form>
             </If>
             <If condition ={this.context.currentUser === 'teacher'}>
            <form>
            <label>Students can see question:</label>
              <input type= 'radio' name= '1' value='true' onChange = {this.context.changeQuest}></input>
              <label>Students can not see question:</label>
              <input type='radio' name= '1' value ='false' onChange = {this.context.changeQuest}></input>
              </form>
            </If>
            </div>
  </>
        
      );

    }
  
}

export default VidTwo;