import React from 'react'
import { createRoot } from 'react-dom/client'
import { WardDevTools } from './lib/components/devtools/WardDevTools'
import { WardProvider } from './lib/components/provider/WardProvider'

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)
root.render(
  <WardProvider plugin='https://ash-uncover.github.io/ap-games/plugin.json'>
    <WardDevTools />
  </WardProvider>
)
