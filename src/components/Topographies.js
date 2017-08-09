import React from 'react';
import {feature} from 'topojson-client';

class Topographies extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            topoGraphyPaths:props.topoGraphyPaths,
        };
    }

    getTopographyPaths(topojsonURL){
        if(!topojsonURL) return;

        const req= new XMLHttpRequest();
        req.open('GET',topojsonURL,true);


        req.onload=()=>{
            if(req.status===200){
                const topoGPaths=JSON.parse(req.responseText);
                this.setState({
                    topoGraphyPaths:feature(topoGPaths,topoGPaths.objects[Object.keys(topoGPaths.objects)[0]]).features,
                });
            }else {
                if(!this.props.onTopoGrahiesLoaded) return;
                this.props.onTopographyPathsLoaded(String(req.status));
            }
        };
    }



    render(){
        return(
            <g className="geographies">

            </g>
        );
    }

}


export default Topographies;