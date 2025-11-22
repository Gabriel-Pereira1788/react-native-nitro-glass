import type {
  HybridView,
  HybridViewProps,
  HybridViewMethods,
} from 'react-native-nitro-modules'
import type { Effect } from '../types'

export interface NitroGlassViewProps extends HybridViewProps {
  interactive: boolean
    /** A hexdecimal color */
  tintColor?: string
  effect: Effect
}

export interface NitroGlassViewMethods extends HybridViewMethods {}

export type NitroGlassView = HybridView<
  NitroGlassViewProps,
  NitroGlassViewMethods,
  { ios: 'swift' }
>
