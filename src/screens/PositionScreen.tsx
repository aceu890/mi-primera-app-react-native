import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style= { styles.container }>

        <View style={ styles.cajaPinkExtend} />
        <View style={ styles.cajaMorada} />
        <View style={ styles.cajaNaranja} />
        <View style={ styles.cajaVerde} />
        <View style={ styles.cajaRoja} />

    </View>
  )
}

// todos los elementos tiene position : relative por defecto
const styles = StyleSheet.create({
    container: {
        // width: 300,
        // height: 300,
        flex: 1, 
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        // top: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        // position:'absolute',
        right:0,
        bottom:0,
        // top: -200,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        right:0,
        bottom:0,
        // top: -200,
    },
    cajaRoja: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        position:'absolute',
        right:0,
        // bottom:0,
        // top: -200,
    },
    cajaPinkExtend: {
        // width: 100,
        // height: 100,
        backgroundColor: 'pink',
        borderWidth: 10,
        borderColor: 'white',
        // position:'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0,
        ...StyleSheet.absoluteFillObject //remplaza los comentarios de arriba

    }
});



