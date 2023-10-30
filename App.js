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
        style={{ 
          color: VerificarLuz("#222", "#fff"),
          fontSize: 32,
          textAlign: "center" }}> 
        Sensores do Smartphone! 
      </Text>

      <Text
        style={{
          color: VerificarLuz("#222", "#fff"),
          fontSize: 16,
          textAlign: "center" }}> 
          { illuminance } 
      </Text>  

      <Image 
        source={{ uri: VerificarLuz(
          "https://i.ibb.co/0GGQPcg/1.jpg",
          "https://i.ibb.co/v4Y1fyG/2.jpg")
        }} 
        style={{ height: 200 }} />
        
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
