import { Scribble } from 'phosphor-react-native'
import { useRef, useState, useEffect, useCallback } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
import { NitroGlassView } from 'react-native-nitro-glass'
import { useThemeContext } from '../../providers/ThemeProvider'

type Props = {
  glassColor: string
}
export function DragglableGlassView({
  children,
  glassColor,
}: React.PropsWithChildren<Props>) {
  const [isGestureActive, setIsGestureActive] = useState(false)
  const [key, setKey] = useState(0)

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  const lastPosition = useRef({ x: 0, y: 0 })
  const animationRef = useRef<Animated.CompositeAnimation | null>(null)

  const MOVEMENT_LIMIT = 50

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.stop()
      animationRef.current = null
    }

    if (isGestureActive) {
      pan.setValue({ x: 0, y: 0 })
      pan.setOffset({ x: 0, y: 0 })
      lastPosition.current = { x: 0, y: 0 }
      setIsGestureActive(false)

      setKey(prev => prev + 1)
    }
  }, [glassColor])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.stop()
      }
      pan.removeAllListeners()
    }
  }, [])

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        setIsGestureActive(true)

        pan.extractOffset()
      },

      onPanResponderMove: (_, gestureState) => {
        const limitedX = Math.max(
          -MOVEMENT_LIMIT,
          Math.min(MOVEMENT_LIMIT, gestureState.dx),
        )
        const limitedY = Math.max(
          -MOVEMENT_LIMIT,
          Math.min(MOVEMENT_LIMIT, gestureState.dy),
        )
        pan.setValue({
          x: limitedX,
          y: limitedY,
        })

        lastPosition.current = { x: limitedX, y: limitedY }
      },

      onPanResponderRelease: () => {
        setIsGestureActive(false)
        pan.flattenOffset()

        animationRef.current = Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          tension: 120,
          friction: 8,
          useNativeDriver: true,
        })

        animationRef.current.start(() => {
          animationRef.current = null
          lastPosition.current = { x: 0, y: 0 }
        })
      },

      onPanResponderTerminate: () => {
        setIsGestureActive(false)
        pan.flattenOffset()

        animationRef.current = Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          tension: 120,
          friction: 8,
          useNativeDriver: true,
        })

        animationRef.current.start(() => {
          animationRef.current = null
          lastPosition.current = { x: 0, y: 0 }
        })
      },
    }),
  ).current

  return (
    <Animated.View
      key={key}
      style={[
        styles.animatedWrapper,
        {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <NitroGlassView
        effect="clear"
        tintColor={glassColor}
        interactive
        style={styles.glassView}
        testID="draggable-glass"
      >
        {children}
      </NitroGlassView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  animatedWrapper: {
    width: 120,
    height: 120,
  },
  glassView: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
