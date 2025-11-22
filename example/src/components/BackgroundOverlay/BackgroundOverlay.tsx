import React, { useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, ImageBackground } from 'react-native'
import { useThemeContext } from '../../providers/ThemeProvider'

const lightWallpaper =
  'https://cdn.abacus.ai/images/01995aee-6281-4cfa-aaa0-ff2d70911868.png'
const darkWallpaper =
  'https://i.pinimg.com/736x/9b/a9/b2/9ba9b2fc7001b889bf87823358d2a697.jpg'

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground)

export function BackgroundOverlay() {
  const { theme } = useThemeContext()

  const fadeAnim = useRef(new Animated.Value(0)).current
  const [prevImage, setPrevImage] = useState(
    theme === 'light' ? lightWallpaper : darkWallpaper,
  )
  const [nextImage, setNextImage] = useState(prevImage)

  useEffect(() => {
    const newImage = theme === 'light' ? lightWallpaper : darkWallpaper
    setNextImage(newImage)

    fadeAnim.setValue(0)

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setPrevImage(newImage)
    })
  }, [theme])

  return (
    <>
      <ImageBackground source={{ uri: prevImage }} style={styles.background} />

      <AnimatedImageBackground
        source={{ uri: nextImage }}
        style={[styles.background, { opacity: fadeAnim }]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})
