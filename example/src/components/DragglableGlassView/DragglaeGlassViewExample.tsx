import { StyleSheet, View } from 'react-native'
import { DragglableGlassView } from './DragglableGlassView'
import { GlobeSimple, Scribble } from 'phosphor-react-native'
import { NitroGlassContainer } from 'react-native-nitro-glass'
import { useThemeContext } from '../../providers/ThemeProvider'

export function DragglableGlassViewExample() {
  const { theme } = useThemeContext()
  const glassColor = theme === 'dark' ? '#2f2f2f' : '#ffffff'
  const iconColor = theme === 'dark' ? '#ffffff' : '#2f2f2f'
  return (
    <NitroGlassContainer style={styles.container} spacing={60}>
      <DragglableGlassView glassColor={glassColor}>
        <Scribble size={70} color={iconColor} weight="bold" />
      </DragglableGlassView>
      <DragglableGlassView glassColor={glassColor}>
        <Scribble size={70} color={iconColor} weight="bold" />
      </DragglableGlassView>
    </NitroGlassContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
})
