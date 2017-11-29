/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView , Text} from 'react-native';
import AlbumList from './src/component/AlbumList'
import Header from './src/component/Header'

const App = () =>{
  return(
    <ScrollView>
      <Header headertext={'Albums'}/>
      <AlbumList/>
    </ScrollView>
    )
}

export default App
