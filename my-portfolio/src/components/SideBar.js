import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const SideBarMenu = (props) => {

    const close = () => {
        props.setVisible(false)
    }

    return (
        <>
            <Menu.Item as='a' onClick={close}>
                <Icon name='info' />
                About
            </Menu.Item>
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