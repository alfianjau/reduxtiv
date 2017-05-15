import React from 'react'
import { Icon } from 'semantic-ui-react'
import './icon.scss'

const IconGroup = () => (
  <div className='icon-group'>
    <Icon.Group size='huge'>
      <Icon loading size='big' name='sun' />
      <Icon size='small' name='podcast' />
    </Icon.Group>
  </div>
)

export default IconGroup
