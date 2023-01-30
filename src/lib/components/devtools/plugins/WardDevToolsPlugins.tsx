import React, {
  useState
} from 'react'
// Hooks
import {
  useWardDefinitions,
  useWardPlugins,
  useWardPluginsRoot,
  useWardUrls
} from '../../provider/WardProvider'
// Styles
import './WardDevToolsPlugins.css'
import { Definition } from './list/Definition'
import { Plugin } from './list/Plugin'
import { Url } from './list/Url'

export interface WardDevToolsPluginsProperties {
}

export const WardDevToolsPlugins = ({
}: WardDevToolsPluginsProperties) => {

  // Hooks //

  const [selectedPlugin, setSelectedPlugin] = useState('')

  const urls = useWardUrls()
  const urlsArr = Object.keys(urls)
  const plugins = useWardPlugins()
  const pluginsArr = Object.values(plugins)
  const pluginsRoot = useWardPluginsRoot()
  const pluginsRootArr = Object.values(pluginsRoot)
  const definitions = useWardDefinitions()
  const definitionsArr = Object.values(definitions)

  // Events //

  const handleUrlSelected = (url: string) => {
  }

  const handlePluginSelected = (pluginId: string) => {
    setSelectedPlugin(pluginId)
  }

  const handleDefinitionSelected = (definitionId: string) => {
    const definition = definitionsArr.find(d => d.name === definitionId)
    setSelectedPlugin(definition?.plugin || '')
  }

  const handleProviderSelected = (providerId: string) => {
    const plugin = pluginsArr.find(p => {
      return Object.values(p.provides).some(prov => {
        return `${prov.define}/${prov.name}` === providerId
      })
    })
    setSelectedPlugin(plugin?.name || '')
  }

  // Rendering //

  const classes = ['ward-dev-tools-plugins']

  return (
    <div
      className={classes.join(' ')}
    >
      <h2>{`URLs (${urlsArr.length})`}</h2>
      <ul style={{ padding: 0 }}>
        {urlsArr.map(url => {
          return (
            <Url
              key={url}
              url={url}
              selectedPluginId={selectedPlugin}
              onSelect={handleUrlSelected}
            />
          )
        })}
      </ul>

      <h2>{`Plugins (${pluginsRootArr.length})`}</h2>
      <ul style={{ padding: 0 }}>
        {pluginsRootArr.map(plugin => {
          return (
            <Plugin
              key={plugin.name}
              pluginId={plugin.name}
              selectedPluginId={selectedPlugin}
              onSelect={handlePluginSelected}
            />
          )
        })}
      </ul>

      <h2>{`Definitions (${definitionsArr.length})`}</h2>
      <ul style={{ padding: 0 }}>
        {definitionsArr.map(definition => {
          return (
            <Definition
              key={definition.name}
              selectedPluginId={selectedPlugin}
              definitionId={definition.name}
              onSelectDefinition={handleDefinitionSelected}
              onSelectProvider={handleProviderSelected}
            />
          )
        })}
      </ul>




    </div>
  )
}