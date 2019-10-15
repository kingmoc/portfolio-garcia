import React from 'react';
import { Message, Step, Icon } from 'semantic-ui-react';

const Why = () => {
    return (
        <> 
            <Message
                className='message-why'
                floating
                icon='thumbtack'
                header='Why We Should Work Together ...'
                size='huge'
            />

            <Step.Group size='huge' widths={3}>
                <Step active>
                    <Icon name='battery full' color='red'/>
                    <Step.Content>
                        <Step.Title className='why-title'>Always Ready</Step.Title>
                        <Step.Description className='why-des'>There's never a time I'm not fully charged and ready for action. I take pride in being accessbile and primed.</Step.Description>
                    </Step.Content>
                </Step>
                <Step active>
                    <Icon name='file code' />
                    <Step.Content>
                        <Step.Title className='why-title'>Technical</Step.Title>
                        <Step.Description className='why-des'>You want someone that understands your technical needs. I have many years of experience and capable of accessing the best technical solution.</Step.Description>
                    </Step.Content>
                </Step>
                <Step active>
                    <Icon name='plane' color='olive' />
                    <Step.Content>
                        <Step.Title className='why-title'>Well Versed</Step.Title>
                        <Step.Description className='why-des'>While traveling to over 14 different countries, I've gained the confidence to speak with different cultures effectively. Furthermore, I have the ability to take action and adjust on the fly - especially when faced with challenges that have no clear solution.</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </>

    );
};

export default Why