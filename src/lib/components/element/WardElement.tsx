import React, {
  CSSProperties,
  useState
} from 'react'

export interface WardElementProperties {
  element: {
    plugin: string
    properties?: { [key: string]: string }
    url: string
    element?: string
    type: string
  }
  style?: CSSProperties
}

export const WardElement = ({
  element,
  style,
}: WardElementProperties) => {

  // Hooks //

  const [loaded, setLoaded] = useState(false)

  // Rendering //

  switch (element.type) {
    case 'iframe': {
      const urlBase = new URL(element.url)
      if (element.properties) {
        Object.keys(element.properties).forEach((property) => {
          urlBase.searchParams.set(property, element.properties![property])
        })
      }
      const [url] = useState(urlBase.toString())
      return (
        <iframe
          src={url}
          height='100%'
          width='100%'
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            ...style
          }}
        />
      )
    }
    case 'webcomponent': {
      const TagName = element.element!
      const scriptId = `ward-import-${TagName}`
      const current = document.getElementById(scriptId)
      if (!current) {
        const script = document.createElement('script')
        script.setAttribute('src', element.url)
        script.setAttribute('id', scriptId)
        script.addEventListener('load', () => {
          setLoaded(true)
        })
        script.addEventListener('error', () => {
          console.log('failed to load web component')
        })
        document.head.appendChild(script)
      } else if (loaded) {
        return (
          <TagName
          />
        )
      }
      return null
    }
    default: {
      return (
        <div>NOT SUPPORTED</div>
      )
    }
  }
}

