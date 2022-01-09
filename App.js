/*
* File: App.js
* Author: Steili Roland
* Copyright: 2022, Steili Roland
* Group: Szoft II/N
* Date: 2022-01-09
* Github: https://github.com/SteiliRoland/pentagon
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

console.log("Leírás: A program kiszámolja egy szabályos ötszög területét\nNév: Steili Roland\nDátum: 2022.01.09.");

export default function App() {

  const [side, setSide] = useState(0);
  const [area, setArea] = useState(0);

  function calcArea(){
    let result = (5*Math.pow(side, 2)*Math.tan(54*Math.PI/180))/4;
    setArea(parseFloat(result).toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text >Pentagon</Text>
      <View >
        <Text >Oldal:</Text>
        <TextInput placeholder="oldal" onChangeText={ side => setSide(side) } />
        <Button title="Számít" onPress={calcArea}/>
      </View>
      <Text >Terület: {area}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
