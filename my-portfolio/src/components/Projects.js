import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

//images
import geo from '../img/geo.png'
import betterPro from '../img/better-pro.png'
import tipsease from '../img/tipsease.png'
import voxel from '../img/voxel.png'
import tddc from '../img/tdcc.png'
import ahec from '../img/ahec1.png'

//component
import ProjectModals from '../components/Project-Modals'

const Projects = () => {
    return (
        <>
            <Message icon size='huge' floating className='message-projects' color='black' as='a' name='projects'>
                <Icon name='sitemap' className='icon-projects'/>
                <Message.Content>
                    <Message.Header className='header-projects'>PROJECTS</Message.Header>
                </Message.Content>
            </Message>

            <ProjectModals 
                geo={geo}
                betterPro={betterPro}
                tipsease={tipsease}
                ahec={ahec}
                tddc={tddc}
                voxel={voxel}
            />
        </>
    );
};

export default Projects;