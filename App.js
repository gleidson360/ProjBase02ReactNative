import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native"
import { LightSensor } from 'expo-sensors';

export default function App() {

  const [{ illuminance }, definirIliminacao] = useState({ illuminance: 0 })

  useEffect(function() {
    LightSensor.addListener(alterarIluminacao)
  }, [])

  return <ScrollView>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFBEB"/>

    <View>
      <Text> Sensores do Smartphone! </Text>  
      <Text> Testando a Iluminação do ambiente! </Text>  
    </View>

  </ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
