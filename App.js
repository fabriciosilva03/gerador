import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

import Icon from 'react-native-vector-icons/FontAwesome';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [password, setPassword] = useState(''); 
  const [size, setSize]= useState(10);

  function generatePass(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    
    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }
  
  return (
    <View style={styles.container}>
      <Image 
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}> {size} Caracteres</Text>
     

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.TextButtom}>GERAR SENHA</Text>
      </TouchableOpacity>

      {password !== '' &&(
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPass}> {password}  <Icon name="copy" size={18} color="#999" />
          </Text>
        </View>
      )}

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
  }, 
  

});
