import React from 'react';
import PropTypes from 'prop-types';


class Map extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`} >

            </svg>
        );
    }
}


Map.defaultProps={
    width:800,
    height:450
};

Map.propTypes={
  width:PropTypes.number.isRequired,
  height:PropTypes.number.isRequired
};




export default Map;