import React, {
  useState
} from 'react'
// Components
import { WardDevToolsContent } from './content/WardDevToolsContent'
// Style
import './WardDevTools.css'

export interface WardDevToolsProperties {
}

export const WardDevTools = ({
}: WardDevToolsProperties) => {

  // Hooks //

  const [open, setOpen] = useState(true)

  // Events //

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  // Rendering //

  const classes = ['ward-dev-tools']
  if (open) {
    classes.push('ward-dev-tools--open')
  }

  return (
    <div
      className={classes.join(' ')}
    >
      <button
        className='ward-dev-tools__button'
        onClick={handleToggleOpen}
      >
        W
      </button>

      <div className='ward-dev-tools__dialog'>
        <WardDevToolsContent/>
      </div>
    </div>

  )
}