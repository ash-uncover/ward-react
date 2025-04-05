/// <reference types="react" />
import './Plugin.css';
export interface PluginProperties {
    pluginId: string;
    selectedPluginId?: string;
    onSelect: (pluginId: string) => void;
}
export declare const Plugin: ({ pluginId, selectedPluginId, onSelect }: PluginProperties) => JSX.Element;
