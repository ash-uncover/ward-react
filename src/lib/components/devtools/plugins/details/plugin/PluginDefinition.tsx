import React from 'react'
// Hooks
import {
  useWardDefinition
} from '../../../../provider/WardProvider'
// Styles
import './PluginDefinition.css'

export interface PluginDefinitionProperties {
  definitionId: string
  onSelect: () => void
}

export const PluginDefinition = ({
  definitionId,
  onSelect
}: PluginDefinitionProperties) => {

  // Rendering //

  const definition = useWardDefinition(definitionId)

  if (!definition) {
    return (
      <li>Definition PROBLEM {definitionId}</li>
    )
  }

  return (
    <li
      onClick={onSelect}
    >
      {definition.name}
    </li>
  )
}