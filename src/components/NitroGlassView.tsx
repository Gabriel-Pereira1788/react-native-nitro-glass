import React from 'react'
import { getHostComponent } from 'react-native-nitro-modules'
import type {
  NitroGlassViewMethods,
  NitroGlassViewProps,
} from '../views/nitro-glass-view.nitro'
import NitroGlassViewConfig from '../../nitrogen/generated/shared/json/NitroGlassViewConfig.json'

const NitroGlassViewNative = getHostComponent<
  NitroGlassViewProps,
  NitroGlassViewMethods
>('NitroGlassView', () => NitroGlassViewConfig)

export function NitroGlassView(
  props: React.ComponentProps<typeof NitroGlassViewNative>
) {
  return (
    <NitroGlassViewNative
      {...props}
      tintColor={props.tintColor ? props.tintColor : ''}
    />
  )
}
