import React from "react";
import ReactDOM from "react-dom";
import Dropbox from "dropbox";
import $ from "jquery";

class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            dropBoxLinks: ["https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/donelli.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/groening.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/lundstroem.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/picasso.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/skrik.jpg"]
        }
    }

    dream(e) {
        this.props.dream(e)
    }

    render() {
        let listOfFilters = []
        this.state.dropBoxLinks.map((x) => listOfFilters.push(<input type="image" form="form" onClick={ this.dream.bind(this) } className="filter clickable" src={ x }></input>))
        return(
            <div className="filters-container">
                { listOfFilters }
            </div>
        )
    }
}

export default Filters
