import React from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function WeatherCard(props) {

    return (
        
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Container>
        <Card.Subtitle className="mb-2 text-muted">{props.location}</Card.Subtitle>
        <Card.Title className="temp"> {props.temperatura}°C </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
        </Container>
        <Container>
      <Row className="weather-options">
        <Col xs={6} md={4}>
          <Image src="/icons/humidity.png"  style={{width : '30px'}} rounded />
          <p>{props.humidity} %</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="/icons/weather.png" style={{width : '30px'}} rounded />
          <p>{props.precipitation} %</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src="/icons/wind.png" style={{width : '30px'}} rounded />
          <p>{props.wind} Km/h</p>
        </Col>
      </Row>
    </Container>

      </Card.Body>
    </Card>
    
    )
}