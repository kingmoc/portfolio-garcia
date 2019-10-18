import React from 'react';
import { Modal, Image, Header } from 'semantic-ui-react';

//image
import famPic from '../img/fam-pic.png'

//component
import Extras from './Extras'

const About = () => {
    return (
        <>
            <Modal.Header>Some More Insight</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='massive' src={famPic} />
                <Modal.Description>
                    <Header>What's This All About?</Header>
                    <p>
                    This is about life, love and family. I'm a proud father of three - husband and entrepreneur. I’ve always been intrigued by the power to create!</p><p>That is why I want to create for the world and do my best to bring smiles to many faces. I truly believe that is my calling … bring love and happiness to the world of creation.
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Extras />
            </Modal.Actions>
        </>
    );
};

export default About;