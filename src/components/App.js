/**Created by Charuka Karunanayake*/

import React from 'react';
import Row from './RowComponent';
import Map from './Map';

export default class App extends React.Component{

    render(){
        return(
            <div>
                <Row title="World map Sample">
                    <Map width={800} height={450}/>
                </Row>
            </div>
        );
    }
}


