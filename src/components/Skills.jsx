import React from 'react';
// import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

export class Skills extends React.Component {
    render() {
        var skills = [
            'Communication',
            'Time Management',
            'Decision Making',
            'Conflict Resolution',
            'Adaptability'
        ];
        return(
                <Container className='edu'>
                    <Row>
                        <Col sm={4}>
                        <h2>Skills</h2>
                        </Col>
                        <Col sm={8}>
                            <div>
                            <h6>{skills[0]}</h6>
                                <ProgressBar variant='success' now='70' label='3.5/5'/>
                            </div>
                            <div>
                            <h6>{skills[1]}</h6>
                                <ProgressBar variant='danger' now='50' label='2.5/5'/>
                            </div>
                            <div>
                            <h6>{skills[2]}</h6>
                                <ProgressBar variant='info' now='82' label='3.8/5'/>
                            </div>
                            <div>
                            <h6>{skills[3]}</h6>
                                <ProgressBar variant='warning' now='60' label='3/5'/>
                            </div>
                            <div>
                            <h6>{skills[4]}</h6>
                                <ProgressBar variant='info' now='95' label='4.8/5'/>
                            </div>

                        </Col>
                    </Row>
                </Container>
        )
    }
}
