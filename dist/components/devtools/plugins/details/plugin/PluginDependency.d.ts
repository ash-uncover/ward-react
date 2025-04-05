/// <reference types="react" />
import './PluginDependency.css';
export interface PluginDependencyProperties {
    pluginId: string;
    onSelect: () => void;
}
export declare const PluginDependency: ({ pluginId, onSelect }: PluginDependencyProperties) => JSX.Element;
