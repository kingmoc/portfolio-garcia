import React, { useState } from 'react';
import { Message, Icon, Segment, Form, TextArea, Button } from 'semantic-ui-react';

const Contact = () => {

    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    })

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleChange = (e, {value, name}) => {

        setContactInfo({
            ...contactInfo,
            [name]: value
        })
    }

    const handleSubmit = e => {

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...contactInfo })
          })
            .then(() => alert("Success! - Your message has been sent, Thanks 😀"))
            .catch(error => alert(error));
    
          e.preventDefault();
          setContactInfo({        
            name: '',
            email: '',
            company: '',
            message: ''
        })
    }

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
                    onSubmit={handleSubmit} 
                >
                    <Form.Input
                        required 
                        label='Name'
                        name='name'
                        placeholder='Enter Name'
                        onChange={handleChange}
                        value={contactInfo.name}
                    />
                    <Form.Input
                        required 
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='xyz@example.com'
                        onChange={handleChange}
                        value={contactInfo.email}
                    />
                    <Form.Input 
                        label='Company'
                        name='company'
                        placeholder='Enter Company'
                        onChange={handleChange}
                        value={contactInfo.company}
                    />
                    <TextArea
                        required
                        name='message' 
                        style={{ minHeight: 150 }}
                        placeholder='Type message here ...'
                        onChange={handleChange}
                        value={contactInfo.message}
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