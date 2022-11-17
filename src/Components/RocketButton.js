import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const RocketButton = () => (
  <div>
    <Button animated>
      <Button.Content visible>Let's Go!</Button.Content>
      <Button.Content hidden>
        <Icon name='rocket' />
      </Button.Content>
    </Button>
    </div>
)

export default RocketButton