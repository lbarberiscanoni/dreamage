import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Dropzone from "react-dropzone";
import Dropbox from "dropbox";

class Camera extends React.Component {
    changeImage(new_image) {
        this.props.changeImage(new_image);
    }

    moveForward(a) {
        console.log("move foward fired");
        this.props.changeScreen(a)
    }

    onDrop(e) {
        let file = e.target.files[0]
        console.log('Received files: ', file);
        this.changeImage(file);
        this.moveForward(1)
    }

    render() {
        return (
            <div className="fui-photo clickable">
                <input type="file" name="image" onChange={this.onDrop.bind(this)}></input>
            </div>
        );
    }
}

export default Camera
