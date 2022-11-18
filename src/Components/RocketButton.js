import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const RocketButton = () => (
    <div>
        <Button animated>
            <Button.Content visible>Lift Off!</Button.Content>
            <Button.Content hidden>
                <Icon name='rocket' />
            </Button.Content>
        </Button>
    </div>
)

export default RocketButton