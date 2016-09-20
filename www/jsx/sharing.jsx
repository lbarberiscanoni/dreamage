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
            <div className="icon-container">
                <span onClick={ this.shareWithFB } className="icon fui-facebook"></span>
                <span onClick={ this.shareWithInsta } className="icon fui-instagram"></span>
                <span onClick={ this.shareWithTwitter } className="icon fui-twitter"></span>
            </div>
        )
    }
}

export default Sharing
