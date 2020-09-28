import React, {Component} from 'react';
import {connect} from "react-redux"

class Main extends Component{
    state= { }
    render(){
        return(
            <div>
        {this.props.todo.map(el=><li key={el.id}>{el.inputValue}</li>)}
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return{
        todo:state.main
    }
}
export default connect(mapStateToProps,null) (Main);