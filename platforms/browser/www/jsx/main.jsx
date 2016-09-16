import React from "react";
import ReactDOM from "react-dom";
import Sharing from "./sharing";

class App extends React.Component {
    render() {
        return(
            <div>
                <h2>Dreamage</h2>
                <Sharing />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"))
