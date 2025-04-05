/// <reference types="react" />
import './Provider.css';
export interface ProviderProperties {
    providerId: string;
    selectedPluginId?: string;
    onSelect: (providerId: string) => void;
}
export declare const Provider: ({ providerId, selectedPluginId, onSelect }: ProviderProperties) => JSX.Element;
