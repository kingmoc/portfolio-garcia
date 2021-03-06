import React, { useState } from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';

//imports
import About from './About'

const SideBarMenu = (props) => {

    const [open, setOpen] = useState(false)

    const close = () => {
        props.setVisible(false)
    }

    return (
        <>
            <Modal
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                closeIcon 
                trigger={
                    <Menu.Item as='a'>
                        <Icon name='info' />
                        About
                    </Menu.Item>
                }
            >
                <About setOpen={setOpen}/>    
            </Modal>
            <Menu.Item as='a' href='#projects' onClick={close} className='side-menu'>
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