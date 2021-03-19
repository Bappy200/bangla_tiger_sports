import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import bus from '../../images/Frame-1.png'
import car from '../../images/Frame-2.png'
import bike from '../../images/Frame.png'
import train from '../../images/Group.png'

function Home() {
    const cardStyle = { padding: '15px', border: 'none', outline: 'none', boxShadow: '1px 1px 20px #3333', cursor: 'pointer' }
    const history = useHistory();

    const handlerCategorys = (to)=>{
        history.push(to);
    }

    return (
        <div className='main-content' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

            <CardDeck>
                
                    <Card style={cardStyle} onClick={()=> handlerCategorys('/car')}>
                        <Card.Img variant="top" src={bus} />
                        <Card.Body>
                            <Card.Title className='text-center'>Bus</Card.Title>
                        </Card.Body>
                    </Card>
                

                <Card style={cardStyle} onClick={()=> handlerCategorys('/bike')}>
                    <Card.Img variant="top" src={bike} />
                    <Card.Body>
                        <Card.Title className='text-center'>Bike</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={cardStyle} onClick={()=> handlerCategorys('/bus')}>
                    <Card.Img variant="top" src={car} />
                    <Card.Body>
                        <Card.Title className='text-center'>Car</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={cardStyle} onClick={()=> handlerCategorys('/train')}>
                    <Card.Img variant="top" src={train} />
                    <Card.Body>
                        <Card.Title className='text-center'>Train</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Home
