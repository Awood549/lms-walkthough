import React, {Component} from 'react';
import {LoginContext} from '../components/context.js'
import ReactPlayer from 'react-player'

class VidList extends React.Component{
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
    }

  }

    render() {

      return (
        <>
        <h2>
          Which lesson would you like to See?
          </h2>
          <div >
          <form >
              <label>Students can see this lesson:</label>
              <input type= 'radio' name= '0' value = 'true' onChange = {this.context.changeVid}></input>
              <label>Students can not see this lesson:</label>
              <input type='radio' name= '0' value='false' onChange = {this.context.changeVid}></input>
            </form>
          <ReactPlayer
            className= 'vidDiv'
            url= 'https://www.youtube.com/watch?v=JIJhqSZlTqQ'
            width='400px'
            height='300px'
            controls = {true}
            />
            <form >
              <label>Students can see description:</label>
              <input type= 'radio' name= '0' value = 'true' onChange = {this.context.changeDesc}></input>
              <label>Students can not see description:</label>
              <input type='radio' name= '0' value='false' onChange = {this.context.changeDesc}></input>
            </form>
            <p> Here is the video Description</p>

            <form>
            <label>Students can see question:</label>
              <input type= 'radio' name= '0' value='true' onChange = {this.context.changeQuest}></input>
              <label>Students can not see question:</label>
              <input type='radio' name= '0' value ='false' onChange = {this.context.changeQuest}></input>
              </form>
            <form>
              <legend>Here is the question and possible answers! </legend>
              <label>A</label>
              <input name= 'q1'type = 'radio'></input>
              <label>B</label>
              <input name = 'q1' type = 'radio'></input>
              <label>C</label>
              <input name='q1' type = 'radio'></input>
              <label>D</label>
              <input name='q1' type = 'radio'></input>
            </form>
            </div>

            <div className = 'vidDiv' >
            <form >
              <label>Students can see this lesson:</label>
              <input type= 'radio' name= '1' value = 'true' onChange = {this.context.changeVid}></input>
              <label>Students can not see this lesson:</label>
              <input type='radio' name= '1' value='false' onChange = {this.context.changeVid}></input>
            </form>
        <ReactPlayer
            className='react-player fixed-bottom'
            url= 'https://www.youtube.com/watch?v=2yl7g-r_f8k'
            width='400px'
            height='300px'
            controls = {true}

            />
            <form >
              <label>Students can see description:</label>
              <input type= 'radio' name= '1' value = 'true' onChange = {this.context.changeDesc}></input>
              <label>Students can not see description:</label>
              <input type='radio' name= '1' value='false' onChange = {this.context.changeDesc}></input>
            </form>
            <p>Here is the video Description</p>
            <form>
            <label>Students can see question:</label>
              <input type= 'radio' name= '1' value='true' onChange = {this.context.changeQuest}></input>
              <label>Students can not see question:</label>
              <input type='radio' name= '1' value ='false' onChange = {this.context.changeQuest}></input>
              </form>
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
            </div>

            <div className = 'vidDiv' >
            <form >
              <label>Students can see this lesson:</label>
              <input type= 'radio' name= '2' value = 'true' onChange = {this.context.changeVid}></input>
              <label>Students can not see this lesson:</label>
              <input type='radio' name= '2' value='false' onChange = {this.context.changeVid}></input>
            </form>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'https://www.youtube.com/watch?v=LkpXqYg9rlI'
            width='400px'
            height='300px'
            controls = {true}

            />
            <form >
              <label>Students can see description:</label>
              <input type= 'radio' name= '2' value = 'true' onChange = {this.context.changeDesc}></input>
              <label>Students can not see description:</label>
              <input type='radio' name= '2' value='false' onChange = {this.context.changeDesc}></input>
            </form>
            <p>Here is the video Description</p>
            <form>
            <form>
            <label>Students can see question:</label>
              <input type= 'radio' name= '2' value='true' onChange = {this.context.changeQuest}></input>
              <label>Students can not see question:</label>
              <input type='radio' name= '2' value ='false' onChange = {this.context.changeQuest}></input>
              </form>
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

            </div>

  </>
        
      );

    }
  
}

export default VidList;