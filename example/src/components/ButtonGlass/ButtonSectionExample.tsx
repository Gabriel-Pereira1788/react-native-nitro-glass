import { StyleSheet, View } from 'react-native'
import { ButtonGlass } from './ButtonGlass'
import { NitroGlassContainer } from 'react-native-nitro-glass'
import { useThemeContext } from '../../providers/ThemeProvider'

export function ButtonSectionExample() {
  const { theme} = useThemeContext();
  return (
    <View style={styles.container}>
      <ButtonGlass textColor={theme === 'dark' ? "#fff" : "#000"} title="Clear" effect="clear" />
      <ButtonGlass title="Regular" effect="regular" />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
  },
})
