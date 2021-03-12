import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [password, setPassword] = useState(''); 
  const [size, setSize]= useState(10);

  function generatePass(){
    alert(size)
  }
  
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
          value={size}
          onValueChange={(valor) => setSize(valor)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.TextButtom}>GERAR SENHA</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}> {password} </Text>
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
    marginBottom: 25,
  },
  title:{
    color:'#000',
    fontSize:30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7,

  },
  button:{
    backgroundColor: '#ffa200',
    borderRadius: 10,
    width: '80%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  TextButtom:{
    color:'#FFF',
    fontSize:15,
    fontWeight: 'bold'
  },
  password:{
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  }
});
