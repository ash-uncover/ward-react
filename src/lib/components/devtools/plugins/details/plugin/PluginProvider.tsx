import React from 'react'
// Hooks
import {
  useWardProvider
} from '../../../../provider/WardProvider'
// Styles
import './PluginProvider.css'

export interface PluginProviderProperties {
  providerId: string
  onSelect: () => void
}

export const PluginProvider = ({
  providerId,
  onSelect
}: PluginProviderProperties) => {

  // Rendering //

  const provider = useWardProvider(providerId)

  if (!provider) {
    return (
      <li>Provider PROBLEM - {providerId}</li>
    )
  }

  return (
    <li
      onClick={onSelect}
    >
      {provider.name}
    </li>
  )
}