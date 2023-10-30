import React from "react"
import { ScrollView, StatusBar, View, Text, Image, StyleSheet } from "react-native"

export default function App() {
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
