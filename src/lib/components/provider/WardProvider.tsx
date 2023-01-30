import {
  PluginManager,
  PluginManagerData
} from '@uncover/ward'

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface WardContextProperties extends PluginManagerData {
  loaded: boolean
}
export const WardContext = createContext<WardContextProperties>({
  loaded: false,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
})

export interface WardProviderProperties {
  plugin: string
  children?: ReactNode
}

export const WardProvider = ({
  plugin,
  children,
}: WardProviderProperties) => {

  // Hooks //

  const [pluginMgr] = useState(new PluginManager())

  const [data, setData] = useState<WardContextProperties>({
    loaded: false,
    urls: {},
    roots: {},
    plugins: {},
    definitions: {},
    providers: {},
  })

  useEffect(() => {
    pluginMgr.reset()
    pluginMgr.loadPlugin(plugin)
    const cb = () => setData({
      loaded: true,
      ...pluginMgr.data
    })
    pluginMgr.register(cb)
    return () => pluginMgr.unregister(cb)
  }, [plugin])

  // Rendering //

  return (
    <WardContext.Provider value={data}>
      {children}
    </WardContext.Provider>
  )
}

export const useWardLoaded = () => {
  const wardContext = useContext(WardContext)
  return wardContext.loaded
}

export const useWardUrls = () => {
  const wardContext = useContext(WardContext)
  return wardContext.urls
}
export const useWardUrl = (url: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.urls[url]
}

export const useWardPlugins = () => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins
}
export const useWardPlugin = (pluginId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins[pluginId]
}
export const useWardPluginsRoot = () => {
  const wardContext = useContext(WardContext)
  return wardContext.roots
}

export const useWardDefinitions = () => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions
}
export const useWardDefinition = (definitionId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions[definitionId]
}

export const useWardProviders = (definitionId: string) => {
  const wardContext = useContext(WardContext)
  return Object.values(wardContext.providers).filter(provider => provider.definition === definitionId)
}
export const useWardProvider = (providerId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.providers[providerId]
}