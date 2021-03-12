import React from 'react';
import './Player.css'
import { Button, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Player = (props) => {
    const { strPlayer, idPlayer, strSport, strThumb, } = props.player;
    const history = useHistory()

    const handleDetails = (idPlayer) => {
        history.push(`player/${idPlayer}`)
    }

    return (
        <div>
            <Container className="bg-dark mt-5">
                <Card className="card  mt-3">
                    <Card.Img variant="top" src={strThumb} />
                    {/* <img src={strThumb != 'null'? {strThumb} a : 'http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg' }/> */}
                    {/* <img src={article.urlToImage != 'null'? article.urlToImage : 'http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg' }  */}

                    <Card.Body className=" bg-primary">
                        <h2 className="text-center">{strPlayer}</h2>
                        <h5 className="text-center">Sports Type: {strSport}</h5>
                        <Button className="explore-Btn" onClick={() => handleDetails(idPlayer)} variant="warning"><FontAwesomeIcon icon={faInfoCircle} /> Details</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default Player;