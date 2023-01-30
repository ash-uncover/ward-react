import React, { MouseEvent } from 'react'
// Hooks
import {
  useWardDefinition,
  useWardProviders
} from '../../../provider/WardProvider'
// Components
// Styles
import './Definition.css'
import { Provider } from './Provider'

export interface DefinitionSideEntryProperties {
  definitionId: string
  selectedPluginId?: string
  onSelectDefinition: (definitionId: string) => void
  onSelectProvider: (providerId: string) => void
}

export const Definition = ({
  definitionId,
  selectedPluginId,
  onSelectDefinition,
  onSelectProvider
}: DefinitionSideEntryProperties) => {

  // Events //

  const handleDefinitionClick = (event: MouseEvent) => {
    event.stopPropagation()
    onSelectDefinition(definitionId)
  }

  const handleProviderClick = (providerId: string) => {
    onSelectProvider(providerId)
  }

  // Rendering //

  const definition = useWardDefinition(definitionId)
  const providers = useWardProviders(definitionId)

  if (!definition) {
    return (
      <li>PROBLEM</li>
    )
  }

  const classes = ['definition-side-entry']
  if (selectedPluginId === definition.plugin) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      title={definition.name}
      onClick={handleDefinitionClick}
    >
      {definition.name}
      <ul className='definition-side-entry__entries'>
        {providers.map(provider => {
          return (
            <Provider
              key={provider.name}
              providerId={provider.name}
              selectedPluginId={selectedPluginId || ''}
              onSelect={handleProviderClick}
            />
          )
        })}
      </ul>
    </li>
  )
}