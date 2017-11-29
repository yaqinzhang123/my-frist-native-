import React from 'react'
import {Text , TouchableOpacity } from 'react-native'



const Button = ({onPress , children}) =>{
	return(
		<TouchableOpacity style={style.buttonstyle} onPress={onPress}>
			<Text style={style.textstyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

const style={
	textstyle:{
		alignSelf:'center',
		color:'#007aff',
		fontSize:16,
		fontWeight:'600',
		paddingTop:10,
		paddingBottom:10
	},
	buttonstyle:{
		flex:1,
		alignSelf:'stretch',
		backgroundColor:'#ffff',
		borderRadius:5,
		borderWidth:1,
		borderColor:'#007aaf',
		marginLeft:5,
		marginRight:5
	}
}


export default Button