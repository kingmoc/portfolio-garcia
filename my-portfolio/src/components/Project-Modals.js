import React from 'react';
import { Modal, Image, Header, Message, List, Container } from 'semantic-ui-react';

const ProjectModals = (props) => {
    return (
        <>
            <Container className='project-container'>
                {/* Geograpics */}
                <Modal trigger={<Image src={props.geo} />} closeIcon>
                    <Modal.Header as='a' href='https://www.geograpics.com/'>GEOGRAPICS.COM (Current)</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='large' src={props.geo} />
                            <Modal.Description>
                                <Header>About this Project ...</Header>
                                <p>Imagine you have an Instagram account (in this day and age, that isn't to hard lol)... and now imagine you have tons of pictures posted all over the world doing various activities.  This could be many people and we all know how boring it can get looking at old photos by just scrolling.</p><p>Or maybe you want to reference a photo by a particular location.  Well that is where Geograpics is the app for you! You can log in via your Instagram account and once authenticated all your photos with geo-location data will be marked on an interactive map! This is an ongoing project and new features are implemented often. </p>

                                <Message>
                                    <Message.Header>More Info</Message.Header>
                                    <Message.List>
                                        <Message.Item><strong>Length: </strong>Ongoing</Message.Item>
                                        <Message.Item><strong>Members: </strong>8</Message.Item>
                                        <Message.Item><strong>Tech: </strong>React / React-Router / Redux / CSS / Node / Express / Swagger / Cypress / Jest</Message.Item>
                                        <Message.Item><strong>Role: </strong>Full Stack</Message.Item>
                                    </Message.List>   
                                    <Message.Header style={{marginTop: '25px'}}>Important Links</Message.Header>
                                    <List bulleted horizontal link>
                                        <List.Item as='a' href='https://github.com/Lambda-School-Labs/geograpics-be'>Front-end</List.Item>
                                        <List.Item as='a' href='https://github.com/Lambda-School-Labs/geograpics-fe'>Back-end</List.Item>
                                        <List.Item as='a' href='https://geograpics.herokuapp.com/api-docs'>API Info</List.Item>
                                    </List>
                                </Message>
                            </Modal.Description>
                        </Modal.Content>
                </Modal>
                {/* Better Professor */}
                <Modal trigger={<Image src={props.betterPro} />} closeIcon>
                    <Modal.Header as='a' href='https://better-professor-app.netlify.com/'>BETTER-PROF.COM (Aug 2019)</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='large' src={props.betterPro} />
                            <Modal.Description>
                                <Header>About this Project ...</Header>
                                <p>Everybody knows that ones of the most important keys to success is organization. This app targets a special group of overachievers in college professors.  If you ever check a professor’s schedule most likely it’ll be jammed pack.</p><p>Our app tries to target the organization of students that a professor will mentor.  The app will keep track of every student: contact info, daily task, deadlines, etc … all you need to do is input your students info and wallah! </p>

                                <Message>
                                    <Message.Header>More Info</Message.Header>
                                    <Message.List>
                                        <Message.Item><strong>Length: </strong>1 Week</Message.Item>
                                        <Message.Item><strong>Members: </strong>8</Message.Item>
                                        <Message.Item><strong>Tech: </strong>React / React-Router / Redux/Nodejs / Express / Yaml / Jest / Postgres</Message.Item>
                                        <Message.Item><strong>Role: </strong>Back-end Engineer</Message.Item>
                                    </Message.List>   
                                    <Message.Header style={{marginTop: '25px'}}>Important Links</Message.Header>
                                    <List bulleted horizontal link>
                                        <List.Item as='a' href='https://github.com/better-professor-app/Node-BackEnd'>Back-end</List.Item>
                                        <List.Item as='a' href='https://better-prof-app.herokuapp.com/api-docs'>API Info</List.Item>
                                    </List>
                                </Message>
                            </Modal.Description>
                        </Modal.Content>
                </Modal>
                {/* Tipsease */}
                <Modal trigger={<Image src={props.tipsease} />} closeIcon>
                    <Modal.Header as='a' href='https://bw-tipsease.netlify.com/'>TIPSEASE.COM (June 2019)</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='large' src={props.tipsease} />
                            <Modal.Description>
                                <Header>About this Project ...</Header>
                                <p>In the world of easy pay and digital transactions it seems fitting NOT to forget about the food industry.  Tipsease is an easy way for both waiters/waitresses and customers to keep track of tips being given and received.  You can also give your waiter a rating and then provide a tip directly.</p><p>The app will keep track of restaurants and waiters that use the service which makes locating workers easy.  So next time you go to pull out your wallet … instead pull out your phone and handle business the modern way!</p>

                                <Message>
                                    <Message.Header>More Info</Message.Header>
                                    <Message.List>
                                        <Message.Item><strong>Length: </strong>1 Week</Message.Item>
                                        <Message.Item><strong>Members: </strong>6</Message.Item>
                                        <Message.Item><strong>Tech: </strong>React / React-Router / Redux / Material-UI / Java</Message.Item>
                                        <Message.Item><strong>Role: </strong>Front-End Developer</Message.Item>
                                    </Message.List>   
                                    <Message.Header style={{marginTop: '25px'}}>Important Links</Message.Header>
                                    <List bulleted horizontal link>
                                        <List.Item as='a' href='https://github.com/bw5-tipsease/Tipsease-Front-End'>Front-end</List.Item>
                                    </List>
                                </Message>
                            </Modal.Description>
                        </Modal.Content>
                </Modal>
                {/* AHEC */}
                <Modal trigger={<Image src={props.ahec} />} closeIcon>
                    <Modal.Header as='a' href='http://wcaahec.org/'>WCAAHEC.ORG (March 2019)</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='large' src={props.ahec} />
                            <Modal.Description>
                                <Header>About this Project ...</Header>
                                <p>A non-profit organization that specializes in providing medical services to underdeveloped areas in Alabama needed help rebuilding their website.  I was responsible for redesigning the entire site and also changing platforms from Weebly to WordPress.</p>

                                <Message>
                                    <Message.Header>More Info</Message.Header>
                                    <Message.List>
                                        <Message.Item><strong>Length: </strong>5 Weeks</Message.Item>
                                        <Message.Item><strong>Tech: </strong>WordPress / PhotoShop</Message.Item>
                                        <Message.Item><strong>Role: </strong>Designer / WordPress Developer</Message.Item>
                                    </Message.List>   
                                    <Message.Header style={{marginTop: '25px'}}>Client</Message.Header>
                                    <p>West Central Alabama Area Health Education Center</p>
                                </Message>
                            </Modal.Description>
                        </Modal.Content>
                </Modal>
                {/* TDCC */}
                <Modal trigger={<Image src={props.tddc} />} closeIcon>
                    <Modal.Header as='a' href='http://tullahomadaycare.com/'>TULLAHOMADAYCARE.COM (April 2018)</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='large' src={props.tddc} />
                            <Modal.Description>
                                <Header>About this Project ...</Header>
                                <p>As member of the Tullahoma Day Care Center Board, I took it upon myself to get my feet wet building a website for the daycare.  I designed the layout and organized a time to take pictures of the kids while at school.  I gained valuable experience just with talking to a customer and finding out what they need while coming up with reasonable technical solutions.</p>

                                <Message>
                                    <Message.Header>More Info</Message.Header>
                                    <Message.List>
                                        <Message.Item><strong>Length: </strong>6 Weeks</Message.Item>
                                        <Message.Item><strong>Tech: </strong>WordPress / PhotoShop</Message.Item>
                                        <Message.Item><strong>Role: </strong>Designer / WordPress Developer</Message.Item>
                                    </Message.List>   
                                    <Message.Header style={{marginTop: '25px'}}>Client</Message.Header>
                                    <p>Tullahoma Day Care Center</p>
                                </Message>
                            </Modal.Description>
                        </Modal.Content>
                </Modal>
                {/* Voxel */}
                <Modal trigger={<Image src={props.voxel} />} closeIcon>
                <Modal.Header as='a' href='http://voxel-inc.com/'>VOXEL-INC.COM (December 2017)</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='large' src={props.voxel} />
                        <Modal.Description>
                            <Header>About this Project ...</Header>
                            <p>Voxel Enterprises Inc is a computer engineering firm that specializes is government contracting and acquisitions.  They needed something to display important information about the company while also highlighting their capabilities.</p>

                            <Message>
                                <Message.Header>More Info</Message.Header>
                                <Message.List>
                                    <Message.Item><strong>Length: </strong>10 Days</Message.Item>
                                    <Message.Item><strong>Tech: </strong>HTML / CSS / JQUERY</Message.Item> 
                                    <Message.Item><strong>Role: </strong>UI Developer</Message.Item> 
                                </Message.List>   
                                <Message.Header style={{marginTop: '25px'}}>Client</Message.Header>
                                <p>Voxel Enterpries Inc.</p>
                            </Message>
                        </Modal.Description>
                    </Modal.Content>
            </Modal>
            </Container>
        </>
    );
};

export default ProjectModals;