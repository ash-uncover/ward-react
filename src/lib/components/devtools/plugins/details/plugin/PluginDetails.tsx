import React from 'react'
// Hooks
import {
  useWardPlugin,
  useWardPlugins,
} from '../../../../provider/WardProvider'
// Components
import { PluginProvider } from './PluginProvider'
import { PluginDefinition } from './PluginDefinition'
import { PluginDependency } from './PluginDependency'
// Styles
import './PluginDetails.css'

export interface PluginDetailsProperties {
  className?: string
  pluginId: string
  onSelectUrl: (url: string) => void
  onSelectDefinition: (definitionId: string) => void
  onSelectProvider: (providerId: string) => void
}

export const PluginDetails = ({
  className,
  pluginId,
  onSelectUrl,
  onSelectDefinition,
  onSelectProvider
}: PluginDetailsProperties) => {

  // Hooks //

  const pluginData = useWardPlugin(pluginId)
  const plugins = useWardPlugins()

  // Events //

  // Rendering //

  if (!pluginData) {
    return (
      <li>PROBLEM</li>
    )
  }

  const renderDependencies = () => {
    return (pluginData.dependencies)
      .map(dependency => {
        const dependencyName = Object.values(plugins).find(p => p.loadUrl === dependency)?.name
        return (
          <PluginDependency
            key={dependencyName}
            pluginId={dependencyName || ''}
            onSelect={() => onSelectUrl(dependency)}
          />
        )
      })
  }

  const renderDefinitions = () => {
    return pluginData.defines.map(define => {
      return (
        <PluginDefinition
          key={define.name}
          definitionId={define.name}
          onSelect={() => onSelectDefinition(define.name)}
        />
      )
    })
  }

  const renderProviders = () => {
    return pluginData.provides.map(provide => {
      return (
        <PluginProvider
          key={provide.name}
          providerId={`${provide.define}/${provide.name}`}
          onSelect={() => onSelectProvider(`${provide.define}/${provide.name}`)}
        />
      )
    })
  }

  const classes = ['plugin-details']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <h2 >
        Plugin details
      </h2>
      <div className='plugin__info'>
        <label>Name:</label>
        <span>{pluginData.name}</span>
      </div>
      <div className='plugin__info'>
        <label>Url:</label>
        <span>{pluginData.url}</span>
      </div>

      <h3>{`Dependencies (${pluginData.dependencies.length})`}</h3>
      <ul>
        {renderDependencies()}
      </ul>

      <h3>{`Defines (${pluginData.defines.length})`}</h3>
      <ul>
        {renderDefinitions()}
      </ul>

      <h3>{`Provides (${pluginData.provides.length})`}</h3>
      <ul>
        {renderProviders()}
      </ul>
    </div>
  )
}