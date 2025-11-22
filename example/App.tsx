import React from 'react'
import { View, StyleSheet } from 'react-native'

import { PlayerGlass } from './src/components/PlayerGlass'
import { ButtonSectionExample } from './src/components/ButtonGlass'
import { SwitchGlassButton } from './src/components/SwitchGlassButton'
import { WidgetGlassExample } from './src/components/WidgetGlass'

import { DragglableGlassViewExample } from './src/components/DragglableGlassView/DragglaeGlassViewExample'
import { ThemeProvider } from './src/providers/ThemeProvider'
import { BackgroundOverlay } from './src/components/BackgroundOverlay/BackgroundOverlay'

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <BackgroundOverlay />

      <View style={styles.container}>
        <View>
          <SwitchGlassButton />
        </View>

        <View style={{ flex: 1, gap: 40, alignItems: 'center' }}>
          <WidgetGlassExample />
          <DragglableGlassViewExample />
        </View>
        <ButtonSectionExample />
        <PlayerGlass />
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,

    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 60,
  },
})

export default App
