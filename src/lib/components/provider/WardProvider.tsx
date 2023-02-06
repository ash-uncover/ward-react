import Ward, {
  Message,
  WardData
} from '@uncover/ward'

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface WardContextProperties extends WardData {
  loaded: boolean,
}
export const WardContext = createContext<WardContextProperties>({
  loaded: false,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
  services: {}
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

  const [data, setData] = useState<WardContextProperties>({
    loaded: false,
    urls: {},
    roots: {},
    plugins: {},
    definitions: {},
    providers: {},
    services: {},
  })

  useEffect(() => {

    Ward.loadPlugin(plugin)
    const cb = () => setData({
      loaded: true,
      ...Ward.data
    })
    Ward.register(cb)
    return () => {
      Ward.unregister(cb)
    }
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

export const useWardServices = () => {
  const wardContext = useContext(WardContext)
  return wardContext.services
}

export const useWardService = (handleMessage: (message: Message) => void) => {
  const [service, setService] = useState()
  useEffect(() => {
    const serv = Ward.addService(handleMessage)
    setService(serv)
    return () => {
      serv.terminate()
    }
  }, [])
  return service
}