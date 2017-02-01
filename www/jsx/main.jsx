import React from "react";
import ReactDOM from "react-dom";
import Sharing from "./sharing";
import Filters from "./filters";
import Upload from "./upload";
import NavBar from "./navBar";
import Canvas from "./canvas";
import Camera from "./camera";
import $ from "jquery";
import firebase from "firebase";

let config = {
    apiKey: "AIzaSyDjlIjpH-bZHbTr5Oi1rA2dHJGc6To-h1g",
    authDomain: "ios-db.firebaseapp.com",
    databaseURL: "https://ios-db.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "615131334244"
};

let mainApp = firebase.initializeApp(config);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            location: "home",
            image: "https://media.giphy.com/media/y1VEmPmG3t1VC/giphy.gif",
        }
    }

    changeScreen(direction) {
        let locations = ["home", "filter", "share"]
        let current = this.state.location 
        let currentIndex = locations.indexOf(current)
        let new_screen = locations[currentIndex + direction]
        this.setState({location: new_screen })
    }

    changeImage(new_image) {
        let reader = new FileReader();
        reader.readAsDataURL(new_image)
        reader.onloadend = (e) => {
            let af = e.target.result;
            this.setState({"image": af });
        }
    }

    dream_old(e) {
        e.preventDefault();
        let form_data = new FormData($("#form")[0]);
        let processedPicURL = ""
        $.ajax({
            method: "POST",
            url: "http://fac18736.ngrok.io/dream",
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'json',
            success: function(data){
                console.log(data)
                processedPicURL = data["url"]
                //download the image on the user's phone
                let link = document.createElement("a");
                link.download = data["id"];
                link.href = data["url"];
                link.click();
                link.remove();
            }
        });

        this.setState({"image": processedPicURL});
    }

    dream_aws_version(e) {
        e.preventDefault();
        let form_data = new FormData($("#form")[0]);
        let processedPicURL = ""
        $.ajax({
            method: "POST",
            url: "http://fac18736.ngrok.io/dream",
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'json',
            success: function(data){
                console.log(data)
                processedPicURL = data["url"]
                //download the image on the user's phone
                cordova.plugins.imgDownloader.downloadWithUrl(processedPicURL, () => { alert("success") }, () => { alert("error") }); 
            }
        })
    }


    dream(e) {
        e.preventDefault();
        let form_data = new FormData($("#form")[0]);
        let processedPicURL = ""
        $.ajax({
            method: "POST",
            url: "http://fac18736.ngrok.io/dream",
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'json',
            success: function(data){
                console.log(data)
                processedPicURL = data["url"]
                //download the image on the user's phone
                cordova.plugins.imgDownloader.downloadWithUrl(processedPicURL, () => { alert("success") }, () => { alert("error") }); 
            }
        })
    }


    render() {
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <NavBar location={ this.state.location } changeScreen={ this.changeScreen.bind(this) } />
                        <Canvas image={ this.state.image } />
                        <form method="POST" id="form" encType="multipart/form-data">
                            <Camera changeScreen={ this.changeScreen.bind(this) } changeImage={ this.changeImage.bind(this) }/>
                        </form>
                    </div>
                )
            case "filter":
                console.log(this.state);
                return(
                    <div>
                        <NavBar location={ this.state.location } changeScreen={ this.changeScreen.bind(this) } />
                        <Canvas image={ this.state.image } />
                        <form method="POST" id="form" encType="multipart/form-data">
                            <Camera changeImage={ this.changeImage.bind(this) }/>
                        </form>
                        <Filters dream={ this.dream.bind(this) } pic={ this.state.pic_name }/>
                    </div>
                )
            case "share":
                return(
                    <div>
                        <NavBar location={ this.state.location } changeScreen={ this.changeScreen.bind(this) } />
                        <Canvas image={ this.state.image } />
                        <Sharing />
                    </div>
                )
        }
    }
}

ReactDOM.render(<App />, document.getElementById("main"))
