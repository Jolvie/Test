import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View  } from 'react-native';
import Search from './Search'

export default function App() {
  return (
     
    <View style={styles.mainContainer}>
        <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer :{
    flex: 1,
    width: '100%' ,
    backgroundColor : '#eee'
  }
})

