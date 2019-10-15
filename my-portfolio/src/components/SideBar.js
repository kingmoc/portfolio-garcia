import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const SideBarMenu = () => {
    return (
        <>
            <Menu.Item as='a' >
                <Icon name='info' />
                About
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='sitemap' />
                Projects
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='mail' />
                Contact
            </Menu.Item>
        </>
    );
};

export default SideBarMenu;