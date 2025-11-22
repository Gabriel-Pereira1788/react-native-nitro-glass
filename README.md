# react-native-nitro-glass


https://github.com/user-attachments/assets/f962a8af-3472-416a-aca6-ac776a5ac5f1


A native iOS library that brings LiquidGlass effects to React Native through Nitro Modules. Implement stunning glassmorphism (frosted glass) effects with native performance, supporting blur, transparency, and customizable tint colors.

[![Version](https://img.shields.io/npm/v/react-native-nitro-glass.svg)](https://www.npmjs.com/package/react-native-nitro-glass)
[![Downloads](https://img.shields.io/npm/dm/react-native-nitro-glass.svg)](https://www.npmjs.com/package/react-native-nitro-glass)
[![License](https://img.shields.io/npm/l/react-native-nitro-glass.svg)](https://github.com/gabrielploomes/react-native-nitro-glass/LICENSE)
[![Platform](https://img.shields.io/badge/platform-ios-blue.svg)](https://www.apple.com/ios/)

## 🎨 Features

- **Native LiquidGlass Implementation**: Direct access to iOS's native LiquidGlass blur effects
- **Powered by Nitro Modules**: High-performance C++ bridge with zero JavaScript overhead
- **Glassmorphism Effects**: Professional frosted glass effects with multiple style options
- **Customizable**: Full control over blur intensity, transparency, and tint colors
- **TypeScript Support**: Fully typed for enhanced developer experience
- **Multiple Effects**: Support for different glass effect styles (`clear`, `regular`)
- **Interactive Touches**: Touch-responsive glass components
- **60+ FPS Performance**: Optimized GPU rendering for smooth animations

## 📋 Requirements

- **React Native**: v0.76.0 or higher
- **Node**: 18.0.0 or higher
- **iOS**: 13.0 or higher (iOS only library)
- **Xcode**: 14.0 or higher for native compilation

> [!IMPORTANT]
> To use **Nitro Views** features, React Native **v0.78.0** or higher is required.

## 📦 Installation

```bash
bun add react-native-nitro-glass react-native-nitro-modules
```

Or with npm:

```bash
npm install react-native-nitro-glass react-native-nitro-modules
```

Or with yarn:

```bash
yarn add react-native-nitro-glass react-native-nitro-modules
```

After installation, the Nitro module will be automatically compiled during the native build process.

## 🚀 Getting Started

### NitroGlassView

The main component for creating native LiquidGlass frosted glass effects on iOS.

#### Props

| Prop | Type | Required | Description |
|------|------|:--------:|-------------|
| `effect` | `'clear' \| 'regular'` | ✅ | The type of glass effect to apply (LiquidGlass style) |
| `interactive` | `boolean` | ✅ | Defines if the component responds to touches |
| `tintColor` | `string` | ❌ | Tint color in hexadecimal format (e.g., `#ffffff`) |
| `style` | `StyleProp<ViewStyle>` | ❌ | Standard React Native view styles |
| `children` | `ReactNode` | ❌ | Content to be rendered inside the glass |

#### Basic Example

```jsx
import { NitroGlassView } from 'react-native-nitro-glass'
import { View, Text } from 'react-native'

export function BasicExample() {
  return (
    <NitroGlassView
      effect="clear"
      interactive={true}
      style={{
        width: 300,
        height: 200,
        borderRadius: 20,
      }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Content inside native LiquidGlass</Text>
      </View>
    </NitroGlassView>
  )
}
```

#### Example with Tint Color

```jsx
import { NitroGlassView } from 'react-native-nitro-glass'
import { Text } from 'react-native'

export function TintedExample() {
  return (
    <NitroGlassView
      effect="clear"
      interactive={true}
      tintColor="#2f2f2f"
      style={{
        width: 300,
        height: 200,
        borderRadius: 20,
      }}
    >
      <Text style={{ color: '#fff' }}>Glass with custom tint</Text>
    </NitroGlassView>
  )
}
```

#### Comparing Effects

```jsx
import { NitroGlassView } from 'react-native-nitro-glass'
import { View, Text, StyleSheet } from 'react-native'

export function EffectsComparison() {
  return (
    <View style={styles.container}>
      <NitroGlassView
        effect="clear"
        interactive={true}
        style={styles.glass}
      >
        <Text style={styles.label}>Clear Effect</Text>
      </NitroGlassView>

      <NitroGlassView
        effect="regular"
        interactive={true}
        style={styles.glass}
      >
        <Text style={styles.label}>Regular Effect</Text>
      </NitroGlassView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  glass: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
})
```

### NitroGlassContainer

A container component for grouping multiple frosted glass views with automatic spacing.

#### Props

| Prop | Type | Required | Description |
|------|------|:--------:|-------------|
| `spacing` | `number` | ❌ | Space between children in pixels |
| `style` | `StyleProp<ViewStyle>` | ❌ | Standard React Native view styles |
| `children` | `ReactNode` | ❌ | Child components to group |

#### Basic Example

```jsx
import { NitroGlassView, NitroGlassContainer } from 'react-native-nitro-glass'
import { StyleSheet } from 'react-native'

export function ContainerExample() {
  return (
    <NitroGlassContainer
      spacing={15}
      style={styles.container}
    >
      <NitroGlassView
        effect="clear"
        interactive={true}
        style={styles.item}
      />

      <NitroGlassView
        effect="regular"
        interactive={true}
        style={styles.item}
      />

      <NitroGlassView
        effect="clear"
        interactive={true}
        style={styles.item}
      />
    </NitroGlassContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 150,
    borderRadius: 20,
  },
})
```

#### Example with Custom Spacing

```jsx
import { NitroGlassView, NitroGlassContainer } from 'react-native-nitro-glass'
import { View, Text, StyleSheet } from 'react-native'

export function CustomSpacingExample() {
  return (
    <View style={styles.wrapper}>
      <NitroGlassContainer
        spacing={30}
        style={styles.container}
      >
        <NitroGlassView
          effect="clear"
          interactive={true}
          style={styles.item}
        >
          <Text style={styles.text}>Item 1</Text>
        </NitroGlassView>

        <NitroGlassView
          effect="clear"
          interactive={true}
          style={styles.item}
        >
          <Text style={styles.text}>Item 2</Text>
        </NitroGlassView>
      </NitroGlassContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
})
```

## 🎭 Effect Types

### `clear`

The `clear` effect provides a lighter, more transparent frosted glass appearance with subtle blur. Use when you want:
- Minimal visual obstruction of background content
- A subtle and elegant glassmorphism effect
- Better visibility of content behind the glass

```jsx
<NitroGlassView effect="clear" interactive={true} style={{ /* ... */ }}>
  {/* Content */}
</NitroGlassView>
```

### `regular`

The `regular` effect provides a more pronounced and opaque frosted glass look with stronger blur. Use when you want:
- Better separation from background content
- A more prominent glass aesthetic
- Enhanced contrast for foreground content

```jsx
<NitroGlassView effect="regular" interactive={true} style={{ /* ... */ }}>
  {/* Content */}
</NitroGlassView>
```

## 🛠️ Advanced Configuration

### With Custom Borders

```jsx
<NitroGlassView
  effect="clear"
  interactive={true}
  style={{
    width: 300,
    height: 200,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  }}
>
  {/* Content */}
</NitroGlassView>
```

### With Shadows

```jsx
<NitroGlassView
  effect="clear"
  interactive={true}
  style={{
    width: 300,
    height: 200,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  }}
>
  {/* Content */}
</NitroGlassView>
```

### With Padding and Gaps

```jsx
import { NitroGlassView } from 'react-native-nitro-glass'
import { View, Text, StyleSheet } from 'react-native'

export function PaddingExample() {
  return (
    <NitroGlassView
      effect="regular"
      interactive={true}
      style={styles.glass}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.subtitle}>Subtitle</Text>
      </View>
    </NitroGlassView>
  )
}

const styles = StyleSheet.create({
  glass: {
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
  },
})
```

## 📱 Platform Support

| Feature | iOS |
|---------|-----|
| LiquidGlass Effects | ✅ Natively Supported |
| Tint Colors | ✅ Supported |
| Interactive Mode | ✅ Supported |
| Custom Styling | ✅ Supported |
| Blur Performance | ✅ GPU Optimized |

> **Note**: This is an iOS-only library leveraging native LiquidGlass capabilities. Android support would require alternative glass effect implementations.

## ⚡ Performance

The library achieves exceptional performance through native implementation:

- **Native LiquidGlass Rendering**: Direct access to iOS UIVisualEffectView
- **Zero JavaScript Bridge Overhead**: Handled via Nitro Modules' high-performance C++ bridge
- **GPU-Accelerated Blur**: Real-time GPU processing for blur effects
- **Optimized for 60+ FPS**: Smooth animations and interactions
- **Memory Efficient**: Native rendering without JavaScript overhead

## 🔧 Complete API

### NitroGlassView Props

```typescript
interface NitroGlassViewProps extends HybridViewProps {
  interactive: boolean
  tintColor?: string // Hexadecimal color (e.g., #ffffff)
  effect: 'regular' | 'clear'
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}
```

### NitroGlassContainer Props

```typescript
interface NitroGlassContainerProps extends HybridViewProps {
  spacing?: number
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}
```

## 🏗️ Native Implementation Details

This library uses **Nitro Modules** to bridge React Native with native iOS code. The native implementation leverages:

- **iOS UIVisualEffectView**: For native LiquidGlass effects
- **Metal Framework**: For GPU-accelerated blur rendering
- **C++ Nitro Bridge**: For high-performance communication between JavaScript and native code

## 🤝 Contributing

Contributions are welcome! For major changes, please open an issue first to discuss the changes you would like to make.

## 📄 License

MIT - see the [LICENSE](LICENSE) file for details

## 🙏 Credits

- Built with [React Native Nitro Modules](https://github.com/mrousavy/nitro)
- Bootstrapped with [create-nitro-module](https://github.com/patrickkabwe/create-nitro-module)
- Implements Apple's UIVisualEffectView for native LiquidGlass effects

## 🔗 Useful Links

- [GitHub Repository](https://github.com/gabrielploomes/react-native-nitro-glass)
- [NPM Package](https://www.npmjs.com/package/react-native-nitro-glass)
- [Nitro Documentation](https://nitro.mrousavy.com/)
- [React Native Documentation](https://reactnative.dev/)
- [Apple UIVisualEffectView Documentation](https://developer.apple.com/documentation/uikit/uivisualeffectview)

## 💬 Support

If you have any questions or encounter issues, please open an [issue on GitHub](https://github.com/gabrielploomes/react-native-nitro-glass/issues).

---

**Made with ❤️ by [Gabriel-Pereira1788](https://github.com/Gabriel-Pereira1788)**
