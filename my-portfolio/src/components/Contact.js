import React from 'react';
import { Message, Icon, Header, Segment } from 'semantic-ui-react';

const Contact = () => {
    return (
        <>
            <Message icon size='big' floating className='message-contact' color='black' as='a' name='contact'>
                <div className='message-cont'>
                    <Icon name='mail' className='icon-contact' size='huge' />
                    <Message.Content>
                        <Message.Header className='header-contact'>CONTACT</Message.Header>
                    </Message.Content>
                </div>
            </Message>
            <Segment size='large' raised>
                <Header textAlign='center' size='large'>joe.c.a.garcia@gmail.com</Header>
            </Segment>
        </>
    );
};

export default Contact;



/* <p className='header-contact'>joe.c.a.garcia@gmail.com</p> */