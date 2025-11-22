import { Text, View } from 'react-native'
import { NitroGlassView } from 'react-native-nitro-glass'

type Props = {
  effect?: 'regular' | 'clear'
  glassColor?: string
}

export function WidgetGlass({
  effect = 'clear',
  glassColor,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <View style={{ flexGrow: 1, height: 200 }}>
      <NitroGlassView
        tintColor={glassColor}
        effect={effect}
        interactive={true}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 40,
        }}
      >
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          {children}
        </View>
      </NitroGlassView>
    </View>
  )
}
