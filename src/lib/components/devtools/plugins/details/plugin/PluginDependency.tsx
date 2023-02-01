import React from 'react'
// Hooks
import {
  useWardPlugin
} from '../../../../provider/WardProvider'
// Styles
import './PluginDependency.css'

export interface PluginDependencyProperties {
  pluginId: string
  onSelect: () => void
}

export const PluginDependency = ({
  pluginId,
  onSelect
}: PluginDependencyProperties) => {

  // Rendering //

  const plugin = useWardPlugin(pluginId)

  if (!plugin) {
    return (
      <li>Dependency PROBLEM {pluginId}</li>
    )
  }

  return (
    <li
      onClick={onSelect}
    >
      {plugin.name}
    </li>
  )
}