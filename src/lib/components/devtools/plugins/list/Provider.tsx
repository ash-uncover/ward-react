import React, { MouseEvent } from 'react'
// Hooks
import {
  useWardProvider,
} from '../../../provider/WardProvider'
// Components
// Styles
import './Provider.css'

export interface ProviderProperties {
  providerId: string
  selectedPluginId?: string
  onSelect: (providerId: string) => void
}

export const Provider = ({
  providerId,
  selectedPluginId,
  onSelect
}: ProviderProperties) => {

  // Hooks //

  const provider = useWardProvider(providerId)

  // Events //

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onSelect(providerId)
  }

  // Rendering //

  if (!provider) {
    return (
      <li>PROBLEM</li>
    )
  }

  const classes = ['provider-side-entry']
  if (selectedPluginId === provider.plugin) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      title={provider.name}
      onClick={handleClick}
    >
      {provider.name}
    </li>
  )
}