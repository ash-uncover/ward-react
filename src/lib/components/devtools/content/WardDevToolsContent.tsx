import React, {
  CSSProperties,
  useState
} from 'react'
// Components
import { WardDevToolsMessages } from '../messages/WardDevToolsMessages'
import { WardDevToolsPlugins } from '../plugins/PluginsPage'
// Styles
import './WardDevToolsContent.css'

const PAGE = {
  PLUGINS: 'Plugins',
  MESSAGES: 'Messages',
}
const PAGES = Object.values(PAGE)

export interface WardDevToolsContentProperties {
  style: CSSProperties
}

export const WardDevToolsContent = ({
  style
}: WardDevToolsContentProperties) => {

  // Hooks //

  const [page, setPage] = useState(PAGE.PLUGINS)

  // Events //

  const handlePageSelected = (p: string) => {
    setPage(p)
  }

  // Rendering //

  const classes = ['ward-dev-tools-content']

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <div className='ward-dev-tools-content__header'>
        <ul className='ward-dev-tools-content__header__tabs'>
          {PAGES.map(p => {
            return (
              <li
                key={p}
                className={`ward-dev-tools-content__header__tab ${page === p ? 'selected' : ''}`}
                onClick={() => handlePageSelected(p)}
              >
                {p}
              </li>

            )
          })}
        </ul>
      </div>

      <div className='ward-dev-tools-content__body'>
        <WardDevToolsPlugins
          style={{
            display: page === PAGE.PLUGINS ? undefined : 'none'
          }}
        />
        <WardDevToolsMessages
          style={{
            display: page === PAGE.MESSAGES ? undefined : 'none'
          }}
        />
      </div>
    </div>
  )
}