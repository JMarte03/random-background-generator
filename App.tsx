import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { contrastText } from './contrast'

export default function App() {

  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const generateBgColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
  }

  const textColor = contrastText(randomBackground);

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateBgColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.colorTxt, {color: textColor}]} selectable>{randomBackground}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  actionBtn: {
    borderRadius: 8,
    backgroundColor: "#2B2B2B",
    paddingVertical: 15,
    paddingHorizontal: 40,
    opacity: 0.9
  },
  actionBtnTxt: {
    fontWeight: '300',
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  colorTxt: { 
    fontSize: 18,
  }
})