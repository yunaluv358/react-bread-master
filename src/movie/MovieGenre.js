import React from 'react';
import Movies from '../vendor-test/movies';
import {Navigation} from "../common/HomeMain";

export const MovieGenre = () => {
    return <>
	    <Navigation/>
        <main className="container" >
	        <div style={{marginTop: '150px'}}>
            <Movies />
	        </div>
        </main></>
}

