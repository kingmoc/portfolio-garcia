import React, { useState } from 'react';
import { Image, Header, Container, Icon, List, Divider, Sidebar, Menu } from 'semantic-ui-react'
import logo from '../img/tshirt.png'

//components 
import SideBarMenu from './SideBar'
import TopNavDesktop from './TopNav-desktop'

const TopNav = () => {

    const [visible, setVisible] = useState(false)

    return (
        <>
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

            <Container as={Menu} fixed='top' className='burger-container'>
                <Icon 
                    name='th'
                    size='big'
                    className='burger'
                    onClick={() => setVisible(!visible)}
                />
            </Container>

            {/* Nav for Desktop */}
            <TopNavDesktop />

             {/* Logo until Social */}
            <section>
                <Image src={logo} size='small' centered/>
                <div className='name-title-social'>
                    <Header className='name'>Joseph C.A. Garcia</Header>
                    <Header className='job-title'>Full Stack Engineer</Header>
                    <Divider className='divider3'></Divider>
                    <List horizontal className='social'>
                        <List.Item as='a' href='https://twitter.com/bishopGarcia'> 
                            <Icon 
                                name='twitter' 
                                size='huge'
                                color='blue'
                            /> 
                        </List.Item >
                        <List.Item as='a' href='https://github.com/kingmoc'> 
                            <Icon 
                                name='github' 
                                size='huge' 
                                color='black'
                            /> 
                        </List.Item>
                        <List.Item as='a' href='https://www.linkedin.com/in/jgarcia85/'> 
                            <Icon 
                                className='linked'
                                name='linkedin' 
                                size='huge' 
                            /> 
                        </List.Item>
                    </List>
                </div>
            </section>
        </>
    );
};

export default TopNav