import React from 'react';
import { Modal, Button, Icon, Header } from 'semantic-ui-react';

const Extras = (props) => {
    return (
        <>
            <Modal
                onClose={() => props.setOpen(false)}
                closeIcon
                // dimmer='blurring' 
                trigger={
                    <Button primary icon>
                        Unmask <Icon name='right chevron' loading/>
                    </Button>
                }
            >
                <Modal.Header>Extras</Modal.Header>
                <Modal.Content content>
                    <Modal.Description>
                        <Header>My Time Living Abroad</Header>
                        <p>I'll never forget the day I left the Makati Condo after a meeting with Titan Talent Agency. It was my wife's (then girlfriend) idea while living in the Philippines to speak with an agency and just see what happens! Being the cynical type I left the condo not thinking much would arise from the ‘seeking stardom’ ashes.</p><p>I continued to enjoy and experience the wonderful city of Manila as I prepared for the birth of my first daughter.  Then one day as I was strolling around in SM Fairview – my phone rang.  It was Titan and they wanted to know if I was available for an audition! I said Heeellll Yeah.  I was excited but did my best to temper expectations and I predicted it turned out to be nothing :( </p><p>Then it happened! The unbelievable … the unthinkable … the unimaginable (shall I keep going..?) - the call of all calls! Somehow, someway, by the grace of something higher than my brain can comprehend – I GOT A COMMERCIAL!! And the coolest part is that I didn’t even audition.  Up to that moment I can’t recall feeling more joy than being awarded my first commercial in the Philippines.  Enough talk, check it out … </p>
                    </Modal.Description>  
                    <div className='box'>
                        <iframe width="100%" height="272" src="https://www.youtube.com/embed/N90gq-fc3Xw?rel=0" frameborder="0" allowfullscreen="" title='oplus'></iframe>
                        <header>
                            <h3>O+ Commerical</h3>
                            <p>December 2014</p>
                        </header>
                        <p>This commerical was filmed and aired in the Philippines. It was for a cellphone company O+. This was my first commercial and very memorable because it only stars myself solo in the camera.</p>
                    </div>
                    <Modal.Description>
                        <Header style={{marginTop: '20px'}}>Ohh Wait, There’s More ...</Header>
                        <p>So after my first commercial you know you’re boy was feelin’ himself (not really).  Unfortunately my first commercial came so easy and there was apart of me that thought it will always be this easy.  I just kept going to audition after audition … 2.5 hour trips to Makiti! </p><p>Yes, I would check my Uber sometimes after a trip and realize I only drove 15 miles and was in the Uber for two plus hours.  After continue the hustle it happened again.  This one felt much sweeter because the audition process was long and stressful.</p><p>I never knew if I had it – didn’t have it … my thoughts were, just tell me already.  But, at the end of the day I was the guy they were looking for; and I did my best to deliver.  This was my biggest pay day and probably my favorite commercial as well.</p><p>One of the coolest things about this gig was that they asked me to come to their company retreat at this fancy hotel.  My job was to walk out on stage and pick up this women, turn around and then gyrate in front the crowd as they cheer me along! Boy that was great fun.  Take a look at my second commercial in the Philippines.</p>
                    </Modal.Description>
                    <div className='box'>
                        <iframe width="100%" height="272" src="https://www.youtube.com/embed/SA4xYmEr2tk?rel=0" frameborder="0" allowfullscreen="" title='oplus'></iframe>
                        <header>
                            <h3>Nestle</h3>
                            <p>February 2015</p>
                        </header>
                        <p>Filmed and aired in the Philippines. This commerical is also very special because it involves a big brand. I had a blast making this and it paid the most money!</p>
                    </div>
                </Modal.Content>   
            </Modal>
        </>
    );
}

export default Extras