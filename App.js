import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native"
import { LightSensor } from 'expo-sensors';

export default function App() {

  const [{ illuminance }, definirIliminacao] = useState({ illuminance: 0 })

  useEffect(function() {
    LightSensor.addListener(definirIliminacao)
  }, [])

  function VerificarLuz(escuro, claro) {
    return illuminance > 20 ? escuro : claro
  }
  

  return <ScrollView style={{ backgroundColor: VerificarLuz("#FFFBEB", "#20262E") }} >
    <StatusBar barStyle={ VerificarLuz("dark-content", "light-content") }
      backgroundColor={ VerificarLuz("#FFFBEB", "#20262E") } />

    <View>
      <Text 
        style={{ color: VerificarLuz("#222", "#fff"),
        fontSize: 32,
        textAlign: "center" }}> Sensores do Smartphone! 
      </Text>

      <Text> { illuminance } </Text>  

      <Image source={{ uri: "http://picsum.photos/200/200" }} style={{ height: 200 }} />
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
