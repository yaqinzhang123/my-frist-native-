import React from 'react'
import {  View } from 'react-native'
import AlbumDetail from './AlbumDetail'
import axios from 'axios'



class AlbumList extends React.Component{
	// constructor(){
	// 	super()
	// 	this.state={
	// 		album:[]
	// 	}
	// }
	state = { album : [] }

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response=>this.setState({album:response.data}))
	}

	renderAlbum(){
		return this.state.album.map(album => 
			<AlbumDetail key={album.title} album={album}/>)
	}

	render(){
		return(
			<View>
				{this.renderAlbum()}
				
			</View>
		)
	}
}

export default AlbumList