import React from 'react';
import {connect} from 'react-redux';
class Mymeme extends React.Component{
    render()
    {
        return(
           <div>
               {
                   this.props.myMemes.map((meme,index)=>{
                    //console.log(meme);
                       return(
                           <img key={index}
                           src={meme.data.url}
                           alt="my-meme"
                           className="my-meme-img"/>
                       )
                       
                   })

               }
           </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        myMemes:state.myMeme
    }
}

export default connect(mapStateToProps,null)(Mymeme);