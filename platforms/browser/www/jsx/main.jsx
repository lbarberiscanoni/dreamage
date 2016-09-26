import React from "react";
import ReactDOM from "react-dom";
import Sharing from "./sharing";
import Filters from "./filters";
import Upload from "./upload";
import NavBar from "./navBar";
import Canvas from "./canvas";
import Camera from "./camera";

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
        this.setState({ image: new_image })
    }

    render() {
        switch(this.state.location) {
            case "home":
                return(
                    <div>
                        <NavBar location={ this.state.location } changeScreen={ this.changeScreen.bind(this) } />
                        <Canvas image={ this.state.image } />
                        <Camera changeScreen={ this.changeScreen.bind(this) } changeImage={ this.changeImage.bind(this) }/>
                    </div>
                )
            case "filter":
                return(
                    <div>
                        <NavBar location={ this.state.location } changeScreen={ this.changeScreen.bind(this) } />
                        <Canvas image={ this.state.image } />
                        <Filters />
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
