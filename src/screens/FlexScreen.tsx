import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={ styles.container}>
        <Text style={ styles.caja1 }>Caja 1</Text>
        <Text style={ styles.caja2 }>Caja 2</Text>
        <Text style={ styles.caja3 }>Caja 3</Text>
       

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // si le quitamos el tamaño del padre, los hijos determinaran su tamaño
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexWrap: 'wrap',
        // height: 300,
        // flexDirection: 'column',
        // flexDirection: 'row-reverse',
        // flexDirection: 'column-reverse',
        // flexDirection: 'row',
        //alignSelf hijo se superpone al justifyContent Padre.
        // justifyContent:'space-between',
        // justifyContent:'flex-start',
        // justifyContent:'flex-end',
        // justifyContent:'center',
        // justifyContent:'space-around',
        // justifyContent:'space-between',
        // justifyContent:'space-evenly',
        // alignItems:'flex-start',
        // alignItems:'stretch',
        // alignItems:'baseline',
        // alignItems:'flex-end',
        // alignItems:'center',
        // alignContent: 'space-between',
        
        
    }, // los hijos se adaptan al tamaño del padre
    caja1: { 
        // 3 + 2 + 1 = 6 = 100%
        // flex:3, 
        // width: 100,
        // height: 100,
        // flex: 1,

        //alignSelf usa opciones individuales de flex padre
        // alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf: 'center',
        // padding: 20,
    },
    caja2: {
        // width: 100,
        // height: 100,
        // flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf: 'flex-start',
    },
    caja3: {
        // width: 100,
        // height: 100,
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30,
        // alignSelf: 'flex-end',
    }
});

// para expandir todo se puede usar flex: 1, per cuando hay 
// más elementos, el flex será compartido por los hijos.

// align-item tiene la opción por defecto stretch.

// el alignSelf sirve para sobrescribir cierto tipo de propiedades, 
// que el padre le esta imponiendo a sus hijos.

