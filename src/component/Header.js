import React from 'react'
import { Text ,View } from 'react-native'


const Header = (props) =>{
	const {textstyle , viewstyle}=style
	return(
		<View style={viewstyle}>
			<Text style={textstyle}>{props.headertext}</Text>
		</View>
	)
};


const style={
	textstyle:{
		fontSize:20
	},
	viewstyle:{
		backgroundColor:'#F8F8F8',
		justifyContent:'center',
		alignItems:'center',
		height:60,
		paddingTop:20,
		shadowColor:'#000000',
		shadowOffset:{ width : 0, height : 2 },
		shadowOpacity:0.2,
		elevation:2,
		position:'relative',

	}
}

 export default Header