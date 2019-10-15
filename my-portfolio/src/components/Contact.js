import React from 'react';
import { Message } from 'semantic-ui-react';

const Contact = () => {
    return (
        <>
            <Message
                className='contact-message'
                icon='talk'
                header='CONTACT'
                size='huge'
                positive
                floating
                content='joe.c.a.garcia@gmail.com'
            />
        </>
    );
};

export default Contact;