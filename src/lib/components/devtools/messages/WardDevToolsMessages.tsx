import React, {
  CSSProperties,
  useState
} from 'react'

import './WardDevToolsMessages.css'
import { useWardService, useWardServices } from '../../provider/WardProvider'
import { Message } from '@uncover/ward'

export interface WardDevToolsMessagesProperties {
  style: CSSProperties
}

export const WardDevToolsMessages = ({
  style
}: WardDevToolsMessagesProperties) => {

  // Hooks //

  const services = useWardServices()
  const service = useWardService('main', (message: Message) => handleMessage(message))

  const [messages, setMessages] = useState<Message[]>([])

  // Events //

  const handleMessage = (message: Message) => {
    console.log('message!')
    setMessages([
      ...messages,
      message
    ])
  }

  // Rendering //

  const classes = ['ward-dev-tools-messages']

  return (
    <div
      className={classes.join(' ')}
      style={style}
    >
      <h2>{`Services (${Object.keys(services).length})`}</h2>
      <ul style={{ padding: 0 }}>
        {Object.keys(services).map(serviceId => {
          const serv = services[serviceId]
          return (
            <li key={serviceId}>
              {serv.type} - {serviceId}
            </li>
          )
        })}
      </ul>

      <h2>{`Messages (${messages.length})`}</h2>
      <ul style={{ padding: 0 }}>
        {messages.map((message, index) => {
          return (
            <li key={`message-${index}`}>
              {message.type}
            </li>
          )
        })}
      </ul>
    </div>
  )
}