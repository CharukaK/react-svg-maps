import React from 'react';


class Marker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            pressed: false
        };

        this.handleMouseClick=this.handleMouseClick.bind(this);
        this.handleMouseDown=this.handleMouseDown.bind(this);
        this.handleMouseEnter=this.handleMouseEnter.bind(this);
        this.handleMouseExit=this.handleMouseExit.bind(this);
        this.handleMouseUp=this.handleMouseUp.bind(this);
    }

    handleMouseClick(evt) {
        if (!this.props.onClick) return;
        evt.persist();

        return this.props.onClick &&
            this.props.onClick(this.props.marker, this.props.projection()(this.props.marker.coordinates), evt);

    }

    handleMouseEnter(evt) {
        evt.persist();
        this.setState({
            hover: true
        }, () => this.props.onMouseEnter && this.props.onMouseEnter(this.props.marker, evt));


    }

    handleMouseExit(evt) {
        evt.persist();
        this.setState({
            hover: false,
            pressed: false
        }, () => this.props.onMouseExit && this.props.onMouseExit(this.props.marker, evt));
    }

    handleMouseDown(evt) {
        evt.persist();
        this.setState({
            pressed: true
        }, () => this.props.onMouseDown && this.props.onMouseDown(this.props.marker, evt));
    }

    handleMouseUp(evt) {
        evt.persist();
        this.setState({
            pressed: false
        }, () => this.props.onMouseUp && this.props.onMouseUp(this.props.marker, evt));

    }


    render() {
        return (
            <g className="marker"
               style={this.props.style[this.state.pressed || this.state.hover ? (this.state.pressed ? 'pressed' : 'hover') : 'default']}
               onMouseUp={this.handleMouseUp}
               onMouseDown={this.handleMouseDown}
               onMouseLeave={this.handleMouseExit}
               onMouseEnter={this.handleMouseEnter}
               onClick={this.handleMouseClick}
            >
                {this.props.children}
            </g>
        );
    }
}



export default Marker;