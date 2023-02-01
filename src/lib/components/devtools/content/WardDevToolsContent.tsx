import React, {
  useState
} from 'react'
// Components
import { WardDevToolsMessages } from '../messages/WardDevToolsMessages'
import { WardDevToolsPlugins } from '../plugins/PluginsPage'
// Styles
import './WardDevToolsContent.css'

const PAGE = {
  PLUGINS: {
    name: 'Plugins',
    element: <WardDevToolsPlugins />
  },
  MESSAGES: {
    name: 'Messages',
    element: <WardDevToolsMessages />
  },
}
const PAGES = Object.values(PAGE)

export interface WardDevToolsContentProperties {
}

export const WardDevToolsContent = ({
}: WardDevToolsContentProperties) => {

  // Hooks //

  const [page, setPage] = useState(PAGE.PLUGINS)

  // Events //

  const handlePageSelected = (p: any) => {
    setPage(p)
  }

  // Rendering //

  const classes = ['ward-dev-tools-content']

  return (
    <div
      className={classes.join(' ')}
    >
      <div className='ward-dev-tools-content__header'>
        <ul className='ward-dev-tools-content__header__tabs'>
          {PAGES.map(p => {
            return (
              <li
                key={p.name}
                className={`ward-dev-tools-content__header__tab ${page === p ? 'selected' : ''}`}
                onClick={() => handlePageSelected(p)}
              >
                {p.name}
              </li>

            )
          })}
        </ul>
      </div>

      <div className='ward-dev-tools-content__body'>
        {page.element}
      </div>
    </div>
  )
}