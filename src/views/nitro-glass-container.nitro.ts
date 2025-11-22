import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules'

export interface NitroGlassContainerProps extends HybridViewProps {
  spacing?: number
}

export interface NitroGlassContainerMethods extends HybridViewMethods {}

export type NitroGlassContainer = HybridView<
  NitroGlassContainerProps,
  NitroGlassContainerMethods,
  {
    ios: 'swift'
  }
>
