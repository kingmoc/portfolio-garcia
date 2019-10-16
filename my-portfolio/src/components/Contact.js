import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Contact = () => {
    return (
        <>
            <Message 
                compact
                icon
                as='a'
                name='contact'
                className='contact-message'
                size='big'
                positive
                floating
            >
                <Icon name='talk' />
                <Message.Content>
                    <Message.Header>CONTACT</Message.Header>
                    <p>joe.c.a.garcia@gmail.com</p>
                </Message.Content>
            </Message>
        </>
    );
};

export default Contact;