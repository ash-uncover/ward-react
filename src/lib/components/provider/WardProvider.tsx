import  {
  Ward,
  EventService,
  Message,
  WardData
} from '@sol.ac/ward'
import {
  MessageDispatcherDataServices
} from '@sol.ac/ward/dist/message/MessageDispatcher'

import Plugin from '@sol.ac/ward/dist/plugin/object/Plugin'
import PluginDefine from '@sol.ac/ward/dist/plugin/object/PluginDefine'
import PluginProvider from '@sol.ac/ward/dist/plugin/object/PluginProvider'
import { PluginManagerDataUrl } from '@sol.ac/ward/dist/plugin/PluginManager'

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

export const useWardUrls = (): Record<string, PluginManagerDataUrl> => {
  const wardContext = useContext(WardContext)
  return wardContext.urls
}
export const useWardUrl = (url: string): PluginManagerDataUrl => {
  const wardContext = useContext(WardContext)
  return wardContext.urls[url]
}

export const useWardPlugins = (): Record<string, Plugin> => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins
}
export const useWardPlugin = (pluginId: string): Plugin => {
  const wardContext = useContext(WardContext)
  return wardContext.plugins[pluginId]
}
export const useWardPluginsRoot = (): Record<string, Plugin> => {
  const wardContext = useContext(WardContext)
  return wardContext.roots
}

export const useWardDefinitions = (): Record<string, PluginDefine> => {
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

export const useWardService = (
  id: ((message: Message) => void) | string,
  handleMessage?: (message: Message) => void
): {
  dispatchEvent: (message: Message) => void
} => {
  let realId:any = id
  let realHandler:any = handleMessage
  const wardContext = useContext(WardContext)

  if (typeof id !== 'string') {
    realId = wardContext.plugin
    realHandler = handleMessage
  }
  let service = wardContext.services[realId] as EventService
  if (!service) {
    service = Ward.addService(realId)
    wardContext.services[realId] = service
  }
  useEffect(() => {
    if (service && realHandler) {
      service.addHandler(realHandler)
    }
    return () => {
      if (service && realHandler) {
        service.removeHandler(realHandler)
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