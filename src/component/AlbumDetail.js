import React from 'react'
import { Text , Image , View , Linking } from 'react-native'
import Card from './Card'
import Cardsection from './Cardsection'
import Button from './Button'



const AlbumDetail = ({album}) =>{
	const {title,artist,thumbnail_image,image,url}=album
	const {headercontentstyle,thumbnailstyle,thumbnailcontentstyle,imagestyle}=style
	return(
		<Card>
			<Cardsection>
				<View style={thumbnailcontentstyle}>
					<Image source={{uri:thumbnail_image}} style={thumbnailstyle}/>
				</View>
				<View style={headercontentstyle}>
					<Text>
						{title}
					</Text>
					<Text>
						{artist}
					</Text>
				</View>
			</Cardsection>

			<Cardsection>
				<Image source={{uri:image}} style={imagestyle}/>
			</Cardsection>

			<Cardsection>
				<Button onPress={()=> Linking.openURL(url)}> buy now! </Button>
			</Cardsection>
		</Card>
	)
}

const style={
	headercontentstyle:{
		flexDirection:'column',
		justifyContent:'space-around'
	},
	thumbnailstyle:{
		height:50,
		width:50
	},
	thumbnailcontentstyle:{
		justifyContent:'center',
		alignItems:'center',
		marginLeft:10,
		marginRight:10,

	},
	imagestyle:{
		height:300,
		flex:1,
		width:null
	}
}

export default AlbumDetail