import React from "react";
import ReactDOM from "react-dom";

class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            dropBoxLinks: ["https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/donelli.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/groening.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/lundstroem.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/picasso.jpg", "https://dl.dropboxusercontent.com/u/83360548/Dreamage/Filters/skrik.jpg"]
        }
    }

    bro() {
        alert("fuck");
    }

    render() {
        let listOfFilters = []
        this.state.dropBoxLinks.map((x) => listOfFilters.push(<img onClick={ this.bro.bind(this) } className="filter clickable" src={ x }></img>))
        return(
            <div className="filters-container">
                { listOfFilters }
            </div>
        )
    }
}

export default Filters
