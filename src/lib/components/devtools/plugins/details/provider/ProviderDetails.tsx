import React from 'react'
// Hooks
import {
  useWardProvider,
} from '../../../../provider/WardProvider'
// Components
// Styles
import './ProviderDetails.css'

export interface ProviderDetailsProperties {
  className?: string
  providerId: string
}

export const ProviderDetails = ({
  className,
  providerId,
}: ProviderDetailsProperties) => {

  // Hooks //

  const providerData = useWardProvider(providerId)

  // Events //

  // Rendering //

  if (!providerData) {
    return (
      <li>PROBLEM</li>
    )
  }

  const renderAttributes = () => {
    return providerData.getAttributes().map(attribute => {
      return (
        <li key={attribute.name}>
          {attribute.name}
          <ul>
            <li>value: {attribute.value}</li>
            <li>type: {attribute.type}</li>
            <li>mandatory: {String(attribute.mandatory)}</li>
            <li>array: {String(attribute.array)}</li>
          </ul>
        </li>
      )
    })
  }

  const renderElements = () => {
    return providerData.getElements().map(element => {
      return (
        <li key={element.name}>
          {element.name}
          <ul>
            <li>type: {element.type}</li>
            <li>url: {String(element.url)}</li>
            <li>element: {String(element.element)}</li>
          </ul>
        </li>
      )
    })
  }

  const classes = ['provider-details']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <h2>
        Provider details
      </h2>
      <div className='plugin__info'>
        <label>Name:</label>
        <span>{providerData.name}</span>
      </div>

      <h3>{`Attributes (${providerData.attributes.length})`}</h3>
      <ul>
        {renderAttributes()}
      </ul>

      <h3>{`Elements (${providerData.elements.length})`}</h3>
      <ul>
        {renderElements()}
      </ul>
    </div>
  )
}