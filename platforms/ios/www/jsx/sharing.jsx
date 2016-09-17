import React from "react";
import ReactDOM from "react-dom";

class Sharing extends React.Component {
    shareWithFB() {
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    shareWithInsta() {
        window.plugins.socialsharing.shareViaInstagram('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    shareWithTwitter() {
        window.plugins.socialsharing.shareViaTwitter('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})
    }

    render() {
        return(
            <div>
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

export default Sharing
