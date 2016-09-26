import React from "react";
import ReactDOM from "react-dom";

class NavBar extends React.Component {
    changeScreen(a) {
        console.log(a)
        this.props.changeScreen(a)
        console.log("done with internal changeScreen")
    }

    render() {
        console.log("this is the nav");
        console.log(this.props.location);
        if (this.props.location == "home") {
            return(
                <header className="bar bar-nav">
                    <h2 className="title">Dreamage</h2>
                </header>
            )
        } else {
            return(
                <header className="bar bar-nav">
                    <span className="clickable btn pull-left" onClick={ this.changeScreen.bind(this, -1) }>BACK</span>
                    <h2 className="title">Dreamage</h2>
                    <span className="clickable btn pull-right" onClick={ this.changeScreen.bind(this, 1) }>NEXT</span>
                </header>
            )
        }
    }
}

export default NavBar
