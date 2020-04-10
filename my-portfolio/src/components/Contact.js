import React from 'react';
import { Message, Icon, Header, Segment, Form, TextArea, Button } from 'semantic-ui-react';

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
                <Form 
                    className='contact-form' 
                    size='big'
                    method="POST" 
                    data-netlify="true"
                >
                    <Form.Input
                        required 
                        label='Name'
                        placeholder='Enter Name'
                    />
                    <Form.Input
                        required 
                        label='Email'
                        placeholder='xyz@example.com'
                    />
                    <Form.Input 
                        label='Company'
                        placeholder='Enter Company'
                    />
                    <TextArea
                        required 
                        style={{ minHeight: 150 }}
                        placeholder='Type message here ...'
                    />
                    <Button 
                        size='huge' 
                        primary
                        style={{marginTop: 15}}
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form>   
            </Segment>
        </>
    );
};

export default Contact;



/* <p className='header-contact'>joe.c.a.garcia@gmail.com</p> */