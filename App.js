import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}> 12 Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"

        />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo:{
    marginBottom: 60,
  },
  title:{
    color:'#0000FF'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 7
  },
});
