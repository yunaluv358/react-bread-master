import React, {Component, useState} from 'react'
import JsonData from './vendor/data.json';
import { RootRouter } from "./RootRouter";

export const App = () => {
	const [landingPageData,setLandingPageData] = useState({})
	const getlandingPageData = () => {
		setLandingPageData(JsonData)
	}
	
	return (
		<div>
			<RootRouter />

		</div>
	)
}
