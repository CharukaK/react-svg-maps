import React from 'react';
import {feature} from 'topojson-client';
import PropTypes from 'prop-types';

class Topographies extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            topoGraphyPaths:[]
        };
        
    }

    getTopographyPaths(topojsonURL){
        if(!topojsonURL) return;

        const req= new XMLHttpRequest();
        req.open('GET',topojsonURL,true);


        req.onload=()=>{
            if(req.status >= 200 && req.status < 400){
                const topoGPaths=JSON.parse(req.responseText);
                this.setState({
                    topoGraphyPaths:feature(topoGPaths,topoGPaths.objects[Object.keys(topoGPaths.objects)[0]]).features,
                });
                // console.log(this.state.topoGraphyPaths);
                console.log(this.state.topoGraphyPaths);
            }
        };

        req.onerror=()=>{
            console.log('There was a connection error');
        };

        req.send();

    }




    componentDidMount(){
        this.getTopographyPaths(this.props.topojsonURL);
    }

    

    render(){
        return(
            <g className="geographies">
                 {this.props.children(this.state.topoGraphyPaths,this.props.projection)} 
            </g>
        );
    }

}


Topographies.propTypes={
    children:PropTypes.func.isRequired
};

export default Topographies;

