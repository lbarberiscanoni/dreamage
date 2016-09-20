import React from "react";
import ReactDOM from "react-dom";

class Canvas extends React.Component {
    render() {
        return(
            <img id="image" src={ this.props.image }></img>
        )
    }
}

export default Canvas
