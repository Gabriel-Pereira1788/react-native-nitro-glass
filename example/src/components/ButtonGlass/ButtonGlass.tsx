import { ButtonProps, Pressable, Text, View } from 'react-native'
import { NitroGlassView } from 'react-native-nitro-glass'

export interface ButtonGlassProps {
  title: string
  textColor?: string
  glassTintColor?: string
  effect?: 'regular' | 'clear'
  onPress?: () => void
}
export function ButtonGlass({
  title,
  textColor,
  effect = 'regular',
  glassTintColor,
  onPress,
}: ButtonGlassProps) {
  return (
    <Pressable onPress={onPress} style={{ flexGrow:1, height: 50 }}>
      <NitroGlassView
        interactive
        tintColor={glassTintColor}
        effect={effect}
        style={{ width: '100%', height: '100%', borderRadius: 20 }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: textColor, fontWeight: '600' }}>{title}</Text>
        </View>
      </NitroGlassView>
    </Pressable>
  )
}
