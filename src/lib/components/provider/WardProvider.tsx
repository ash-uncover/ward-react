import Ward, {
  EventService,
  Message,
  WardData
} from '@uncover/ward'
import {
  MessageDispatcherDataServices
} from '@uncover/ward/dist/message/MessageDispatcher'
import {
  PluginManagerDataDefinitions,
  PluginManagerDataPlugins,
  PluginManagerDataUrl,
  PluginManagerDataUrls
} from '@uncover/ward/dist/plugin/PluginManager'
import Plugin from '@uncover/ward/dist/plugin/object/Plugin'
import PluginDefine from '@uncover/ward/dist/plugin/object/PluginDefine'
import PluginProvider from '@uncover/ward/dist/plugin/object/PluginProvider'

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface WardContextProperties extends WardData {
  plugin: string
  loaded: boolean
}
export const WardContext = createContext<WardContextProperties>({
  plugin: '',
  loaded: false,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
  services: {},
  dispatchers: []
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
    plugin,
    loaded: false,
    urls: {},
    roots: {},
    plugins: {},
    definitions: {},
    providers: {},
    services: {},
    dispatchers: []
  })

  useEffect(() => {
    const eventService = Ward.addService(plugin)
    Ward.loadPlugin(plugin)
    const cb = () => setData({
      plugin,
      loaded: true,
      ...Ward.data
    })
    Ward.register(cb)
    return () => {
      Ward.unregister(cb)
      eventService.terminate()
    }
  }, [plugin])

  // Rendering //

  return (
    <WardContext.Provider value={data}>
      {children}
    </WardContext.Provider>
  )
}

export const useWardLoaded = (): boolean => {
  const wardContext = useContext(WardContext)
  return wardContext.loaded
}

export const useWardUrls = (): PluginManagerDataUrls => {
  const wardContext = useContext(WardContext)
  return wardContext.urls
}
export const useWardUrl = (url: string): PluginManagerDataUrl => {
  const wardContext = useContext(WardContext)
  return wardContext.urls[url]
}

export const useWardPlugins = (): PluginManagerDataPlugins => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins
}
export const useWardPlugin = (pluginId: string): Plugin => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins[pluginId]
}
export const useWardPluginsRoot = (): PluginManagerDataPlugins => {
  const wardContext = useContext(WardContext)
  return wardContext.roots
}

export const useWardDefinitions = (): PluginManagerDataDefinitions => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions
}
export const useWardDefinition = (definitionId: string): PluginDefine => {
  const wardContext = useContext(WardContext)
  return wardContext.definitions[definitionId]
}

export const useWardProviders = (definitionId: string): PluginProvider[] => {
  const wardContext = useContext(WardContext)
  return Object.values(wardContext.providers).filter(provider => provider.definition === definitionId)
}
export const useWardProvider = (providerId: string): PluginProvider => {
  const wardContext = useContext(WardContext)
  return wardContext.providers[providerId]
}

export const useWardServices = (): MessageDispatcherDataServices => {
  const wardContext = useContext(WardContext)
  return wardContext.services
}

export const useWardService = (handleMessage?: (message: Message) => void): {
  dispatchEvent: (message: Message) => void
} => {
  const wardContext = useContext(WardContext)
  const service = wardContext.services[wardContext.plugin] as EventService
  useEffect(() => {
    if (service && handleMessage) {
      service.addHandler(handleMessage)
    }
    return () => {
      if (service && handleMessage) {
        service.removeHandler(handleMessage)
      }
    }
  }, [])
  return {
    dispatchEvent: (message) => service.sendMessage(message)
  }
}

export const useWardDispatchers = (): string[] => {
  const wardContext = useContext(WardContext)
  return wardContext.dispatchers
}