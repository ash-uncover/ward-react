import React, {
  useState
} from 'react'
// Hooks
import {
  useDefinitions,
  usePlugins,
  usePluginsRoot,
  useUrls
} from '../../provider/WardProvider'
// Styles
import './WardDevToolsPlugins.css'
import { Definition } from './Definition'
import { Plugin } from './Plugin'
import { Url } from './Url'

export interface WardDevToolsPluginsProperties {
}

export const WardDevToolsPlugins = ({
}: WardDevToolsPluginsProperties) => {

  // Hooks //

  const [selectedPlugin, setSelectedPlugin] = useState('')

  const urls = useUrls()
  const urlsArr = Object.keys(urls)
  const plugins = usePlugins()
  const pluginsArr = Object.values(plugins)
  const pluginsRoot = usePluginsRoot()
  const pluginsRootArr = Object.values(pluginsRoot)
  const definitions = useDefinitions()
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