import React, { MouseEvent } from 'react'
// Hooks
import {
  useWardUrl,
} from '../../../provider/WardProvider'
// Components
// Styles
import './Url.css'

export interface UrlProperties {
  url: string
  selectedPluginId?: string
  onSelect: (url: string) => void
}

export const Url = ({
  url,
  selectedPluginId,
  onSelect
}: UrlProperties) => {

  // Hooks //

  const urlData = useWardUrl(url)

  // Events //

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onSelect(url)
  }

  // Rendering //

  if (!urlData) {
    return (
      <li>PROBLEM</li>
    )
  }

  const classes = ['url-side-entry']
  if (selectedPluginId === urlData.data?.name) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      title={url}
      onClick={handleClick}
    >
      {url}
    </li>
  )
}