import { Moon, Sun } from 'phosphor-react-native'
import { Pressable, View, Animated } from 'react-native'
import { StyleSheet } from 'react-native'
import { NitroGlassView } from 'react-native-nitro-glass'
import { useRef, useState } from 'react'
import { useThemeContext } from '../../providers/ThemeProvider'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export function SwitchGlassButton() {
  const { onChangeTheme } = useThemeContext()
  const [isLight, setIsLight] = useState(false)

  const translateX = useRef(new Animated.Value(0)).current

  const handleToggle = () => {
    const newValue = !isLight

    setIsLight(newValue)
    onChangeTheme(newValue ? 'light' : 'dark')

    Animated.spring(translateX, {
      toValue: newValue ? 58 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 65,
    }).start()
  }

  return (
    <View style={styles.container}>
      <PressableAnimated
        style={[
          styles.glassContainer,
          {
            transform: [{ translateX }],
          },
        ]}
        onPress={handleToggle}
      >
        <NitroGlassView
          interactive
          effect="clear"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 100,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isLight ? (
              <Sun size={25} color="#FFD700" weight="fill" />
            ) : (
              <Moon size={25} color="#fff" weight="fill" />
            )}
          </View>
        </NitroGlassView>
      </PressableAnimated>
      <Pressable
        style={[
          styles.element,
          { backgroundColor: isLight ? '#fff' : '#2F2F2F' },
        ]}
        onPress={handleToggle}
      >
        <Moon
          size={25}
          color={isLight ? '#666' : '#fff'}
          weight={isLight ? 'regular' : 'fill'}
        />
        <Sun
          size={25}
          color={isLight ? '#FFD700' : '#666'}
          weight={isLight ? 'fill' : 'regular'}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  glassContainer: {
    position: 'absolute',
    left: 2,
    zIndex: 100,
    width: 50,
    height: 90, // Ajustei para 50 para ficar quadrado
  },
  element: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: 110,
    height: 50,
    borderRadius: 30,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
})
