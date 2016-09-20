import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Dropzone from "react-dropzone";

class Upload extends React.Component {
    changeImage(new_image) {
        this.props.changeImage(new_image)
    }

    onDrop(files) {
        console.log('Received files: ', files);
        this.changeImage(files[0].preview)
    }

    render() {
        return (
            <Dropzone className="fui-photo dropzone" onDrop={this.onDrop.bind(this)}></Dropzone>
        );
    }
}

export default Upload
