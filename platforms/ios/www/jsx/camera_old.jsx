import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Dropzone from "react-dropzone";
import Dropbox from "dropbox";

class Camera extends React.Component {
    changeImage(new_image, image_name, pic_file) {
        let pic_name = image_name.split(".")[0]
        this.props.changeImage(new_image, pic_name, pic_file)
    }

    moveForward(a) {
        console.log("move foward fired");
        this.props.changeScreen(a)
    }

    onDrop(files) {
        console.log('Received files: ', files);
        this.changeImage(files[0].preview, files[0].name, files[0])
        this.moveForward(1)
    }

    render() {
        return (
            <Dropzone className="fui-photo dropzone" onDrop={this.onDrop.bind(this)}></Dropzone>
        );
    }
}

export default Camera
