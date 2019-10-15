import React from 'react';
import { Message, Image, Modal, Header, Icon, List } from 'semantic-ui-react';

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
            <Message
                className='projectsMessage'
                icon='sitemap'
                header='PROJECTS'
                size='huge'
                color='black'
                floating
            />

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