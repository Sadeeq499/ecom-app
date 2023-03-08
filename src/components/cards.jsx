import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function cards({image,Price,title,btn}) {
  return (
       <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{Price}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default cards