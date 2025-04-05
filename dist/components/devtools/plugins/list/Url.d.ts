/// <reference types="react" />
import './Url.css';
export interface UrlProperties {
    url: string;
    selectedPluginId?: string;
    onSelect: (url: string) => void;
}
export declare const Url: ({ url, selectedPluginId, onSelect }: UrlProperties) => JSX.Element;
