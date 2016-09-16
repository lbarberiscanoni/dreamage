import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    shareWithFB() {
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    shareWithInsta() {
        window.plugins.socialsharing.shareViaInstagram('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    shareWithTwitter() {
        window.plugins.socialsharing.shareViaTwitter('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    bro() {
        alert("bro");
    }

    render() {
        console.log(window)
        return(
            <div>
                <h2>Test 3</h2>
                <button onClick={ this.shareWithFB }>
                    Facebook
                </button>
                <button onClick={ this.shareWithInsta }>
                    Instagram
                </button>
                <button onClick={ this.shareWithTwitter }>
                    Twitter
                </button>
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("main"))
