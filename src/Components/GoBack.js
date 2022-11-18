import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const GoBack = () => (
    <div>
        <Button animated>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
                <Icon name='rocket' />
            </Button.Content>
        </Button>
    </div>
)

export default GoBack