import React from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';

//imports
import About from './About'

const SideBarMenu = (props) => {

    const close = () => {
        props.setVisible(false)
    }

    return (
        <>
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
            <Menu.Item as='a' href='#projects' onClick={close}>
                <Icon name='sitemap' />
                Projects
            </Menu.Item>
            <Menu.Item as='a' href='#contact' onClick={close}>
                <Icon name='mail' />
                Contact
            </Menu.Item>
            <Menu.Item as='a' href='#' onClick={close}>
                <Icon name='angle double up' />
                Top
            </Menu.Item>
        </>
    );
};

export default SideBarMenu;