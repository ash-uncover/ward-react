/// <reference types="react" />
import './Definition.css';
export interface DefinitionSideEntryProperties {
    definitionId: string;
    selectedPluginId?: string;
    onSelectDefinition: (definitionId: string) => void;
    onSelectProvider: (providerId: string) => void;
}
export declare const Definition: ({ definitionId, selectedPluginId, onSelectDefinition, onSelectProvider }: DefinitionSideEntryProperties) => JSX.Element;
