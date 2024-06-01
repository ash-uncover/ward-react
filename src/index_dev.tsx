import React from 'react'
import { createRoot } from 'react-dom/client'
import { WardProvider } from './lib/components/provider/WardProvider'
import { WardDevTools } from './lib/components/devtools/WardDevTools'

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

const plugin = 'https://ash-uncover.github.io/ap-games/plugin.json'



root.render(
  <>
    <WardProvider plugin={plugin}>
      <iframe
        src='https://ash-uncover.github.io/ap-games'
        height='100%'
        width='100%'
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden'
        }}
      />
      <WardDevTools />
    </WardProvider>
  </>
)
