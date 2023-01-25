import React, { MouseEvent } from 'react'
// Hooks
import {
  usePlugin,
  usePlugins
} from '../../provider/WardProvider'
// Styles
import './Plugin.css'

export interface PluginProperties {
  pluginId: string
  selectedPluginId?: string

  onSelect: (pluginId: string) => void
}

export const Plugin = ({
  pluginId,
  selectedPluginId,
  onSelect
}: PluginProperties) => {

  // Events //

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onSelect(pluginId)
  }

  // Rendering //

  const plugin = usePlugin(pluginId)
  const plugins = usePlugins()

  if (!plugin) {
    return (
      <li>PROBLEM</li>
    )
  }

  const classes = ['plugin-side-entry']
  if (selectedPluginId === pluginId) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      title={plugin.url}
      onClick={handleClick}
    >
      {plugin.name}
      <ul className='plugin-side-entry__entries'>
        {plugin.dependencies
          .map(dependency => {
            const dependencyName = Object.values(plugins).find(p => p.loadUrl === dependency)?.name
            return (
              <Plugin
                key={dependency}
                selectedPluginId={selectedPluginId}
                pluginId={dependencyName || ''}
                onSelect={onSelect}
              />
            )
          })}
      </ul>
    </li>
  )
}