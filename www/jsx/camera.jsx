import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Dropzone from "react-dropzone";
import Dropbox from "dropbox";

class Camera extends React.Component {
    changeImage(new_image) {
        this.props.changeImage(new_image)
    }

    moveForward(a) {
        console.log("move foward fired");
        this.props.changeScreen(a)
    }

    upload(file) {
        let dbx = new Dropbox({ accessToken: "oaE89qwjJSUAAAAAAAAkjwLkjmx5qMS-zfoMULRGyxoR2gjuN1rA5Z8LHcgsgp2O"})
        console.log(file);
        dbx.filesUpload({ path: "/input/" + file.name, contents: file })
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onDrop(files) {
        console.log('Received files: ', files);
        this.changeImage(files[0].preview)
        this.upload(files[0])
        this.moveForward(1)
    }

    render() {
        return (
            <Dropzone className="fui-photo dropzone" onDrop={this.onDrop.bind(this)}></Dropzone>
        );
    }
}

export default Camera
