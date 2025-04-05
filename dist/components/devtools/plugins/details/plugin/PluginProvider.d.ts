/// <reference types="react" />
import './PluginProvider.css';
export interface PluginProviderProperties {
    providerId: string;
    onSelect: () => void;
}
export declare const PluginProvider: ({ providerId, onSelect }: PluginProviderProperties) => JSX.Element;
