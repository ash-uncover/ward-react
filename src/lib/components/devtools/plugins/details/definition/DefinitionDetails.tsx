import React from 'react'
// Hooks
import {
  useWardDefinition,
} from '../../../../provider/WardProvider'
// Components
// Styles
import './DefinitionDetails.css'

export interface DefinitionDetailsProperties {
  className?: string
  definitionId: string
}

export const DefinitionDetails = ({
  className,
  definitionId,
}: DefinitionDetailsProperties) => {

  // Hooks //

  const definitionData = useWardDefinition(definitionId)

  // Events //

  // Rendering //

  if (!definitionData) {
    return (
      <li>def PROBLEM - {definitionId}</li>
    )
  }

  const renderProperties = () => {
    return (definitionData.properties).map(property => {
      return (
        <li key={property.name}>
          {property.name}
          <ul>
            <li>type: {property.type}</li>
            <li>mandatory: {String(property.mandatory)}</li>
            <li>array: {String(property.array)}</li>
          </ul>
        </li>
      )
    })
  }

  const renderAttributes = () => {
    return definitionData.attributes.map(attribute => {
      return (
        <li key={attribute.name}>
          {attribute.name}
          <ul>
            <li>type: {attribute.type}</li>
            <li>mandatory: {String(attribute.mandatory)}</li>
            <li>array: {String(attribute.array)}</li>
          </ul>
        </li>
      )
    })
  }

  const renderElements = () => {
    return definitionData.elements.map(element => {
      return (
        <li key={element.name}>{element.name}</li>
      )
    })
  }

  const classes = ['definition-details']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <h2 >
        Definition Details
      </h2>
      <div className='plugin__info'>
        <label>Name:</label>
        <span>{definitionData.name}</span>
      </div>

      <h3>{`Properties (${definitionData.properties.length})`}</h3>
      <ul>
        {renderProperties()}
      </ul>

      <h3>{`Attributes (${definitionData.attributes.length})`}</h3>
      <ul>
        {renderAttributes()}
      </ul>

      <h3>{`Elements (${definitionData.elements.length})`}</h3>
      <ul>
        {renderElements()}
      </ul>
    </div>
  )
}