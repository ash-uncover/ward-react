import { Message, WardData } from '@uncover/ward';
import { MessageDispatcherDataServices } from '@uncover/ward/dist/message/MessageDispatcher';
import Plugin from '@uncover/ward/dist/plugin/object/Plugin';
import PluginDefine from '@uncover/ward/dist/plugin/object/PluginDefine';
import PluginProvider from '@uncover/ward/dist/plugin/object/PluginProvider';
import { PluginManagerDataUrl } from '@uncover/ward/dist/plugin/PluginManager';
import React, { ReactNode } from 'react';
interface WardContextProperties extends WardData {
    plugin: string;
    loaded: boolean;
}
export declare const WardContext: React.Context<WardContextProperties>;
export interface WardProviderProperties {
    plugin: string;
    children?: ReactNode;
}
export declare const WardProvider: ({ plugin, children, }: WardProviderProperties) => React.JSX.Element;
export declare const useWardLoaded: () => boolean;
export declare const useWardUrls: () => Record<string, PluginManagerDataUrl>;
export declare const useWardUrl: (url: string) => PluginManagerDataUrl;
export declare const useWardPlugins: () => Record<string, Plugin>;
export declare const useWardPlugin: (pluginId: string) => Plugin;
export declare const useWardPluginsRoot: () => Record<string, Plugin>;
export declare const useWardDefinitions: () => Record<string, PluginDefine>;
export declare const useWardDefinition: (definitionId: string) => PluginDefine;
export declare const useWardProviders: (definitionId: string) => PluginProvider[];
export declare const useWardProvider: (providerId: string) => PluginProvider;
export declare const useWardServices: () => MessageDispatcherDataServices;
export declare const useWardService: (id: ((message: Message) => void) | string, handleMessage?: (message: Message) => void) => {
    dispatchEvent: (message: Message) => void;
};
export declare const useWardDispatchers: () => string[];
export {};
