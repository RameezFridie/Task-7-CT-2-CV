import React from 'react';
import pic from './images/mepic.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export class Personal extends React.Component {
    render() {
        let info_person = {
            d_o_b:'September, 18, 1992',
            place:'Cape Town, Western Cape, South Africa',
            Citizenship:'South African',
            i_d:'9209185195086',
            drivers:'Code B (with PDP)',
            pic:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjq-7XF7t7jAhUr8uAKHQjDBXUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.fotolia.com%2Fid%2F113927909&psig=AOvVaw1fBNOVOwhyLlM2Cr3sdJcK&ust=1564652369772070'
        };
        let contact_info = {
            address: {1:'381 Bonteheuwel Avenue',2:'Bonteheuwel',3:'Athlone',4:'7764'},
            home_number: '0216950867',
            cell_number: '0658926690',
            email: 'rameezfridie@gmail.com'
        };

        return(
            <div>
                 <Container>
                     <Row>
                         <Col xs={12} md={8}>
                         <h1 id='name'>Rameez Fridie</h1>
                             <Image id='pict' src={pic} roundedCircle/>
                         </Col>
                         <Col id='info-c' xs={6} md={4}>
                             <strong id='cont'>
                             <p>{contact_info.address[1]}</p>
                             <p>{contact_info.address[2]}</p>
                             <p>{contact_info.address[3]}</p>
                             <p>{contact_info.address[4]}</p>
                             <p>Home Number: {contact_info.home_number}</p>
                             <p>Cell Number: {contact_info.cell_number}</p>
                             <p>Email: {contact_info.email}</p>
                             </strong>
                         </Col>
                     </Row>
                 </Container>
                 <Container id='personal'>
                    <Row>
                        <Col sm={4}>
                        <h2 className='header'>Personal</h2>
                        </Col>
                        <Col sm={8}>
                            <div className='styling_info'>
                                <p>Date of Birth: {info_person.d_o_b}</p>
                                <p>Place of Birth: {info_person.place}</p>
                                <p>Citizenship: {info_person.Citizenship}</p>
                                <p>Identity Number: {info_person.i_d}</p>
                                <p>Drivers: {info_person.drivers}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}