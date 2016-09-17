import React from "react";
import ReactDOM from "react-dom";
import Sharing from "./sharing";

class App extends React.Component {
    render() {
        console.log(navigator);
        return(
            <div>
                <h2>Dreamage</h2>
                <Sharing />
                <input type="file" id="mypic" accept="image/*"></input>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"))
