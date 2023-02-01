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
// Components
import { Definition } from './list/Definition'
import { Plugin } from './list/Plugin'
import { Url } from './list/Url'
// Styles
import './PluginsPage.css'
import { PluginDetails } from './details/plugin/PluginDetails'
import { UrlDetails } from './details/url/UrlDetails'
import { DefinitionDetails } from './details/definition/DefinitionDetails'
import { ProviderDetails } from './details/provider/ProviderDetails'

type DetailType =
  'NONE' |
  'URL' |
  'PLUGIN' |
  'DEFINITION' |
  'PROVIDER'

const DetailTypes: {
  NONE: DetailType
  URL: DetailType
  PLUGIN: DetailType
  DEFINITION: DetailType
  PROVIDER: DetailType
} = {
  NONE: 'NONE',
  URL: 'URL',
  PLUGIN: 'PLUGIN',
  DEFINITION: 'DEFINITION',
  PROVIDER: 'PROVIDER'
}

export interface WardDevToolsPluginsProperties {
}

export const WardDevToolsPlugins = ({
}: WardDevToolsPluginsProperties) => {

  // Hooks //

  const [detailType, setDetailType] = useState<DetailType>(DetailTypes.NONE)

  const [selectedUrl, setSelectedUrl] = useState('')
  const [selectedPlugin, setSelectedPlugin] = useState('')
  const [selectedDefinition, setSelectedDefinition] = useState('')
  const [selectedProvider, setSelectedProvider] = useState('')

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
    const pluginId = urls[url]?.data?.name
    setSelectedUrl(url)
    setSelectedPlugin(pluginId || '')
    setSelectedDefinition('')
    setSelectedProvider('')
    setDetailType(DetailTypes.URL)
  }

  const handlePluginSelected = (pluginId: string) => {
    setSelectedUrl('')
    setSelectedPlugin(pluginId)
    setSelectedDefinition('')
    setSelectedProvider('')
    setDetailType(DetailTypes.PLUGIN)
  }

  const handleDefinitionSelected = (definitionId: string) => {
    const definition = definitionsArr.find(d => d.name === definitionId)
    setSelectedUrl('')
    setSelectedPlugin(definition?.plugin || '')
    setSelectedDefinition('')
    setSelectedDefinition(definitionId)
    setDetailType(DetailTypes.DEFINITION)
  }

  const handleProviderSelected = (providerId: string) => {
    const plugin = pluginsArr.find(p => {
      return Object.values(p.provides).some(prov => {
        return `${prov.define}/${prov.name}` === providerId
      })
    })
    setSelectedUrl('')
    setSelectedPlugin(plugin?.name || '')
    setSelectedDefinition('')
    setSelectedProvider(providerId)
    setDetailType(DetailTypes.PROVIDER)
  }

  // Rendering //

  const renderDetails = () => {
    switch (detailType) {
      case DetailTypes.URL: {
        return (
          <UrlDetails
            className='plugins-page__details'
            url={selectedUrl}
          />
        )
      }
      case DetailTypes.PLUGIN: {
        return (
          <PluginDetails
            className='plugins-page__details'
            pluginId={selectedPlugin}
            onSelectUrl={handleUrlSelected}
            onSelectDefinition={handleDefinitionSelected}
            onSelectProvider={handleProviderSelected}
          />
        )
      }
      case DetailTypes.DEFINITION: {
        return (
          <DefinitionDetails
            className='plugins-page__details'
            definitionId={selectedDefinition}
          />
        )
      }
      case DetailTypes.PROVIDER: {
        return (
          <ProviderDetails
            className='plugins-page__details'
            providerId={selectedProvider}
          />
        )
      }
      case DetailTypes.NONE:
      default: {
        return null
      }
    }
  }

  const classes = ['plugins-page']

  return (
    <div
      className={classes.join(' ')}
    >
      <div className='plugins-page__list'>
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

      {detailType !== DetailTypes.NONE ?
        <div className='plugins-page__resizer' />
      :null}

      {renderDetails()}

    </div>
  )
}