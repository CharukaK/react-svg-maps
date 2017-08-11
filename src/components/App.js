/**Created by Charuka Karunanayake*/

import React from 'react';
import Row from './RowComponent';
import Map from './Map';
import Topographies from './Topographies';
import Topography from './Topography';


export default class App extends React.Component{

    render(){
        return(
            <div>
                <Row title="World map Sample">
                    <Map width={800} height={450} config={{scale:300,xOffset:500,yOffset:200}}>
                        <Topographies topojsonURL='./api/usa'>
                            {(topographies,projection)=>topographies.map((topography,i)=>(
                                <Topography
                                    key={i}
                                    topography={topography}
                                    projection={projection}
                                    style={{
                                        default: {
                                            fill: '#ECEFF1',
                                            stroke: '#607D8B',
                                            strokeWidth: 0.75,
                                            outline: 'none',
                                        },
                                        hover: {
                                            fill: '#607D8B',
                                            stroke: '#607D8B',
                                            strokeWidth: 0.75,
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: '#FF5722',
                                            stroke: '#607D8B',
                                            strokeWidth: 0.75,
                                            outline: 'none',
                                        },
                                    }}
                                />
                            ))}
                        </Topographies>
                    </Map>
                </Row>
            </div>
        );
    }
}


