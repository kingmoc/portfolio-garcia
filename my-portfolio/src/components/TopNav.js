import React, { useState } from 'react';
import { Grid, Image, Header, Container, Icon, List, Divider, Sidebar, Segment, Menu, Sticky } from 'semantic-ui-react'
import logo from '../img/tshirt.png'

//components 
import SideBarMenu from './SideBar'

const TopNav = () => {

    const [visible, setVisible] = useState(false)

    return (
        <Container textAlign='center'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    direction='right'
                    animation='overlay'
                    icon='labeled'
                    inverted
                    // onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <SideBarMenu />
                </Sidebar>

                <Sidebar.Pusher>
                    <Icon 
                        name='th'
                        size='big'
                        className='burger'
                        onClick={() => setVisible(!visible)}
                    />
                    <Image src={logo} size='tiny' centered/>
                    <Header size='huge'>Joseph C.A. Garcia</Header>
                    <Divider className='divider3'></Divider>
                    <List horizontal>
                        <List.Item> 
                            <Icon 
                                name='twitter' 
                                size='big'
                                color='blue'
                            /> 
                        </List.Item>
                        <List.Item> 
                            <Icon 
                                name='github' 
                                size='big' 
                            /> 
                        </List.Item>
                        <List.Item> 
                            <Icon 
                                className='linked'
                                name='linkedin' 
                                size='big' 
                            /> 
                        </List.Item>
                    </List>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Container>
    );
};

export default TopNav