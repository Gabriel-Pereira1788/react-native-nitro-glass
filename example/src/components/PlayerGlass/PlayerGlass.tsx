import { Image, StyleSheet, Text, View } from 'react-native'
import { NitroGlassView } from 'react-native-nitro-glass'
import { useThemeContext } from '../../providers/ThemeProvider'

export function PlayerGlass() {
  const { theme } = useThemeContext()

  // Define text colors based on theme
  const textColors = {
    primary: theme === 'dark' ? '#fff' : '#000',
    secondary: theme === 'dark' ? '#ddddddcc' : '#666666cc',
    tertiary: theme === 'dark' ? '#b6b6b6' : '#666666',
  }

  return (
    <View style={styles.container}>
      <NitroGlassView effect="clear" interactive style={styles.glassView}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.albumImage}
            source={{
              uri: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <View style={styles.infoContainer}>
            <View>
              <Text style={[styles.songTitle, { color: textColors.primary }]}>
                Gimme Dat (feat. Wizkid)
              </Text>
              <Text style={[styles.artistName, { color: textColors.secondary }]}>
                Ayra Starr
              </Text>
            </View>

            <View style={styles.progressContainer}>
              <Text style={[styles.timeText, { color: textColors.tertiary }]}>0:32</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { backgroundColor: textColors.primary }]} />
              </View>
              <Text style={[styles.timeText, { color: textColors.tertiary }]}>3:32</Text>
            </View>
          </View>
        </View>
      </NitroGlassView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
  },
  glassView: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    gap: 10,
    flexDirection: 'row',
  },
  albumImage: {
    objectFit: 'cover',
    width: 80,
    borderRadius: 20,
    height: 80,
  },
  infoContainer: {
    flexGrow: 1,
    height: 90,
    marginTop: 9,
    gap: 10,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 15,
    fontWeight: '500',
  },
  progressContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timeText: {
    fontWeight: '600',
  },
  progressBar: {
    width: '55%',
    height: 4,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#b6b6b6',
  },
  progressFill: {
    width: '50%',
    height: '100%',
  },
})
