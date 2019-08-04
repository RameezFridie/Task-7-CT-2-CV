import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Education extends React.Component {
    render() {
        let edu_school = {
            high_school: {
                1:'Oude Molen THS',
                2:'Matriculated, Grade 12',
                3:'December 2010'
            },
            tertiary: {
                1:'CPUT Bellville Campus',
                2:'ND: Civil Engineering',
                3:'2012-2014'
            },
            course_1: {
                1:'College of Cape Town Crawford',
                2:'Propel 3: Cisco Course',
                3:'2017'
            },
            course_2: {
                1:'CoGrammar BootCamp',
                2:'Coding Course',
                3:'2019'

            }

        }
        return (
            <Container className='edu'>
                <Row>
                    <Col sm={4}>
                    <h2>Education</h2>
                    </Col>
                    <Col sm={8}>
                    <div className='styling_info'>
                        <h5>{edu_school.high_school[1]}</h5>
                        <p>{edu_school.high_school[2]}</p>
                    </div>
                    <div className='styling_info'>
                        <h5>{edu_school.tertiary[1]}</h5>
                    </div>
                    <div className='styling_info'>
                        <h5>{edu_school.course_1[1]}</h5>
                    </div>
                    <div className='styling_info'>
                        <h5>{edu_school.course_2[1]}</h5>
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}