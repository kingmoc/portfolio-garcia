import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

const Contact = () => {
    return (
        <>
            {/* <Message 
                compact
                icon
                as='a'
                name='contact'
                className='contact-message'
                size='big'
                color='black'
                floating
            >
                <Icon name='talk' />
                <Message.Content>
                    <Message.Header>CONTACT</Message.Header>
                    <p>joe.c.a.garcia@gmail.com</p>
                </Message.Content>
            </Message> */}

            <Message icon size='big' floating className='message-contact' color='black' as='a' name='contact'>
                <Icon name='sitemap' className='icon-contact'/>
                <Message.Content>
                    <Message.Header className='header-contact'>CONTACT</Message.Header>
                    <p className='header-contact'>joe.c.a.garcia@gmail.com</p>
                </Message.Content>
            </Message>
        </>
    );
};

export default Contact;