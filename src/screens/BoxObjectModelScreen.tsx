import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={ styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }, 
  title: {
    // padding: 50,
    // marginRight:       10,
    // marginLeft:        10,
    // width: 150,
    paddingHorizontal: 20,
    paddingVertical:   20,
    fontSize:          40,
    marginHorizontal:  90,
    borderWidth:       1,

    }
});

