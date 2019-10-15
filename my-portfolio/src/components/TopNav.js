import React, { useState } from 'react';
import { Image, Header, Container, Icon, List, Divider, Sidebar, Menu, Segment } from 'semantic-ui-react'
import logo from '../img/tshirt.png'

//components 
import SideBarMenu from './SideBar'

const TopNav = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
        {/* // <Container textAlign='center' as={Menu} fixed='top'> */}
            {/* <Sidebar.Pushable > */}
                <Sidebar
                    as={Menu}
                    direction='right'
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <SideBarMenu setVisible={setVisible}/>
                </Sidebar>

                {/* <Sidebar.Pusher > */}
                <Container as={Menu} fixed='top'>
                    <Icon 
                        name='th'
                        size='big'
                        className='burger'
                        onClick={() => setVisible(!visible)}
                    />
                    </Container>
                    <Image src={logo} size='small' centered/>
                    <Header className='name'>Joseph C.A. Garcia</Header>
                    <Divider className='divider3'></Divider>
                    <List horizontal className='social'>
                        <List.Item> 
                            <Icon 
                                name='twitter' 
                                size='huge'
                                color='blue'
                            /> 
                        </List.Item>
                        <List.Item> 
                            <Icon 
                                name='github' 
                                size='huge' 
                            /> 
                        </List.Item>
                        <List.Item> 
                            <Icon 
                                className='linked'
                                name='linkedin' 
                                size='huge' 
                            /> 
                        </List.Item>
                    </List>
                {/* </Sidebar.Pusher> */}
            {/* </Sidebar.Pushable> */}
        {/* </Container> */}
        </>
    );
};

export default TopNav