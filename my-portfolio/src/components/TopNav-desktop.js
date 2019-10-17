import React from 'react';
import { Modal, Menu, Icon } from 'semantic-ui-react';

//compontents 
import About from './About'

const TopNavDesktop = () => {
    return (
        <>  
            <Menu inverted size='massive' fixed='top' className='desktop-menu'>
                <Modal
                    closeIcon 
                    trigger={
                        <Menu.Item as='a'>
                            <Icon name='info' />
                            About
                        </Menu.Item>
                    }
                >
                    <About />    
                </Modal>
                <Menu.Item as='a' href='#projects' className='side-menu'>
                    <Icon name='sitemap' />
                    Projects
                </Menu.Item>
                <Menu.Item as='a' href='#contact'>
                    <Icon name='mail' />
                    Contact
                </Menu.Item>
                <Menu.Item as='a' href='#'>
                    <Icon name='angle double up' />
                    Top
                </Menu.Item>
            </Menu>
        </>
    );
};

export default TopNavDesktop;