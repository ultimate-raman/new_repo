import React from "react";
import Image_one from "./Home/Image_one";
import {Container, Row, Col, Button } from 'react-bootstrap';
import Accordion_App from "./Accordion/Accordion_App";

const StartSelling = () =>{
    return (<>

<div style={{margin: "20px"}}>
   Q & A
   <Container>
     <Row>
       <Col>
         <div><Accordion_App /></div>
       </Col>
       <Col>
          <div><Accordion_App /></div>
       </Col>
      </Row>
   </Container>
</div>

    <Image_one/ >
    <h1>Join Our Growing Freelance Community</h1>

    <div style= {{backgroundColor: "grey"}}>
    <span><h1>How It Works</h1></span>
    <Container>
  <Row>
    <Col>
       <h2>1. Create A Gig</h2>
       <p> Sign up for free, set up your Gig, and offer your work to our global audience. </p>
    </Col>
    <Col>
       <h2>2. Deliver Great Work</h2>
       <p> Get notified when you get an order and use our system to discuss details with customers. </p>
    </Col>
    <Col>
       <h2>3. Get Paid</h2>
       <p> Get paid on time, every time. Payment is transferred to you upon order completion. </p>
    </Col>
  </Row>
</Container>
    </div>

    <h1>Buyer Stories</h1>

    Sign up
    Link

    Footer
<Accordion_App/ >

    </>);
};

export default StartSelling;