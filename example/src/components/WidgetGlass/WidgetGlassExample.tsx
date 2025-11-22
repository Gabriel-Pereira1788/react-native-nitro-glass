import { Text, View, StyleSheet } from 'react-native'
import { WidgetGlass } from './WidgetGlass'
import { CloudSun } from 'phosphor-react-native'
import { useThemeContext } from '../../providers/ThemeProvider'

export function WidgetGlassExample() {
  const { theme } = useThemeContext()

  const textColor = theme === 'light' ? '#2f2f2f' : '#fff'
  return (
    <View style={styles.container}>
      <WidgetGlass>
        <Text style={[styles.text, { color: textColor }]}>Toronto</Text>
        <Text style={{ color: textColor, fontSize: 10 }}>Today</Text>
        <CloudSun size={60} color={textColor} style={{ marginTop: 10 }} />
        <Text style={[styles.text, { color: textColor }]}>21°</Text>
      </WidgetGlass>
      <WidgetGlass effect="regular">
        <Text style={[styles.text, { color: textColor }]}>Toronto</Text>
        <Text style={{ color: textColor, fontSize: 10 }}>Today</Text>
        <CloudSun size={60} color={textColor} style={{ marginTop: 10 }} />
        <Text style={[styles.text, { color: textColor }]}>21°</Text>
      </WidgetGlass>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
