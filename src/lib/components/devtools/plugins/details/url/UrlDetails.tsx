import React, { MouseEvent } from 'react'
// Hooks
import {
  useWardUrl,
} from '../../../../provider/WardProvider'
// Components
// Styles
import './UrlDetails.css'

export interface UrlDetailsProperties {
  className?: string
  url: string
}

export const UrlDetails = ({
  className,
  url,
}: UrlDetailsProperties) => {

  // Hooks //

  const urlData = useWardUrl(url)

  // Events //

  // Rendering //

  if (!urlData) {
    return (
      <li>PROBLEM</li>
    )
  }

  const classes = ['url-details']
  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <h2>URL Details</h2>
      <p>{url}</p>
      <pre>{JSON.stringify(urlData.data, null, 2)}</pre>  
    </div>
  )
}