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

export const WardContext = createContext<PluginManagerData>({
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
})

export interface WardProviderProperties {
  plugin?: string
  children?: ReactNode
}

export const WardProvider = ({
  children,
}: WardProviderProperties) => {

  // Hooks //

  const [data, setData] = useState<PluginManagerData>({
    roots: {},
    plugins: {},
    definitions: {},
    providers: {},
  })

  useEffect(() => {
    const pluginMgr = new PluginManager()
    pluginMgr.register(() => {
      setData(pluginMgr.data)
    })
  }, [])

  // Rendering //

  return (
    <WardContext.Provider value={data}>
      {children}
    </WardContext.Provider>
  )
}

export const usePlugins = () => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins
}
export const usePlugin = (pluginId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins[pluginId]
}
export const usePluginsRoot = () => {
  const wardContext = useContext(WardContext)
  return wardContext.roots
}

export const useDefinitions = () => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions
}
export const useDefinition = (definitionId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions[definitionId]
}

export const useProviders = (definitionId: string) => {
  const wardContext = useContext(WardContext)
  return Object.values(wardContext.providers).filter(provider => provider.definition === definitionId)
}
export const useProvider = (providerId: string) => {
  const wardContext = useContext(WardContext)
  return wardContext.providers[providerId]
}