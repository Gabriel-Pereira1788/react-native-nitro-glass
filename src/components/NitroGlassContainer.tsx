import React from 'react'
import { getHostComponent } from 'react-native-nitro-modules'
import NitroGlassContainerConfig from '../../nitrogen/generated/shared/json/NitroGlassContainerConfig.json'
import type {
  NitroGlassContainerMethods,
  NitroGlassContainerProps,
} from '../views/nitro-glass-container.nitro'

const NitroGlassContainerNative = getHostComponent<
  NitroGlassContainerProps,
  NitroGlassContainerMethods
>('NitroGlassContainer', () => NitroGlassContainerConfig)

export function NitroGlassContainer(
  props: React.ComponentProps<typeof NitroGlassContainerNative>
) {
  return <NitroGlassContainerNative {...props} />
}
