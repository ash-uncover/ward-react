/// <reference types="react" />
import './PluginDetails.css';
export interface PluginDetailsProperties {
    className?: string;
    pluginId: string;
    onSelectUrl: (url: string) => void;
    onSelectDefinition: (definitionId: string) => void;
    onSelectProvider: (providerId: string) => void;
}
export declare const PluginDetails: ({ className, pluginId, onSelectUrl, onSelectDefinition, onSelectProvider }: PluginDetailsProperties) => JSX.Element;
