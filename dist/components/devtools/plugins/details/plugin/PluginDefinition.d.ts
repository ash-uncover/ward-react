/// <reference types="react" />
import './PluginDefinition.css';
export interface PluginDefinitionProperties {
    definitionId: string;
    onSelect: () => void;
}
export declare const PluginDefinition: ({ definitionId, onSelect }: PluginDefinitionProperties) => JSX.Element;
