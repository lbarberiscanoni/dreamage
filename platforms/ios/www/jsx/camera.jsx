import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import ImageUploader from "react-image-uploader";

function uploadImage(file, done, progress) {
    let error = null
    let uploadedImageURL = "https://www.dropbox.com/s/ercqr79csrkqput/File%20Jul%2002%2C%203%2040%2021%20PM.jpeg?dl=0"
    done(error, uploadedImageURL)
}

class Demo extends React.Component { 
    render() {
        return (
            <ImageUploader
                onUpload={uploadImage}
                onRender={(props, state) => {
     
                // render customized child image state 
                if (props.image) {
                    return (
                        <div style={{backgroundImage: `url(${props.image})`}}>
                            <button onClick={props.onRequestRemove}>Remove</button>
                            {props.error && <div>An error occurred</div>}
                        </div>
                    )
                }
     
                // render default child drag target 
                return (
                    <div>
                        <button onClick={props.onUploadPrompt}>Upload</button>
                    </div>
                )
            }} />
        )
    }
}

class Camera extends React.Component {
    render() {
        return(
            <div>
                <div className="picContainer">
                    <input type="file" id="mypic" accept="image/*"></input>
                    <span htmlFor="mypic" className="icon fui-photo"></span>
                </div>
                <Demo />
            </div>
        )
    }
}


class Pic extends React.Component { 
    constructor(props, context) {
        super(props, context);
        this.state = {
            image: null,
        };
    }

    bro() {
        alert("bro");
    }

    getUrl() {
        let raw = $("#mypic").val().toString()
        let fileName = raw.split("fakepath")[1]
        let base_url = "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Input/"
        this.setState({ image: base_url + fileName })
    }

    changeImage(a) {
        console.log(a);
        this.setState({ image: a });
    }
    render() {
        console.log(this.state.image);
        if (this.state.image == null) {
            return (
                <div className="picContainer">
                    <input type="file" id="mypic" accept="image/*" onChange={ this.getUrl.bind(this)  }></input>
                    ///<label htmlFor="mypic" className="icon fui-photo"></label>
                </div>
            )
        } else {
            return (
                <div>
                    <img className="selectedImage" src={ this.state.image }></img>
                    <div className="picContainer">
                        <input type="file" id="mypic" accept="image/*"></input>
                        <label htmlFor="mypic" className="icon fui-photo"></label>
                    </div>
                </div>
            )
        }
    }
}

//export default Pic
export default Demo
