import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Categories from '../../Components/Categories/Categories';
import Video from '../../Components/video/Video';

function Homescreen(props) {
    return (

        <Container >
            <Categories/>
            <Row>
                {[...new Array(20)].map(()=>(
                    <Col lg={3} md={4}>
                    <Video/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Homescreen;