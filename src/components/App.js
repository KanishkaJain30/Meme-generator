import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../index.js';
import MemeItem from './meme';
import {Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import Mymeme from './mymeme';
import '../index.css';

class App extends Component {
   constructor()
   {
       super();
       this.state={
           memeLimit:10,
           text0:'',
           text1:''
       }
   } 
   render()
   {
       return(
        <div className="App">
            <h2> <u>Welcom to meme generator</u></h2>
            <h4><i>Write some text</i></h4>
            <Mymeme/>
            <Form inline>
                <FormGroup>
                    <FormLabel>Top</FormLabel>
                    {' '}
                    <FormControl 
                        type="text"
                        onChange={event => this.setState({text0:event.target.value})}
                    >
                    </FormControl>
                    { ' '}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Bottom</FormLabel>
                    {' '}
                    <FormControl type="text" onChange={event =>this.setState({text1:event.target.value})}
                    ></FormControl>
                </FormGroup>
            </Form>
            {
                this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
                    return(
                      <MemeItem key={index} memes={meme}
                      text0={this.state.text0}
                      text1={this.state.text1}/>
                    );
                })
            }
            <div className="meme-button" onClick={()=>{
                this.setState({memeLimit:this.state.memeLimit+10})
            }}>Load 10 more memes</div>
        </div>
       );
   }
}

function mapStateToProps(state){
    return{
        memes:state.memes
    };
}

export default connect (mapStateToProps,null)(App)