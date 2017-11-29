import React from 'react'
import { Text , View } from 'react-native'


const Cardsection = (props) =>{
	return(
		<View style={style.containerstyle}>
			{props.children}
		</View>
	)
}

const style={
	containerstyle:{
		borderBottomWidth:1,
		padding:5,
		backgroundColor:'#fff',
		justifyContent:'flex-start',
		flexDirection:'row',
		borderColor:'#ddd',
		position:'relative'
	}
}

export default Cardsection