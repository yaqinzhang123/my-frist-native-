import React from 'react'
import { Text , View } from 'react-native'




const Card = ( props) =>{
	const {contanierstyle} = style
	return(
		<View style={contanierstyle}>
			{props.children}
			
		</View>
	)
};

const style={
	contanierstyle:{
		borderWidth:1,
		borderRadius:2,
		borderColor:'#ddd',
		borderBottomWidth:0,
		shadowColor:'#000',
		shadowOpacity:0.2,
		elevation:2,
		marginLeft:5,
		marginRight:5,
		marginTop:10

	}
}


export default Card